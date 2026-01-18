import { leadershipTeam } from '../mock';
import { Users, Briefcase } from 'lucide-react';

export const Leadership = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Leadership Team</h1>
          <p className="text-xl text-blue-100">
            Student leaders building a national system for school improvement
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Our Structure</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Future Fund Foundation is led by students who understand the challenges schools face and are committed to building scalable solutions. Our leadership structure prioritizes clear roles, defined responsibilities, and accountability for results.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each leadership position carries real responsibility for specific organizational functions. We believe in execution over titles and measure success by outcomes, not intentions.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Executive Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.role}</h3>
                <p className="text-blue-900 font-medium mb-4">{leader.name}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.responsibilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Our Leadership Principles</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution Over Innovation</h3>
              <p className="text-gray-700">
                We prioritize implementing proven systems consistently over chasing new ideas. Sustainable improvement comes from doing the fundamentals well, not from constant reinvention.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accountability for Results</h3>
              <p className="text-gray-700">
                Leadership means ownership of outcomes. We measure success by impact and implementation quality, not by effort or intentions. If something doesn't work, we fix it or stop doing it.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Structure Enables Scale</h3>
              <p className="text-gray-700">
                Growth requires systems, not heroic individual efforts. We build frameworks that allow others to replicate success without reinventing the wheel at every school.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence-Based Decisions</h3>
              <p className="text-gray-700">
                We rely on data, not assumptions. What gets measured gets managed. Our decisions are informed by implementation evidence and outcome data, not popular opinion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Leadership CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Interested in Leadership?</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are always looking for students who want to take on real responsibility and build systems that work. Leadership positions are earned through demonstrated execution and commitment to results.
          </p>
          <p className="text-gray-600">
            Start by joining or founding a chapter at your school. Prove you can implement programs effectively and contribute to the national mission. Leadership opportunities follow strong performance.
          </p>
        </div>
      </section>
    </div>
  );
};
