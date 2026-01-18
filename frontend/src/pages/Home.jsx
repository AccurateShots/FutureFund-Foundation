import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy, Target, CheckCircle, TrendingUp, Sparkles, BarChart3, Shield } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with overlay and better styling */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-800/50 backdrop-blur-sm border border-blue-700 rounded-full text-blue-100 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              National Student Organization
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Building Better Schools Through
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Structure and Consistency
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
              Future Fund Foundation delivers standardized Learning Kits and chapter-based implementation to help K–12 schools improve operations, measure impact, and scale what works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                  Join a Chapter
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg font-bold">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-blue-700/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">K-12</div>
                <div className="text-blue-200 text-sm font-medium">Grade Levels</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200 text-sm font-medium">Schools Nationwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-200 text-sm font-medium">Student-Led</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* The Problem Section - Enhanced cards */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">The Problem Schools Face</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most schools lack consistent systems for curriculum delivery, student engagement, and measurable outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fragmented Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Schools implement disconnected initiatives without cohesive structure or consistent execution.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Scalability</h3>
              <p className="text-gray-600 leading-relaxed">
                What works in one classroom rarely scales to the entire school or district level.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Accountability</h3>
              <p className="text-gray-600 leading-relaxed">
                Few systems exist to measure implementation quality and long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section - More dynamic */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We provide complete Learning Kits and a chapter-based system that ensures consistent, measurable implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Standardized Learning Kits</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Complete K–12 curriculum packages including lessons, planners, iPads, units, assessments, and decision-making activities.
              </p>
              <Link to="/programs" className="inline-flex items-center text-blue-900 font-bold hover:text-blue-700 transition-colors">
                View Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Chapter-Based Implementation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Schools run local chapters with clear leadership roles, implementation guidelines, and national support.
              </p>
              <Link to="/chapters" className="inline-flex items-center text-blue-900 font-bold hover:text-blue-700 transition-colors">
                How Chapters Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Framework - More visual */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-900 text-sm font-bold mb-6">
                <Trophy className="h-4 w-4 mr-2" />
                National Competition
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Competing on What Actually Matters
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Chapters compete nationally based on execution quality, impact, consistency, and growth—not popularity contests.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Students submit deliverables including a written paper and video presentation. Chapter scores are calculated from average performance, completion rates, on-time submissions, and sustained consistency.
              </p>
              <Link to="/competition">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg font-bold shadow-lg">
                  Learn About Competition
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 p-10 rounded-3xl border-2 border-gray-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">What Gets Measured</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Quality of student deliverables (papers and videos)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Completion rates across chapter membership</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">On-time submission consistency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Sustained performance over time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Impact documentation and evidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More dramatic */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Bring Structure to Your School?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join schools across the country implementing proven systems for better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/get-involved">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-12 py-7 text-xl font-bold shadow-2xl">
                Get Started
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-12 py-7 text-xl font-bold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
