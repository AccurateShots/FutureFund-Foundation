import { Target, Users, TrendingUp, Building2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Future Fund Foundation</h1>
          <p className="text-xl text-blue-100">
            Building a national system to improve how K–12 schools operate
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Future Fund Foundation exists to address a fundamental problem in K–12 education: the lack of consistent, scalable systems that improve how schools operate. While many schools implement well-intentioned programs, these efforts are often fragmented, inconsistent, and impossible to scale.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We provide schools with standardized Learning Kits and a chapter-based implementation model that ensures structure, consistency, and measurable outcomes. Our approach is built on the principle that sustainable improvement requires both proven content and systematic execution.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By creating a national network of school chapters, we enable schools to implement best practices while contributing to a larger framework that measures what works and drives continuous improvement.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">The Problem We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fragmented Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Schools launch multiple disconnected initiatives without cohesive structure. Programs lack integration, making implementation inconsistent and outcomes difficult to measure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Scalability</h3>
              <p className="text-gray-600 leading-relaxed">
                Successful classroom interventions rarely expand beyond individual teachers. Without standardized systems, schools cannot replicate what works across grades or buildings.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limited Accountability</h3>
              <p className="text-gray-600 leading-relaxed">
                Few systems exist to track implementation quality or long-term impact. Schools lack frameworks to measure execution, consistency, and sustained improvement over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">How We Solve It</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Future Fund Foundation addresses these challenges through two interconnected components:
          </p>
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Standardized Learning Kits</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide complete, ready-to-implement curriculum packages for K–12 students. Each Learning Kit includes structured lessons, daily planners, technology tools, comprehensive units, assessments, and real-world decision-making activities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These kits eliminate the need for schools to design programs from scratch while ensuring consistency in content quality and implementation structure.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Chapter-Based Implementation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Schools establish local chapters with defined leadership roles and clear implementation expectations. Chapters receive training, ongoing support, and evaluation within a national framework.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This structure ensures accountability, enables peer learning, and creates a competitive system that rewards execution quality rather than popularity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Long-Term Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are building a national network of school chapters that implements proven systems, measures what works, and shares best practices. Our goal is to create a sustainable model where schools can adopt effective programs with confidence, knowing they are supported by structure, data, and a community committed to continuous improvement.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By focusing on execution over innovation for innovation's sake, we aim to demonstrate that consistent implementation of quality programs produces better outcomes than constantly chasing the next new initiative.
          </p>
        </div>
      </section>
    </div>
  );
};
