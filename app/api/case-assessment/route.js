import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request) {
  try {
    const assessment = await request.json()

    const systemPrompt = `You are an AI legal analyst for Quantum Law Group. Analyze the provided case assessment and provide:

1. A concise summary of the legal situation
2. Specific recommendations for the client
3. Clear next steps they should take

IMPORTANT GUIDELINES:
- Be professional and empathetic
- Provide general guidance only, not specific legal advice
- Always recommend consulting with qualified lawyers
- Consider urgency, jurisdiction, and budget constraints
- Suggest appropriate practice areas and specialists
- Include contact information for the firm

Firm Contact: +61 2 9188 8866
Consultation Booking: https://calendly.com/quantumlaw/strategyconsult

Format your response as JSON with these fields:
{
  "summary": "Brief analysis of the case",
  "recommendations": ["rec1", "rec2", "rec3"],
  "nextSteps": ["step1", "step2", "step3"]
}`

    const userPrompt = `Please analyze this case assessment:

Case Type: ${assessment.caseType}
Urgency: ${assessment.urgency}
Jurisdiction: ${assessment.jurisdiction}
Description: ${assessment.description}
Budget: ${assessment.budget}
Timeline: ${assessment.timeline}

Provide a professional analysis and recommendations.`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      max_tokens: 800,
      temperature: 0.7,
    })

    const content = response.choices[0].message.content
    
    // Try to parse JSON response
    try {
      const parsedResponse = JSON.parse(content)
      return NextResponse.json(parsedResponse)
    } catch (parseError) {
      // If JSON parsing fails, create a structured response
      return NextResponse.json({
        summary: content,
        recommendations: [
          "Schedule a consultation with our legal team",
          "Prepare relevant documents and evidence",
          "Consider the urgency and timeline requirements"
        ],
        nextSteps: [
          "Contact us at +61 2 9188 8866",
          "Book a consultation online",
          "Gather any relevant documentation"
        ]
      })
    }

  } catch (error) {
    console.error('Case Assessment API Error:', error)
    return NextResponse.json(
      { 
        summary: 'Unable to generate assessment at this time. Please contact us directly for assistance.',
        recommendations: [
          'Contact our office at +61 2 9188 8866',
          'Schedule a consultation with our legal team'
        ],
        nextSteps: [
          'Book a consultation',
          'Prepare relevant documents'
        ]
      },
      { status: 500 }
    )
  }
} 