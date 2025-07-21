
import { MessageSquare, Layers, PieChart, Calculator, DollarSign, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LoanConsolidation = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in loan consolidation options. Can you help me?", "_blank");
  };

  const benefits = [
    {
      title: "Single Monthly Payment",
      description: "Combine multiple loans into one easy-to-manage payment",
      icon: Layers,
      features: ["Simplified finances", "Reduced stress", "Better organization"]
    },
    {
      title: "Lower Interest Rates",
      description: "Potentially reduce your overall interest burden",
      icon: PieChart,
      features: ["Better rates", "Save money", "Improved terms"]
    },
    {
      title: "Improved Credit Score",
      description: "Better payment management can boost your credit rating",
      icon: Calculator,
      features: ["Credit improvement", "Better history", "Future benefits"]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Get your consolidation approved and processed within 48 hours"
    },
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your financial information is protected with bank-grade security"
    },
    {
      icon: DollarSign,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges or hidden costs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-green-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Simplify Your
              <span className="block bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Finances
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Consolidate multiple loans into one manageable payment with better terms 
              and lower interest rates. Take control of your financial future.
            </p>

            <div className="flex items-center justify-center pt-8">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Consolidation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loan Consolidation Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Transform multiple loan payments into one simple, manageable solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
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
                    Learn More
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
              Why Choose Our Consolidation Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanConsolidation;
