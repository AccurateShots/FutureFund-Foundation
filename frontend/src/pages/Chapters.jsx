import { Users, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const Chapters = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Chapter Model</h1>
          <p className="text-xl text-blue-100">
            How schools implement Future Fund programs through structured, student-led chapters
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">What Is a Chapter?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A chapter is a school-based group that implements Future Fund Foundation Learning Kits under a structured leadership model. Each chapter operates within a national framework, receiving support, training, and evaluation while maintaining local autonomy in execution.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chapters are student-led with faculty advisors, ensuring that programs are implemented by those who benefit most while maintaining adult oversight and accountability.
          </p>
        </div>
      </section>

      {/* How Chapters Work */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">How Chapters Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each chapter has defined student leadership roles including President, Vice President, Programs Director, and Operations Director. These positions carry real responsibility for implementation and outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A faculty advisor provides guidance and ensures alignment with school policies while allowing students to lead execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chapters receive onboarding training, complete Learning Kit materials, and ongoing support from the national organization. Implementation follows a structured timeline with clear milestones.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Regular check-ins ensure chapters stay on track while allowing flexibility to adapt to local school contexts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evaluation & Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chapters are evaluated based on execution quality, completion rates, consistency, and impact. Performance data contributes to national competition scoring.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Struggling chapters receive targeted support and resources to improve implementation quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">National Connection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chapters participate in a national network, sharing best practices, competing for recognition, and contributing to a growing knowledge base of what works.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This connection ensures no chapter operates in isolation while maintaining local implementation control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Roles Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Roles Within a Chapter</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chapter President</h3>
              <p className="text-gray-700">Oversees overall chapter operations, represents the chapter to school administration, coordinates with national organization, and ensures alignment across all roles.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vice President</h3>
              <p className="text-gray-700">Supports the President, manages internal communications, coordinates meetings, and steps in during President absence.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Programs Director</h3>
              <p className="text-gray-700">Manages Learning Kit implementation, tracks completion and quality, coordinates with teachers, and ensures curriculum fidelity.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Operations Director</h3>
              <p className="text-gray-700">Handles logistics, materials management, data collection, reporting requirements, and competition deliverable submissions.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faculty Advisor</h3>
              <p className="text-gray-700">Provides guidance and oversight, ensures school policy compliance, supports student leaders, and serves as liaison to administration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Implementation Expectations</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Chapters are expected to meet specific standards for implementation quality and consistency:
          </p>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Implement Learning Kits with fidelity to program design and standards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Maintain regular meeting schedules and leadership accountability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Complete assessments and track student progress consistently</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Submit required deliverables on time for national competition evaluation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Participate in national network activities and share implementation insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Respond to support requests and engage in continuous improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start a Chapter?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join schools across the country building better systems through structured implementation.
          </p>
          <Link to="/get-involved">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
