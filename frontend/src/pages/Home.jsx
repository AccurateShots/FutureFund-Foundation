import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy, Target, CheckCircle, TrendingUp } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Better Schools Through
              <span className="text-blue-900"> Structure and Consistency</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Future Fund Foundation delivers standardized Learning Kits and chapter-based implementation to help K–12 schools improve operations, measure impact, and scale what works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg font-semibold">
                  Join a Chapter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The Problem Schools Face</h2>
            <p className="text-lg text-gray-600">
              Most schools lack consistent systems for curriculum delivery, student engagement, and measurable outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fragmented Programs</h3>
              <p className="text-gray-600">
                Schools implement disconnected initiatives without cohesive structure or consistent execution.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Scalability</h3>
              <p className="text-gray-600">
                What works in one classroom rarely scales to the entire school or district level.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited Accountability</h3>
              <p className="text-gray-600">
                Few systems exist to measure implementation quality and long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600">
              We provide complete Learning Kits and a chapter-based system that ensures consistent, measurable implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Standardized Learning Kits</h3>
              <p className="text-gray-600 mb-4">
                Complete K–12 curriculum packages including lessons, planners, iPads, units, assessments, and decision-making activities.
              </p>
              <Link to="/programs" className="text-blue-900 font-medium hover:underline inline-flex items-center">
                View Programs <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Chapter-Based Implementation</h3>
              <p className="text-gray-600 mb-4">
                Schools run local chapters with clear leadership roles, implementation guidelines, and national support.
              </p>
              <Link to="/chapters" className="text-blue-900 font-medium hover:underline inline-flex items-center">
                How Chapters Work <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Framework */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">National Competition Framework</h2>
              <p className="text-lg text-gray-600 mb-6">
                Chapters compete nationally based on execution quality, impact, consistency, and growth—not popularity contests.
              </p>
              <p className="text-gray-600 mb-6">
                Students submit deliverables including a written paper and video presentation. Chapter scores are calculated from average performance, completion rates, on-time submissions, and sustained consistency.
              </p>
              <Link to="/competition">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                  Learn About Competition
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Gets Measured</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quality of student deliverables (papers and videos)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Completion rates across chapter membership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">On-time submission consistency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sustained performance over time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Impact documentation and evidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Bring Structure to Your School?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join schools across the country implementing proven systems for better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 px-8 py-6 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
