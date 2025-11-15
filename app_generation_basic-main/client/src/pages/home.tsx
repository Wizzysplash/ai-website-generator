import { useState, useEffect } from "react";
import WebsiteGenerator from "@/components/website-generator";
import WebsitePreview from "@/components/website-preview";
import { Website } from "@shared/schema";

export default function Home() {
  const [generatedWebsite, setGeneratedWebsite] = useState<Website | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [confetti, setConfetti] = useState<Array<{id: number, left: number, delay: number}>>([]);

  // Confetti animation when website is generated
  useEffect(() => {
    if (generatedWebsite && !isGenerating) {
      setShowSuccess(true);
      
      // Generate confetti particles
      const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5
      }));
      setConfetti(particles);

      // Clear success message and confetti after animation
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setConfetti([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [generatedWebsite, isGenerating]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Confetti Container */}
      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {confetti.map((particle) => (
            <div
              key={particle.id}
              className="confetti"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 animate-bounce-gentle">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
              <i className="fas fa-check text-2xl"></i>
            </div>
            <div>
              <p className="font-bold text-lg">Website Generated Successfully!</p>
              <p className="text-sm text-emerald-50">Your beautiful website is ready</p>
            </div>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm bg-white/90 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <i className="fas fa-magic text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors duration-300">
                AI Website Generator
              </span>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-slideUp">
            AI Website Generator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4 animate-slideUp" style={{animationDelay: '0.1s'}}>
            AI and Informatic Near East University
          </p>
          <p className="text-base text-slate-500 max-w-3xl mx-auto mb-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
            Simply describe your vision, and our AI will create a complete, responsive website with navigation, content, and styling in seconds.
          </p>
          <p className="text-sm text-slate-400 italic animate-slideUp" style={{animationDelay: '0.3s'}}>
            Created by Wisdom Chizurumoke Edeji
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <WebsiteGenerator 
            onWebsiteGenerated={setGeneratedWebsite}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
          />
          <WebsitePreview 
            website={generatedWebsite}
            isGenerating={isGenerating}
          />
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl transition-shadow duration-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Powered by Advanced AI Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our intelligent system understands your vision and creates professional websites with modern design patterns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <i className="fas fa-brain text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Smart Content Generation</h3>
              <p className="text-sm text-slate-600">AI creates relevant, engaging content based on your description</p>
            </div>

            <div className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <i className="fas fa-mobile-alt text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">Responsive Design</h3>
              <p className="text-sm text-slate-600">Automatically optimized for all devices and screen sizes</p>
            </div>

            <div className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <i className="fas fa-palette text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">Modern Styling</h3>
              <p className="text-sm text-slate-600">Contemporary design with professional color schemes and typography</p>
            </div>

            <div className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">Clean Code</h3>
              <p className="text-sm text-slate-600">Semantic HTML with optimized CSS for fast loading and SEO</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <i className="fas fa-magic text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">AI Website Generator</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md mx-auto">
              AI and Informatic Near East University
            </p>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Transform your ideas into beautiful, functional websites with the power of artificial intelligence. 
              No coding required, just your creativity.
            </p>
            <p className="text-sm text-slate-500 italic mb-8">
              Created by Wisdom Chizurumoke Edeji
            </p>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-sm text-slate-400">
                &copy; 2024 AI Website Generator - Near East University. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          animation: confettiFall 3s linear forwards;
        }

        .confetti:nth-child(5n+1) {
          background: #f43f5e;
          border-radius: 50%;
        }

        .confetti:nth-child(5n+2) {
          background: #3b82f6;
          width: 8px;
          height: 12px;
        }

        .confetti:nth-child(5n+3) {
          background: #10b981;
          border-radius: 50%;
          width: 6px;
          height: 6px;
        }

        .confetti:nth-child(5n+4) {
          background: #f59e0b;
          width: 12px;
          height: 8px;
        }

        .confetti:nth-child(5n) {
          background: #8b5cf6;
          border-radius: 50%;
        }
      `}} />
    </div>
  );
}