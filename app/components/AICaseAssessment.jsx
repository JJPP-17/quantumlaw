'use client'

import { useState, useEffect } from 'react'
import { FaGavel, FaLightbulb, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

export default function AICaseAssessment() {
  const [mounted, setMounted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [assessment, setAssessment] = useState({
    caseType: '',
    urgency: '',
    jurisdiction: '',
    description: '',
    budget: '',
    timeline: ''
  })
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const caseTypes = [
    'Commercial Dispute',
    'Employment Issue',
    'Property Matter',
    'Family Law',
    'Corporate Law',
    'Litigation',
    'Contract Review',
    'Other'
  ]

  const urgencyLevels = [
    'Very Urgent (within days)',
    'Urgent (within weeks)',
    'Moderate (within months)',
    'Not Urgent (flexible timeline)'
  ]

  const jurisdictions = [
    'New South Wales',
    'Victoria',
    'Queensland',
    'Western Australia',
    'South Australia',
    'Tasmania',
    'Northern Territory',
    'Australian Capital Territory',
    'Federal'
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure'
  ]

  const handleInputChange = (field, value) => {
    setAssessment(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/case-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessment)
      })

      if (!response.ok) {
        throw new Error('Failed to get assessment')
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
      setResult({
        summary: 'Unable to generate assessment at this time. Please contact us directly for assistance.',
        recommendations: ['Contact our office at +61 2 9188 8866', 'Schedule a consultation'],
        nextSteps: ['Book a consultation', 'Prepare relevant documents']
      })
    } finally {
      setIsLoading(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <FaLightbulb className="mx-auto text-4xl text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Case Assessment</h2>
              <p className="text-gray-600">Let's understand your legal situation to provide better guidance</p>
            </div>
            
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-medium">What type of legal matter are you dealing with?</span>
                <select
                  value={assessment.caseType}
                  onChange={(e) => handleInputChange('caseType', e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select case type...</option>
                  {caseTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Urgency Level</h2>
              <p className="text-gray-600">How urgent is your legal matter?</p>
            </div>
            
            <div className="space-y-3">
              {urgencyLevels.map(level => (
                <label key={level} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="urgency"
                    value={level}
                    checked={assessment.urgency === level}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Jurisdiction</h2>
              <p className="text-gray-600">Where is your legal matter located?</p>
            </div>
            
            <div className="space-y-3">
              {jurisdictions.map(jurisdiction => (
                <label key={jurisdiction} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="jurisdiction"
                    value={jurisdiction}
                    checked={assessment.jurisdiction === jurisdiction}
                    onChange={(e) => handleInputChange('jurisdiction', e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">{jurisdiction}</span>
                </label>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Case Description</h2>
              <p className="text-gray-600">Please provide a brief description of your situation</p>
            </div>
            
            <div>
              <textarea
                value={assessment.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your legal matter in detail..."
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Budget & Timeline</h2>
              <p className="text-gray-600">Help us understand your expectations</p>
            </div>
            
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-medium">What is your budget range?</span>
                <select
                  value={assessment.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range...</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">When do you need this resolved?</span>
                <input
                  type="text"
                  value={assessment.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  placeholder="e.g., Within 3 months, ASAP, etc."
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return assessment.caseType
      case 1: return assessment.urgency
      case 2: return assessment.jurisdiction
      case 3: return assessment.description.trim()
      case 4: return assessment.budget && assessment.timeline
      default: return false
    }
  }

  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  if (result) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <FaCheckCircle className="mx-auto text-5xl text-green-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete</h2>
            <p className="text-gray-600">Here's our analysis of your legal situation</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Summary</h3>
              <p className="text-gray-700">{result.summary}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommendations</h3>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <FaArrowRight className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Next Steps</h3>
              <ul className="space-y-2">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <FaArrowRight className="text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-6">
              <a
                href="https://calendly.com/quantumlaw/strategyconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {renderStep()}

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Back
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentStep === 4 ? (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Analyzing...' : 'Get Assessment'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 