import { MessageSquare, User, Handshake, Clock, Shield, CheckCircle, Calculator, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LoanSettlement = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in loan settlement options. Can you help me?", "_blank");
  };

  const settlementOptions = [
    {
      title: "Debt Negotiation",
      description: "Expert negotiation to reduce your debt amount",
      icon: Calculator,
      features: ["Lower principal", "Reduced interest", "Extended payment plans"]
    },
    {
      title: "Settlement Agreements",
      description: "Formalize settlements with creditors",
      icon: FileText,
      features: ["Legal documentation", "Binding agreements", "Peace of mind"]
    },
    {
      title: "Credit Counseling",
      description: "Professional advice to manage debt",
      icon: Users,
      features: ["Budget planning", "Financial education", "Debt management strategies"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Results",
      description: "Quick settlements to resolve your debt issues"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Confidential and secure handling of your financial data"
    },
    {
      icon: User,
      title: "Personalized Advice",
      description: "Custom strategies tailored to your unique situation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Loan
              <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Settlement
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Negotiate better settlement terms and get expert guidance on resolving your loan obligations.
            </p>

            <div className="flex items-center justify-center pt-8">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Settlement Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loan Settlement Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Resolve your loan obligations with expert guidance and negotiation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {settlementOptions.map((option, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <option.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full mt-6 bg-orange-600 hover:bg-orange-700"
                  >
                    Explore Options
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
              Why Choose Our Settlement Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <benefit.icon className="h-8 w-8 text-orange-600" />
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

export default LoanSettlement;
