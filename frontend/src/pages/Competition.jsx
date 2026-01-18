import { Trophy, Target, FileText, Video, CheckCircle, TrendingUp, Users } from 'lucide-react';

export const Competition = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">National Competition Framework</h1>
          <p className="text-xl text-blue-100">
            Measuring execution quality, impact, and consistency—not popularity
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">How the Competition Works</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Future Fund Foundation competition framework evaluates chapters based on what matters most: the quality of implementation, sustained consistency, and measurable impact. Unlike traditional competitions that rely on subjective judging or popularity, our model uses objective data to reward execution excellence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every chapter participates by default. There are no separate "competition teams"—the work your chapter does every day is what gets evaluated.
          </p>
        </div>
      </section>

      {/* Student Deliverables */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Student Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Written Paper</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students submit a 3–5 page paper documenting their chapter's implementation, challenges faced, solutions developed, and measurable outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Papers are evaluated for clarity, evidence of impact, problem-solving depth, and alignment with program goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Video Presentation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A 5–7 minute video showcasing the chapter's work, student testimonials, implementation examples, and demonstrated impact.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Videos are scored based on content quality, evidence presentation, professionalism, and effective communication.
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3">Submission Requirements</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Deliverables submitted by established deadlines throughout the year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">All chapter members contribute to content development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Evidence-based claims supported by data and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional presentation standards required for both formats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">How Scoring Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Score</h3>
              <p className="text-gray-700 text-sm">
                Evaluation of deliverable content, evidence of impact, and implementation fidelity
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Completion Rate</h3>
              <p className="text-gray-700 text-sm">
                Percentage of chapter members who complete and submit required work
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Time Submission</h3>
              <p className="text-gray-700 text-sm">
                Adherence to deadlines and submission requirements throughout the year
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistency</h3>
              <p className="text-gray-700 text-sm">
                Sustained performance across multiple evaluation periods and metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Score Calculation */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Chapter Score Calculation</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Your chapter's final score is calculated using a weighted formula that emphasizes both quality and consistency:
          </p>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Average Quality Score (40%)</h4>
                <p className="text-gray-700">Mean score across all student deliverables evaluated for content quality and impact evidence</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Completion Rate (25%)</h4>
                <p className="text-gray-700">Percentage of active chapter members who submit complete deliverables</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">On-Time Performance (20%)</h4>
                <p className="text-gray-700">Percentage of submissions meeting established deadlines throughout the evaluation period</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency Index (15%)</h4>
                <p className="text-gray-700">Measure of sustained performance across multiple evaluation cycles with minimal variance</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-gray-900 mb-2">Why This Matters</h4>
            <p className="text-gray-700">
              This formula ensures that chapters are rewarded for doing the work well, completing it thoroughly, and sustaining effort over time—not for one-time impressive performances or popularity-based metrics.
            </p>
          </div>
        </div>
      </section>

      {/* What Gets Measured */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">What We Measure</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Implementation Quality</h4>
                  <p className="text-gray-700">How well the chapter executes Learning Kit programs with fidelity to design and standards</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Documented Impact</h4>
                  <p className="text-gray-700">Evidence of measurable outcomes in student learning, engagement, or school improvement</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Problem-Solving Approach</h4>
                  <p className="text-gray-700">How chapters identify challenges, develop solutions, and adapt implementation to local context</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Leadership Development</h4>
                  <p className="text-gray-700">Growth in student leadership capacity, responsibility, and organizational effectiveness</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sustained Execution</h4>
                  <p className="text-gray-700">Consistency in implementation quality and effort maintained across the full school year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Recognition and Awards</h2>
          <p className="text-xl text-blue-100 mb-6">
            Top-performing chapters receive national recognition, awards, and showcased as model implementations for the network.
          </p>
          <p className="text-lg text-blue-200">
            Recognition is based entirely on objective performance data—no subjective judging, no voting, no popularity contests. The chapters that do the work best, most consistently, and with greatest impact are the ones that win.
          </p>
        </div>
      </section>
    </div>
  );
};
