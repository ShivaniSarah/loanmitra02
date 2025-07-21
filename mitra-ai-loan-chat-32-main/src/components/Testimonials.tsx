
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      content: "LoanMitra.ai helped me get a business loan within 2 days! The WhatsApp process was so simple and the AI understood exactly what I needed.",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Priya Sharma",
      role: "Working Professional",
      content: "I consolidated 4 different loans into one with much better interest rates. The AI assistant guided me through everything step by step.",
      rating: 5,
      location: "Delhi"
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      content: "Amazing service! Got pre-approved for a home loan in minutes through WhatsApp. The whole process was transparent and hassle-free.",
      rating: 5,
      location: "Bangalore"
    },
    {
      name: "Sneha Reddy",
      role: "Teacher",
      content: "LoanMitra.ai helped me settle my old loans at 60% of the original amount. Their negotiation skills saved me thousands of rupees!",
      rating: 5,
      location: "Hyderabad"
    },
    {
      name: "Vikram Singh",
      role: "IT Professional",
      content: "The AI is incredibly smart and found me loan options I didn't even know existed. Best part - everything happens on WhatsApp!",
      rating: 5,
      location: "Pune"
    },
    {
      name: "Kavitha Nair",
      role: "Freelancer",
      content: "As a freelancer, getting loans was always difficult. LoanMitra.ai found me lenders who understand freelance income. Highly recommended!",
      rating: 5,
      location: "Chennai"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers who found their perfect loan solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full">
            <span className="font-semibold">Join 10,000+ satisfied customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
