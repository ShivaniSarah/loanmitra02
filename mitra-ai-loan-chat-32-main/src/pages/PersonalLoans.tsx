
import { MessageSquare, User, Heart, Plane, GraduationCap, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PersonalLoans = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in personal loan options. Can you help me?", "_blank");
  };

  const loanTypes = [
    {
      title: "Medical Emergencies",
      description: "Quick funding for urgent medical expenses and treatments",
      icon: Heart,
      features: ["Instant approval", "No collateral required", "Flexible repayment"]
    },
    {
      title: "Travel & Vacation",
      description: "Make your dream vacation a reality with travel loans",
      icon: Plane,
      features: ["Quick disbursement", "Competitive rates", "Easy documentation"]
    },
    {
      title: "Education Loans",
      description: "Invest in your future with education and skill development loans",
      icon: GraduationCap,
      features: ["Low interest rates", "Long tenure", "Moratorium period"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Approval",
      description: "Get approved within minutes with our AI-powered assessment"
    },
    {
      icon: Shield,
      title: "No Hidden Charges",
      description: "Transparent pricing with no processing fees or hidden costs"
    },
    {
      icon: User,
      title: "Minimal Documentation",
      description: "Simple application process with minimal paperwork required"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Personal Loans
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether it's for medical emergencies, travel, or education - 
              get instant personal loans with minimal documentation.
            </p>

            <div className="flex items-center justify-center pt-8">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Personal Loan Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Personal Loan Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Flexible financing for all your personal needs and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <loan.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Personal Loans?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
