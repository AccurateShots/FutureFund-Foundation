import { programs } from '../mock';
import { BookOpen, Tablet, FileCheck, Users2, CheckCircle } from 'lucide-react';

export const Programs = () => {
  const programLevels = [
    { key: 'elementary', icon: BookOpen, color: 'blue' },
    { key: 'middle', icon: Tablet, color: 'indigo' },
    { key: 'high', icon: FileCheck, color: 'purple' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Learning Kits</h1>
          <p className="text-xl text-blue-100">
            Complete K–12 curriculum packages designed for consistent, scalable implementation
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">What Are Learning Kits?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Learning Kits are comprehensive curriculum packages that provide everything schools need to implement structured, high-quality programs. Each kit is tailored to specific grade levels and includes all materials, technology, assessments, and support resources required for successful execution.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By standardizing content and delivery, Learning Kits eliminate inconsistency, reduce implementation burden on teachers, and ensure that every student receives the same quality of instruction regardless of classroom or school.
          </p>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Structured Lessons</h3>
              <p className="text-gray-600">Daily lesson plans aligned to standards with clear objectives and activities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Planners</h3>
              <p className="text-gray-600">Organizational tools and goal-setting frameworks for student independence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Tablet className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Integration</h3>
              <p className="text-gray-600">iPad-based interactive lessons and digital learning tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Units</h3>
              <p className="text-gray-600">Multi-week thematic units covering core subjects and skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessments</h3>
              <p className="text-gray-600">Regular formative and summative assessments to track progress.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Role-Play Activities</h3>
              <p className="text-gray-600">Decision-making simulations and real-world problem-solving scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Levels */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Programs by Level</h2>
          <div className="space-y-8">
            {programLevels.map(({ key, icon: Icon, color }) => {
              const program = programs[key];
              const colorClasses = {
                blue: { bg: 'bg-blue-50', border: 'border-blue-200', iconBg: 'bg-blue-100', iconText: 'text-blue-900' },
                indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', iconBg: 'bg-indigo-100', iconText: 'text-indigo-900' },
                purple: { bg: 'bg-purple-50', border: 'border-purple-200', iconBg: 'bg-purple-100', iconText: 'text-purple-900' }
              };
              const colors = colorClasses[color];

              return (
                <div key={key} className={`${colors.bg} p-8 rounded-lg border ${colors.border}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-7 w-7 ${colors.iconText}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-700">{program.description}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Components:</h4>
                    <ul className="space-y-2">
                      {program.components.map((component, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How Programs Are Implemented</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Learning Kits are delivered through school chapters with trained student leaders and faculty advisors. Implementation includes onboarding, ongoing support, regular check-ins, and evaluation within the national competition framework.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Schools receive all materials, technology, and resources needed to launch. Our chapter model ensures that programs are executed consistently and measured for impact over time.
          </p>
        </div>
      </section>
    </div>
  );
};
