
import { MessageSquare, Plus, TrendingUp, Clock, Shield, CheckCircle, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewLoans = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in exploring new loan options. Can you help me?", "_blank");
  };

  const newLoanTypes = [
    {
      title: "Instant Cash Loans",
      description: "Get money in your account within 30 minutes with our express approval process",
      icon: Clock,
      features: ["30-minute approval", "No paperwork", "Digital verification"]
    },
    {
      title: "Gold Loans",
      description: "Secure loans against your gold jewelry with competitive interest rates",
      icon: Star,
      features: ["High loan-to-value ratio", "Quick disbursement", "Safe gold storage"]
    },
    {
      title: "Property Loans",
      description: "Leverage your property for substantial funding with flexible terms",
      icon: Target,
      features: ["High loan amounts", "Long tenure options", "Competitive rates"]
    }
  ];

  const benefits = [
    {
      icon: Plus,
      title: "New Customer Benefits",
      description: "Special rates and zero processing fees for first-time borrowers"
    },
    {
      icon: Shield,
      title: "100% Secure Process",
      description: "Bank-grade security with encrypted data protection"
    },
    {
      icon: TrendingUp,
      title: "Flexible Options",
      description: "Customizable loan terms to match your financial goals"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              New Loan
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest loan products designed for modern financial needs. 
              Quick approvals, competitive rates, and innovative solutions.
            </p>

            <div className="flex items-center justify-center pt-8">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Explore New Loans
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Loan Innovations
            </h2>
            <p className="text-xl text-gray-600">
              Stay ahead with our newest financial products and services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {newLoanTypes.map((loan, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <loan.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
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
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
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
              Why Choose Our New Products?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
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

export default NewLoans;
