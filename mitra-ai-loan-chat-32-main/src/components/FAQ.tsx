
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does LoanMitra.ai work?",
      answer: "Simply message us on WhatsApp and our AI assistant will guide you through the loan process. We analyze your requirements and connect you with the best loan options available."
    },
    {
      question: "What types of loans do you offer?",
      answer: "We offer personal loans, business loans, home loans, car loans, and specialized services like loan consolidation and settlement. Our AI matches you with the most suitable options."
    },
    {
      question: "Is my information secure?",
      answer: "Absolutely. We use bank-grade encryption and follow strict data protection protocols. Your personal and financial information is completely secure with us."
    },
    {
      question: "How quickly can I get loan approval?",
      answer: "Our AI provides instant pre-approval status. Final approval depends on the lender, but most applications are processed within 24-48 hours."
    },
    {
      question: "Are there any fees for using LoanMitra.ai?",
      answer: "No, our loan matching and consultation services are completely free. You only pay standard processing fees directly to the lender if you choose to proceed with a loan."
    },
    {
      question: "Can you help with bad credit scores?",
      answer: "Yes! Our AI analyzes multiple factors beyond credit scores and can find suitable loan options even for applicants with less-than-perfect credit history."
    },
    {
      question: "What is loan consolidation?",
      answer: "Loan consolidation combines multiple existing loans into one single loan, often with better terms, lower interest rates, and simplified monthly payments."
    },
    {
      question: "How does loan settlement work?",
      answer: "Our experts negotiate with lenders on your behalf to settle loans for less than the full amount owed, helping you resolve debt obligations more affordably."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our AI-powered loan services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
