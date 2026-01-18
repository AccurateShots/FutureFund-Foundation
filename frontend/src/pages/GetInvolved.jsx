import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockSubmitChapterInterest, mockSubmitSchoolInterest, downloadableResources } from '../mock';
import { Users, School, Download, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { ScrollReveal } from '../components/ScrollReveal';

export const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('join');
  const [joinLoading, setJoinLoading] = useState(false);
  const [schoolLoading, setSchoolLoading] = useState(false);
  
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    school: '',
    grade: '',
    message: ''
  });

  const [schoolForm, setSchoolForm] = useState({
    contactName: '',
    email: '',
    schoolName: '',
    district: '',
    role: '',
    phone: '',
    message: ''
  });

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    setJoinLoading(true);
    try {
      const result = await mockSubmitChapterInterest(joinForm);
      toast.success(result.message);
      setJoinForm({ name: '', email: '', school: '', grade: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setJoinLoading(false);
    }
  };

  const handleSchoolSubmit = async (e) => {
    e.preventDefault();
    setSchoolLoading(true);
    try {
      const result = await mockSubmitSchoolInterest(schoolForm);
      toast.success(result.message);
      setSchoolForm({ contactName: '', email: '', schoolName: '', district: '', role: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSchoolLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-2xl text-slate-300">
              Join the national movement to improve how K–12 schools operate
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-10 bg-slate-800/50 border border-slate-700 p-1 rounded-2xl">
                <TabsTrigger value="join" className="text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl">
                  <Users className="h-4 w-4 mr-2" />
                  Join a Chapter
                </TabsTrigger>
                <TabsTrigger value="school" className="text-base data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl">
                  <School className="h-4 w-4 mr-2" />
                  Bring to Your School
                </TabsTrigger>
              </TabsList>

              <TabsContent value="join">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-6">Join a Chapter</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      Interested in joining an existing Future Fund chapter at your school? Fill out the form and we'll connect you with your local chapter or help you start one.
                    </p>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl mb-6">
                      <h3 className="font-semibold text-white mb-4 text-xl">What to Expect</h3>
                      <ul className="space-y-3">
                        {[
                          'Connect with your school\'s chapter or start a new one',
                          'Receive onboarding and training materials',
                          'Access Learning Kits and implementation resources',
                          'Participate in national competition framework'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Chapter Interest Form</CardTitle>
                      <CardDescription className="text-slate-400">Tell us about yourself and we'll get you started</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleJoinSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="join-name" className="text-slate-200">Full Name *</Label>
                          <Input
                            id="join-name"
                            value={joinForm.name}
                            onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                            required
                            placeholder="Your name"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="join-email" className="text-slate-200">Email Address *</Label>
                          <Input
                            id="join-email"
                            type="email"
                            value={joinForm.email}
                            onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                            required
                            placeholder="your@email.com"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="join-school" className="text-slate-200">School Name *</Label>
                          <Input
                            id="join-school"
                            value={joinForm.school}
                            onChange={(e) => setJoinForm({ ...joinForm, school: e.target.value })}
                            required
                            placeholder="Your school"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="join-grade" className="text-slate-200">Current Grade *</Label>
                          <Input
                            id="join-grade"
                            value={joinForm.grade}
                            onChange={(e) => setJoinForm({ ...joinForm, grade: e.target.value })}
                            required
                            placeholder="e.g., 10th grade"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="join-message" className="text-slate-200">Why are you interested?</Label>
                          <Textarea
                            id="join-message"
                            value={joinForm.message}
                            onChange={(e) => setJoinForm({ ...joinForm, message: e.target.value })}
                            placeholder="Tell us about your interest in joining..."
                            rows={4}
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold" disabled={joinLoading}>
                          {joinLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Interest
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="school">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-6">Bring Future Fund to Your School</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      Interested in implementing Future Fund Foundation programs at your school? We work with administrators, teachers, and decision-makers to establish new chapters.
                    </p>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl mb-6">
                      <h3 className="font-semibold text-white mb-4 text-xl">Implementation Process</h3>
                      <ul className="space-y-3">
                        {[
                          'Initial consultation and needs assessment',
                          'Program overview and training for staff',
                          'Chapter establishment and leadership selection',
                          'Ongoing support and national network access'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">School Partnership Form</CardTitle>
                      <CardDescription className="text-slate-400">Connect with us to discuss bringing Future Fund to your school</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSchoolSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="school-contact" className="text-slate-200">Contact Name *</Label>
                          <Input
                            id="school-contact"
                            value={schoolForm.contactName}
                            onChange={(e) => setSchoolForm({ ...schoolForm, contactName: e.target.value })}
                            required
                            placeholder="Your name"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="school-email" className="text-slate-200">Email Address *</Label>
                          <Input
                            id="school-email"
                            type="email"
                            value={schoolForm.email}
                            onChange={(e) => setSchoolForm({ ...schoolForm, email: e.target.value })}
                            required
                            placeholder="your@email.com"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="school-name" className="text-slate-200">School Name *</Label>
                          <Input
                            id="school-name"
                            value={schoolForm.schoolName}
                            onChange={(e) => setSchoolForm({ ...schoolForm, schoolName: e.target.value })}
                            required
                            placeholder="School name"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="school-district" className="text-slate-200">District</Label>
                          <Input
                            id="school-district"
                            value={schoolForm.district}
                            onChange={(e) => setSchoolForm({ ...schoolForm, district: e.target.value })}
                            placeholder="District name"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="school-role" className="text-slate-200">Your Role *</Label>
                          <Input
                            id="school-role"
                            value={schoolForm.role}
                            onChange={(e) => setSchoolForm({ ...schoolForm, role: e.target.value })}
                            required
                            placeholder="e.g., Principal, Teacher, Administrator"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="school-phone" className="text-slate-200">Phone Number</Label>
                          <Input
                            id="school-phone"
                            type="tel"
                            value={schoolForm.phone}
                            onChange={(e) => setSchoolForm({ ...schoolForm, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="school-message" className="text-slate-200">Tell us about your school</Label>
                          <Textarea
                            id="school-message"
                            value={schoolForm.message}
                            onChange={(e) => setSchoolForm({ ...schoolForm, message: e.target.value })}
                            placeholder="School size, current programs, what you're looking for..."
                            rows={4}
                            className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold" disabled={schoolLoading}>
                          {schoolLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Request Information
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">Downloadable Resources</h2>
            <p className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto">
              Learn more about our programs and implementation process with these helpful guides
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <Download className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-slate-300 mb-6">{resource.description}</p>
                  <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-700" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <p className="text-xs text-slate-500 mt-3 text-center">Coming Soon</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};