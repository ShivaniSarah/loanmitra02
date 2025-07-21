
import { MessageSquare, Home, Calculator, FileText, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomeLoans = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in home loan options. Can you help me?", "_blank");
  };

  const loanTypes = [
    {
      title: "Purchase Loans",
      description: "Finance your dream home with competitive rates and flexible terms",
      icon: Home,
      features: ["Up to 90% financing", "Fixed & variable rates", "First-time buyer programs"]
    },
    {
      title: "Refinancing",
      description: "Lower your monthly payments or access your home's equity",
      icon: Calculator,
      features: ["Cash-out refinancing", "Rate reduction", "Term adjustments"]
    },
    {
      title: "Construction Loans",
      description: "Build your custom home with our specialized construction financing",
      icon: FileText,
      features: ["Progress-based funding", "Competitive rates", "Expert guidance"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Pre-Approval",
      description: "Get pre-approved in minutes with our AI-powered assessment"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Bank-grade security for all your personal and financial information"
    },
    {
      icon: CheckCircle,
      title: "Expert Support",
      description: "24/7 guidance from our loan specialists throughout the process"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Dream Home
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Awaits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get the best home loan rates and expert guidance through WhatsApp. 
              From first-time buyers to refinancing - we make home ownership possible.
            </p>

            <div className="flex items-center justify-center pt-8">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Home Loan Quote
              </Button>
            </div>

            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Rates from 3.5%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Quick Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Loan Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're buying, building, or refinancing, we have the perfect loan for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <loan.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LoanMitra.ai for Home Loans?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the future of home financing with our AI-powered platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Your Home Loan?
            </h2>
            <p className="text-xl text-blue-100">
              Start your journey to homeownership today. Get instant quotes and expert advice through WhatsApp.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLoans;
