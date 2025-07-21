
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, TrendingUp, CheckCircle, Star, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CibilScore = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in improving my CIBIL score", "_blank");
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Credit Score Analysis",
      description: "Get detailed analysis of your current credit score and factors affecting it."
    },
    {
      icon: CheckCircle,
      title: "Personalized Action Plan",
      description: "Receive customized strategies to improve your credit score effectively."
    },
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Work with credit experts who understand the Indian credit system."
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Get continuous support and monitoring throughout your credit improvement journey."
    }
  ];

  const benefits = [
    "Free credit score check",
    "Detailed credit report analysis",
    "Personalized improvement strategies",
    "Expert consultation",
    "Monthly progress tracking",
    "Better loan eligibility"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <TrendingUp className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upgrade Your CIBIL Score
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Improve your credit score with our AI-powered strategies and expert guidance. 
              Get better loan terms and financial opportunities.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Credit Improvement
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help Improve Your CIBIL Score
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive approach ensures sustainable credit score improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You Get
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive credit improvement services designed for your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Improve Your Credit Score?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Start your credit improvement journey today with our expert guidance
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CibilScore;
