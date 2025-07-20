import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request) {
  try {
    const { message, history } = await request.json()

    // Create conversation context
    const conversationHistory = history.map(msg => ({
      role: msg.type === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))

    // Add system prompt for legal context
    const systemPrompt = `You are an AI legal assistant for Quantum Law Group, a leading law firm in Sydney, Australia. Your role is to:

1. Provide general legal information and guidance
2. Help potential clients understand their legal situation
3. Direct them to appropriate resources and services
4. Encourage consultation with actual lawyers for specific legal advice
5. Be professional, empathetic, and accurate

IMPORTANT DISCLAIMERS:
- Always clarify that you provide general information only
- Recommend consulting with qualified lawyers for specific legal advice
- Never provide specific legal advice or case outcomes
- Direct urgent legal matters to contact the firm directly at +61 2 9188 8866

Firm Information:
- Location: Suite 1503, Level 15, 447 Kent Street, Sydney NSW 2000
- Phone: +61 2 9188 8866
- Email: info@quantumlaw.com.au
- Consultation booking: https://calendly.com/quantumlaw/strategyconsult

Practice Areas: Commercial Law, Litigation, Corporate Law, Employment Law, Property Law, Family Law, and more.

Keep responses concise, helpful, and professional.`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: systemPrompt },
        ...conversationHistory,
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({
      response: response.choices[0].message.content
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
} 