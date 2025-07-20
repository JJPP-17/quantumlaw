import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request) {
  try {
    const { contentType, topic, tone, length } = await request.json()

    const systemPrompt = `You are an expert legal content writer for Quantum Law Group, a leading law firm in Sydney, Australia. 

Your task is to create professional, accurate, and engaging legal content that:
- Provides valuable information to potential clients
- Demonstrates expertise and authority
- Is written in a clear, accessible manner
- Includes relevant legal context and insights
- Encourages readers to seek professional legal advice

IMPORTANT GUIDELINES:
- Always include appropriate disclaimers about seeking professional legal advice
- Be accurate and up-to-date with Australian law
- Use professional but accessible language
- Include practical insights and tips
- End with a call-to-action encouraging consultation

Firm Information:
- Quantum Law Group
- Location: Suite 1503, Level 15, 447 Kent Street, Sydney NSW 2000
- Phone: +61 2 9188 8866
- Email: info@quantumlaw.com.au
- Consultation: https://calendly.com/quantumlaw/strategyconsult

Practice Areas: Commercial Law, Litigation, Corporate Law, Employment Law, Property Law, Family Law, and more.

Content should be well-structured with headings, bullet points where appropriate, and a professional conclusion.`

    const userPrompt = `Please create a ${contentType.toLowerCase()} about "${topic}".

Requirements:
- Tone: ${tone}
- Length: ${length}
- Target audience: Potential legal clients and general public
- Include relevant legal insights and practical advice
- End with a professional call-to-action

Make the content engaging, informative, and professional while maintaining legal accuracy.`

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      max_tokens: 2000,
      temperature: 0.7,
    })

    return NextResponse.json({
      content: response.choices[0].message.content
    })

  } catch (error) {
    console.error('Content Generator API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
} 