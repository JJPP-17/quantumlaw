import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { getContents } from '../../actions/content';

const RichTextRenderer = ({ content }) => {
  if (!content) return null;

  const lines = content.split('\n');
  const result = [];
  let currentList = null;
  let isNested = false;

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Check if line is a list item
    if (trimmedLine.startsWith('-') || trimmedLine.startsWith('•')) {
      // Check if it's a nested item (has more spaces before the dash)
      const leadingSpaces = line.match(/^\s*/)[0].length;
      const isNestedItem = leadingSpaces > 2;
      const textContent = trimmedLine.substring(1).trim();

      if (isNestedItem && currentList) {
        // Add to nested list
        if (!isNested) {
          currentList.items.push({
            text: textContent,
            items: []
          });
          isNested = true;
        } else {
          currentList.items[currentList.items.length - 1].items.push(textContent);
        }
      } else {
        // Start a new list if needed
        if (!currentList || !isNestedItem) {
          if (currentList) {
            result.push(currentList);
          }
          currentList = {
            type: 'list',
            items: [{ text: textContent, items: [] }]
          };
          isNested = false;
        }
      }
    } else if (trimmedLine) {
      // Regular paragraph
      if (currentList) {
        result.push(currentList);
        currentList = null;
      }
      result.push({
        type: 'paragraph',
        content: trimmedLine
      });
    }
  });

  if (currentList) {
    result.push(currentList);
  }

  return (
    <div className="space-y-6">
      {result.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-gray-700 text-lg">
              {block.content}
            </p>
          );
        } else if (block.type === 'list') {
          return (
            <ul key={index} className="space-y-3">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-black mt-[2px]" />
                    <span className="text-lg">{item.text}</span>
                  </div>
                  {item.items.length > 0 && (
                    <ul className="ml-4 mt-3 space-y-3">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-center gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[2px]" />
                          <span className="text-lg">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          );
        }
      })}
    </div>
  );
};

export default async function PracticeArea({ params }) {
  const { data: contents = [] } = await getContents();

  // Find the title content for this practice area
  const titleContent = contents.find(content => 
    content.key.startsWith('whatWedoTitle') && 
    content.key.toLowerCase().includes(params.slug)
  );

  // Find the expertise content for this practice area
  const expertiseDescription = contents.find(content => 
    content.key.startsWith('whatWedoExpertise') && 
    content.key.replace('whatWedoExpertise', '').toLowerCase() === params.slug
  );

  // Find the our services content for this practice area
  const ourservicesDescription = contents.find(content => 
    content.key.startsWith('whatWedoServices') && 
    content.key.replace('whatWedoServices', '').toLowerCase() === params.slug
  );



  if (!titleContent) {
    return (
      <main className="bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Practice Area Not Found
            </h1>
            <Link 
              href="/whatwedo"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Practice Areas
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <Link 
          href="/whatwedo"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          Back to Practice Areas
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {titleContent.value}
        </h1>
        <p className="text-base text-gray-600 pt-5">
            {expertiseDescription.description}
        </p>
      </section>

      {/* Our Services Section */}
      {ourservicesDescription && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Services:
            </h2>
            <div className="rounded-lg space-y-6">
              <div className="prose max-w-none text-lg">
                <RichTextRenderer content={ourservicesDescription.description} />
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
} 