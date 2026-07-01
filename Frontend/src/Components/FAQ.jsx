import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "Is EngiWorld free to use?",
      answer:
        "Yes! EngiWorld is free for engineering students. You can access notes, PYQs, syllabus, and many other resources without any cost.",
    },
    {
      question: "Which engineering branches are supported?",
      answer:
        "We currently support Computer, IT, AI & DS, AI & ML, Mechanical, Civil, Electrical, and ENTC departments.",
    },
    {
      question: "Can I upload my own notes?",
      answer:
        "Yes. Students can contribute quality notes, projects, and study materials to help the engineering community.",
    },
    {
      question: "How can I find internships and placements?",
      answer:
        "Visit the Internship & Placement section where companies regularly post opportunities and career resources.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "Yes. Creating an account allows you to access personalized resources, save content, and manage your profile.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FFF5F5]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block bg-[#FFE5E5] text-[#FF6B6B] px-5 py-2 rounded-full font-semibold">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Find answers to the most common questions about EngiWorld.
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg text-gray-800">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp className="text-[#FF6B6B] text-lg" />
                ) : (
                  <FaChevronDown className="text-[#FF6B6B] text-lg" />
                )}

              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-500 leading-7 border-t border-gray-100">
                  <p className="pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;