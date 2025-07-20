'use client'

import { useState, useEffect } from 'react'
import { FaPen, FaCopy, FaDownload, FaSpinner } from 'react-icons/fa'

export default function AIContentGenerator() {
  const [mounted, setMounted] = useState(false)
  const [contentType, setContentType] = useState('')
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('')
  const [length, setLength] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contentTypes = [
    'Legal Blog Post',
    'Case Study',
    'Legal Update',
    'FAQ Section',
    'Practice Area Overview',
    'Client Newsletter'
  ]

  const tones = [
    'Professional',
    'Educational',
    'Conversational',
    'Authoritative',
    'Empathetic'
  ]

  const lengths = [
    'Short (300-500 words)',
    'Medium (500-800 words)',
    'Long (800-1200 words)',
    'Comprehensive (1200+ words)'
  ]

  const handleGenerate = async () => {
    if (!contentType || !topic || !tone || !length) {
      alert('Please fill in all fields')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/content-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contentType,
          topic,
          tone,
          length
        })
      })

      if (!response.ok) {
        throw new Error('Failed to generate content')
      }

      const data = await response.json()
      setGeneratedContent(data.content)
    } catch (error) {
      console.error('Error:', error)
      setGeneratedContent('Unable to generate content at this time. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
    alert('Content copied to clipboard!')
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([generatedContent], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${contentType.toLowerCase().replace(' ', '-')}-${topic.toLowerCase().replace(' ', '-')}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const resetForm = () => {
    setContentType('')
    setTopic('')
    setTone('')
    setLength('')
    setGeneratedContent('')
  }

  if (!mounted) {
    return (
      <div className="max-w-6xl mx-auto p-6">
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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <FaPen className="mx-auto text-4xl text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Content Generator</h2>
          <p className="text-gray-600">Generate professional legal content for your website and marketing materials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Parameters</h3>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Content Type</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select content type...</option>
                {contentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Topic/Subject</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Employment Law Changes 2024, Contract Disputes, etc."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select tone...</option>
                {tones.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Length</label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select length...</option>
                {lengths.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={isLoading || !contentType || !topic || !tone || !length}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FaPen className="mr-2" />
                    Generate Content
                  </>
                )}
              </button>
              
              <button
                onClick={resetForm}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Generated Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Generated Content</h3>
              {generatedContent && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    title="Download as text file"
                  >
                    <FaDownload />
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 min-h-[400px]">
              {generatedContent ? (
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap text-gray-800">{generatedContent}</div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <FaPen className="mx-auto text-3xl mb-2 opacity-50" />
                    <p>Generated content will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Tips for Better Content Generation:</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Be specific with your topic to get more targeted content</li>
            <li>• Choose the appropriate tone for your target audience</li>
            <li>• Review and edit generated content before publishing</li>
            <li>• Ensure all legal information is accurate and up-to-date</li>
            <li>• Add your firm's specific insights and expertise</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 