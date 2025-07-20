# AI Features Setup Guide

This guide will help you set up the AI features for your Quantum Law Group website.

## Prerequisites

1. **OpenAI API Key**: You'll need an OpenAI API key to use the AI features
2. **Node.js**: Make sure you have Node.js installed (version 16 or higher)

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the API key (it starts with `sk-`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration (if not already configured)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

### 3. Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

## AI Features Available

### 1. AI Chatbot
- **Location**: Available on all pages (floating chat button)
- **Purpose**: Provides initial legal guidance and answers common questions
- **Features**: 
  - Real-time chat interface
  - Legal context awareness
  - Professional disclaimers
  - Directs to human consultation

### 2. AI Case Assessment
- **Location**: `/ai-assessment`
- **Purpose**: Helps potential clients understand their legal situation
- **Features**:
  - Multi-step assessment process
  - Case type classification
  - Urgency evaluation
  - Jurisdiction-specific guidance
  - Personalized recommendations

### 3. AI Content Generator
- **Location**: `/ai-content`
- **Purpose**: Generates professional legal content for marketing
- **Features**:
  - Multiple content types (blog posts, case studies, etc.)
  - Customizable tone and length
  - Copy and download functionality
  - SEO-optimized content

## Usage Guidelines

### For Clients (Chatbot & Case Assessment)
- Always include appropriate legal disclaimers
- Direct complex cases to human consultation
- Provide general guidance only, not specific legal advice
- Encourage professional consultation for serious matters

### For Staff (Content Generator)
- Review and edit all generated content before publishing
- Ensure legal accuracy and compliance
- Add firm-specific insights and expertise
- Optimize content for target audience

## API Endpoints

The AI features use the following API endpoints:

- `/api/chat` - Handles chatbot conversations
- `/api/case-assessment` - Processes case assessments
- `/api/content-generator` - Generates content

## Troubleshooting

### Common Issues

1. **"Failed to get response" error**
   - Check if your OpenAI API key is correct
   - Ensure you have sufficient API credits
   - Verify the API key is in the `.env.local` file

2. **Chatbot not appearing**
   - Check browser console for errors
   - Ensure the component is imported in `layout.jsx`
   - Verify all dependencies are installed

3. **Content generation fails**
   - Check API rate limits
   - Ensure all required fields are filled
   - Verify network connectivity

### Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your environment variables are set correctly
3. Ensure all dependencies are installed
4. Contact your development team for assistance

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your OpenAI API key secure
- Monitor API usage to control costs
- Regularly review and update security practices

## Cost Considerations

- OpenAI API usage incurs costs based on token usage
- Monitor your usage in the OpenAI dashboard
- Set up usage alerts to avoid unexpected charges
- Consider implementing rate limiting for production use 