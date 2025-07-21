import { MessageSquare, Shield, Clock, TrendingUp, Building, User, Layers, Handshake, Plus, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Get the best home loan rates with competitive terms, quick approvals, and expert guidance for your dream home.",
      color: "text-blue-600",
      path: "/home-loans"
    },
    {
      icon: TrendingUp,
      title: "Personal Loans",
      description: "Get instant personal loans for medical emergencies, travel, education and more with minimal documentation.",
      color: "text-green-600",
      path: "/personal-loans"
    },
    {
      icon: Building,
      title: "Business Loans",
      description: "Access working capital, equipment financing, and business expansion loans with competitive rates.",
      color: "text-blue-600",
      path: "/business-loans"
    },
    {
      icon: Layers,
      title: "Loan Consolidation",
      description: "Simplify multiple loans into one manageable payment with better terms and lower interest rates.",
      color: "text-purple-600",
      path: "/loan-consolidation"
    },
    {
      icon: Handshake,
      title: "Loan Settlement",
      description: "Negotiate better settlement terms and get expert guidance on resolving your loan obligations.",
      color: "text-orange-600",
      path: "/loan-settlement"
    },
    {
      icon: TrendingUp,
      title: "Upgrade Your CIBIL Score",
      description: "Improve your credit score with personalized strategies and expert guidance to access better loan terms.",
      color: "text-green-600",
      path: "/cibil-score"
    }
  ];

  const benefits = [
    "Instant responses via WhatsApp",
    "AI-powered loan matching",
    "Secure document processing",
    "24/7 customer support",
    "No hidden fees",
    "Expert financial advice"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Loan Solutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our AI-powered WhatsApp assistant provides personalized loan services 
            tailored to your financial needs and goals.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  onClick={() => navigate(feature.path)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose LoanMitra.ai?
            </h3>
            <p className="text-gray-600">
              Experience the future of loan assistance with our advanced AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
