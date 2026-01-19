import { Users, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ScrollReveal } from '../components/ScrollReveal';

export const Chapters = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Chapter Model</h1>
            <p className="text-2xl text-slate-300">
              How schools implement Future Fund programs through structured, student-led chapters
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">What Is a Chapter?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">School-Based Groups</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  A chapter is a school-based group that implements Future Fund Foundation Learning Kits under a structured leadership model with national framework support.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Student-Led Model</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Chapters are student-led with faculty advisors, ensuring programs are implemented by those who benefit most while maintaining adult oversight.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How Chapters Work */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">How Chapters Work</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Users, title: 'Leadership Structure', color: 'blue', desc1: 'Each chapter has defined student leadership roles including President, Vice President, Programs Director, and Operations Director. These positions carry real responsibility for implementation and outcomes.', desc2: 'A faculty advisor provides guidance and ensures alignment with school policies while allowing students to lead execution.' },
              { icon: Target, title: 'Implementation Process', color: 'amber', desc1: 'Chapters receive onboarding training, complete Learning Kit materials, and ongoing support from the national organization. Implementation follows a structured timeline with clear milestones.', desc2: 'Regular check-ins ensure chapters stay on track while allowing flexibility to adapt to local school contexts.' },
              { icon: TrendingUp, title: 'Evaluation & Support', color: 'green', desc1: 'Chapters are evaluated based on execution quality, completion rates, consistency, and impact. Performance data contributes to national competition scoring.', desc2: 'Struggling chapters receive targeted support and resources to improve implementation quality.' },
              { icon: Award, title: 'National Connection', color: 'purple', desc1: 'Chapters participate in a national network, sharing best practices, competing for recognition, and contributing to a growing knowledge base of what works.', desc2: 'This connection ensures no chapter operates in isolation while maintaining local implementation control.' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-600 to-${item.color}-500 rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{item.desc1}</p>
                  <p className="text-slate-300 leading-relaxed">{item.desc2}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Roles Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Leadership Roles Within a Chapter</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { role: 'Chapter President', resp: 'Oversees overall chapter operations, represents the chapter to school administration, coordinates with national organization, and ensures alignment across all roles.' },
              { role: 'Vice President', resp: 'Supports the President, manages internal communications, coordinates meetings, and steps in during President absence.' },
              { role: 'Programs Director', resp: 'Manages Learning Kit implementation, tracks completion and quality, coordinates with teachers, and ensures curriculum fidelity.' },
              { role: 'Operations Director', resp: 'Handles logistics, materials management, data collection, reporting requirements, and competition deliverable submissions.' },
              { role: 'Faculty Advisor', resp: 'Provides guidance and oversight, ensures school policy compliance, supports student leaders, and serves as liaison to administration.' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.role}</h3>
                  <p className="text-slate-300">{item.resp}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">Implementation Expectations</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 text-center">
              Chapters are expected to meet specific standards for implementation quality and consistency:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl">
              <ul className="space-y-5">
                {[
                  'Implement Learning Kits with fidelity to program design and standards',
                  'Maintain regular meeting schedules and leadership accountability',
                  'Complete assessments and track student progress consistently',
                  'Submit required deliverables on time for national competition evaluation',
                  'Participate in national network activities and share implementation insights',
                  'Respond to support requests and engage in continuous improvement'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-400 mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Start a Chapter?</h2>
            <p className="text-2xl text-slate-300 mb-10">
              Join schools across the country building better systems through structured implementation.
            </p>
            <Link to="/get-involved">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-7 text-lg font-bold shadow-2xl">
                Get Started
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};