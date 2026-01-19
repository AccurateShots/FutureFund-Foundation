import { programs } from '../mock';
import { BookOpen, Tablet, FileCheck, Users2, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Programs = () => {
  const programLevels = [
    { key: 'elementary', icon: BookOpen, color: 'blue' },
    { key: 'middle', icon: Tablet, color: 'indigo' },
    { key: 'high', icon: FileCheck, color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Learning Kits</h1>
            <p className="text-2xl text-slate-300">
              Complete K–12 curriculum packages designed for consistent, scalable implementation
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">What Are Learning Kits?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Complete Packages</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Learning Kits are comprehensive curriculum packages that provide everything schools need to implement structured, high-quality programs tailored to specific grade levels.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Standardized Quality</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  By standardizing content and delivery, Learning Kits eliminate inconsistency and ensure every student receives the same quality instruction regardless of classroom or school.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">What's Included</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Structured Lessons', desc: 'Daily lesson plans aligned to standards with clear objectives and activities.' },
              { icon: FileCheck, title: 'Student Planners', desc: 'Organizational tools and goal-setting frameworks for student independence.' },
              { icon: Tablet, title: 'Technology Integration', desc: 'iPad-based interactive lessons and digital learning tools.' },
              { icon: CheckCircle, title: 'Comprehensive Units', desc: 'Multi-week thematic units covering core subjects and skills.' },
              { icon: FileCheck, title: 'Assessments', desc: 'Regular formative and summative assessments to track progress.' },
              { icon: Users2, title: 'Role-Play Activities', desc: 'Decision-making simulations and real-world problem-solving scenarios.' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Programs by Level</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {programLevels.map(({ key, icon: Icon }, idx) => {
              const program = programs[key];
              const gradients = {
                blue: 'from-blue-600 to-blue-500',
                indigo: 'from-indigo-600 to-indigo-500',
                purple: 'from-purple-600 to-purple-500'
              };

              return (
                <ScrollReveal key={key} delay={idx * 100}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[key]} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-semibold text-white mb-2">{program.title}</h3>
                        <p className="text-slate-300 text-lg">{program.description}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-4 text-lg">Key Components:</h4>
                      <ul className="space-y-3">
                        {program.components.map((component, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">How Programs Are Implemented</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Learning Kits are delivered through school chapters with trained student leaders and faculty advisors. Implementation includes onboarding, ongoing support, regular check-ins, and evaluation within the national competition framework.
              </p>
              <p>
                Schools receive all materials, technology, and resources needed to launch. Our chapter model ensures that programs are executed consistently and measured for impact over time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};