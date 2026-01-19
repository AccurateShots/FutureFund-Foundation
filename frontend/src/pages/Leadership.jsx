import { leadershipTeam } from '../mock';
import { Users, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Leadership = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-bold tracking-wide">
                STUDENT-LED ORGANIZATION
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              <span className="highlight-hover highlight-hover-dark">Leadership</span> Team
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-300 font-light">
              Student leaders building a national system for school improvement
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Our Structure</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Student-Led Organization</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Future Fund Foundation is led by students who understand the challenges schools face and are committed to building scalable solutions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Results-Focused</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our leadership structure prioritizes clear roles, defined responsibilities, and accountability for results. We believe in execution over titles.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Executive Leadership</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Briefcase className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">{leader.role}</h3>
                  <p className="text-amber-400 font-medium mb-4 text-center text-lg">{leader.name}</p>
                  <p className="text-slate-300 text-sm leading-relaxed text-center">{leader.responsibilities}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Our Leadership Principles</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { title: 'Execution Over Innovation', desc: 'We prioritize implementing proven systems consistently over chasing new ideas. Sustainable improvement comes from doing the fundamentals well, not from constant reinvention.' },
              { title: 'Accountability for Results', desc: 'Leadership means ownership of outcomes. We measure success by impact and implementation quality, not by effort or intentions. If something doesn\'t work, we fix it or stop doing it.' },
              { title: 'Structure Enables Scale', desc: 'Growth requires systems, not heroic individual efforts. We build frameworks that allow others to replicate success without reinventing the wheel at every school.' },
              { title: 'Evidence-Based Decisions', desc: 'We rely on data, not assumptions. What gets measured gets managed. Our decisions are informed by implementation evidence and outcome data, not popular opinion.' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Interested in Leadership?</h2>
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                We are always looking for students who want to take on real responsibility and build systems that work. Leadership positions are earned through demonstrated execution and commitment to results.
              </p>
              <p>
                Start by joining or founding a chapter at your school. Prove you can implement programs effectively and contribute to the national mission. Leadership opportunities follow strong performance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};