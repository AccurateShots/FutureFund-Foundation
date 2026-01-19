import { Trophy, Target, FileText, Video, CheckCircle, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Competition = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300 text-sm font-bold tracking-wide">
                NATIONAL FRAMEWORK
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              National <span className="highlight-hover highlight-hover-dark">Competition</span> Framework
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-300 font-light">
              Measuring execution quality, impact, and consistency—not popularity
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">How the Competition Works</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Objective Evaluation</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our framework evaluates chapters based on implementation quality, sustained consistency, and measurable impact using objective data to reward execution excellence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Automatic Participation</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Every chapter participates by default. There are no separate competition teams—the work your chapter does every day is what gets evaluated.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Student Deliverables */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Student Deliverables</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <ScrollReveal delay={100}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">Written Paper</h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                  Students submit a 3–5 page paper documenting their chapter's implementation, challenges faced, solutions developed, and measurable outcomes.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Papers are evaluated for clarity, evidence of impact, problem-solving depth, and alignment with program goals.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-white mb-4">Video Presentation</h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                  A 5–7 minute video showcasing the chapter's work, student testimonials, implementation examples, and demonstrated impact.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Videos are scored based on content quality, evidence presentation, professionalism, and effective communication.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={300}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl max-w-5xl mx-auto">
              <h4 className="font-semibold text-white mb-4 text-xl">Submission Requirements</h4>
              <ul className="space-y-3">
                {[
                  'Deliverables submitted by established deadlines throughout the year',
                  'All chapter members contribute to content development',
                  'Evidence-based claims supported by data and documentation',
                  'Professional presentation standards required for both formats'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">How Scoring Works</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, color: 'blue', title: 'Quality Score', desc: 'Evaluation of deliverable content, evidence of impact, and implementation fidelity' },
              { icon: CheckCircle, color: 'green', title: 'Completion Rate', desc: 'Percentage of chapter members who complete and submit required work' },
              { icon: Target, color: 'amber', title: 'On-Time Submission', desc: 'Adherence to deadlines and submission requirements throughout the year' },
              { icon: TrendingUp, color: 'purple', title: 'Consistency', desc: 'Sustained performance across multiple evaluation periods and metrics' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-600 to-${item.color}-500 rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Score Calculation */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">Chapter Score Calculation</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 text-center">
              Your chapter's final score is calculated using a weighted formula that emphasizes both quality and consistency:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-10 rounded-2xl">
              <div className="space-y-8">
                {[
                  { title: 'Average Quality Score (40%)', desc: 'Mean score across all student deliverables evaluated for content quality and impact evidence' },
                  { title: 'Completion Rate (25%)', desc: 'Percentage of active chapter members who submit complete deliverables' },
                  { title: 'On-Time Performance (20%)', desc: 'Percentage of submissions meeting established deadlines throughout the evaluation period' },
                  { title: 'Consistency Index (15%)', desc: 'Measure of sustained performance across multiple evaluation cycles with minimal variance' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-amber-900/20 border border-amber-700/50 p-8 rounded-2xl">
              <h4 className="font-semibold text-amber-400 mb-3 text-xl">Why This Matters</h4>
              <p className="text-slate-300 text-lg">
                This formula ensures that chapters are rewarded for doing the work well, completing it thoroughly, and sustaining effort over time—not for one-time impressive performances or popularity-based metrics.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Recognition and Awards</h2>
            <div className="space-y-6 text-xl text-slate-300">
              <p>
                Top-performing chapters receive national recognition, awards, and showcased as model implementations for the network.
              </p>
              <p>
                Recognition is based entirely on objective performance data—no subjective judging, no voting, no popularity contests. The chapters that do the work best, most consistently, and with greatest impact are the ones that win.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};