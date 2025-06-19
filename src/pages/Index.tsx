
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Heart, Code2, Shield, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const personalityTypes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Single",
      subtitle: "ready to mingle ✨",
      description: "Open to casual chats, deep convos, and maybe some campus romance 👀",
      color: "from-pink-500 to-rose-400",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Double",
      subtitle: "couple vibes only 💕",
      description: "For the lovebirds who want to connect with other couples and share the energy",
      color: "from-purple-500 to-violet-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Just_Sigmas",
      subtitle: "dev fun zone 🚀",
      description: "Coders, techies, and meme lords unite! Where debugging meets deep thoughts",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Anonymous Chat Rooms",
      description: "Speak your truth without the anxiety"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Confession Wall",
      description: "Drop those midnight thoughts safely"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Match Suggestions",
      description: "Let the algorithm find your campus tribe"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Reputation Points",
      description: "Build your anonymous street cred"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-sm font-medium">
              ✨ Exclusively for verified college students
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Your Campus,
              <br />
              Your Vibe,
              <br />
              <span className="text-3xl sm:text-5xl lg:text-6xl">Zero Judgement</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The anonymous social app where college life gets real. 
              <br className="hidden sm:block" />
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Connect, confess, and find your people
              </span> — no fake personas required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join the Vibe ✨
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
              >
                See How It Works 👀
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Personality Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pick Your Campus Energy 🎭
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your vibe and connect with people who match your frequency
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personalityTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`${type.bgColor} border-0 p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${type.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {type.title}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-4">
                {type.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {type.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Thrive 🚀
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Safe spaces, real connections, and features that actually make sense for campus life
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Find Your Campus Tribe? 🎓
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've already discovered the freedom of authentic, anonymous connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now 🔥
            </Button>
            <p className="text-purple-100 text-sm">
              Free to join • Verified students only • Safe & secure
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Made with 💜 for the next generation of campus connections
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
