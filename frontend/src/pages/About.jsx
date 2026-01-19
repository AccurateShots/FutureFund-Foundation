import { Target, Users, TrendingUp, Building2 } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const About = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden py-24 sm:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 text-sm font-bold tracking-wide">
                WHO WE ARE
              </span>
            </div>
            <h1 className=\"text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight\">
              About <span className=\"highlight-hover highlight-hover-dark\">Future Fund</span> Foundation
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-300 font-light">
              Building a national system to improve how K–12 schools operate
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Our Mission</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">The Challenge</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Future Fund Foundation exists to address a fundamental problem in K–12 education: the lack of consistent, scalable systems that improve how schools operate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">The Reality</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  While many schools implement well-intentioned programs, these efforts are often fragmented, inconsistent, and impossible to scale.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Our Approach</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We provide schools with standardized Learning Kits and a chapter-based implementation model that ensures structure, consistency, and measurable outcomes.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Our Impact</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  By creating a national network of school chapters, we enable schools to implement best practices while contributing to a larger framework that measures what works.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">The Problem We Solve</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Fragmented Programs</h3>
                <p className="text-slate-300 leading-relaxed">
                  Schools launch multiple disconnected initiatives without cohesive structure. Programs lack integration, making implementation inconsistent and outcomes difficult to measure.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">No Scalability</h3>
                <p className="text-slate-300 leading-relaxed">
                  Successful classroom interventions rarely expand beyond individual teachers. Without standardized systems, schools cannot replicate what works across grades or buildings.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Limited Accountability</h3>
                <p className="text-slate-300 leading-relaxed">
                  Few systems exist to track implementation quality or long-term impact. Schools lack frameworks to measure execution, consistency, and sustained improvement over time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">How We Solve It</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 text-center">
              Future Fund Foundation addresses these challenges through two interconnected components:
            </p>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-3xl font-semibold text-white mb-4">Standardized Learning Kits</h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                  We provide complete, ready-to-implement curriculum packages for K–12 students. Each Learning Kit includes structured lessons, daily planners, technology tools, comprehensive units, assessments, and real-world decision-making activities.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  These kits eliminate the need for schools to design programs from scratch while ensuring consistency in content quality and implementation structure.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-3xl font-semibold text-white mb-4">Chapter-Based Implementation</h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                  Schools establish local chapters with defined leadership roles and clear implementation expectations. Chapters receive training, ongoing support, and evaluation within a national framework.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  This structure ensures accountability, enables peer learning, and creates a competitive system that rewards execution quality rather than popularity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Our Long-Term Vision</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">National Network</h3>
                <p className="text-slate-300 leading-relaxed">
                  Building a nationwide network of school chapters implementing proven systems and sharing best practices.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data-Driven</h3>
                <p className="text-slate-300 leading-relaxed">
                  Creating sustainable models supported by structure, data, and a community committed to continuous improvement.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Execution Focus</h3>
                <p className="text-slate-300 leading-relaxed">
                  Demonstrating that consistent implementation of quality programs produces better outcomes than chasing new initiatives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};