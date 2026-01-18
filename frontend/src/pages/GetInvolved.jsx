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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-blue-100">
            Join the national movement to improve how K–12 schools operate
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="join" className="text-base">
                <Users className="h-4 w-4 mr-2" />
                Join a Chapter
              </TabsTrigger>
              <TabsTrigger value="school" className="text-base">
                <School className="h-4 w-4 mr-2" />
                Bring to Your School
              </TabsTrigger>
            </TabsList>

            <TabsContent value="join">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Join a Chapter</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Interested in joining an existing Future Fund chapter at your school? Fill out the form and we'll connect you with your local chapter or help you start one.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What to Expect</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Connect with your school's chapter or start a new one</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Receive onboarding and training materials</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Access Learning Kits and implementation resources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Participate in national competition framework</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Chapter Interest Form</CardTitle>
                    <CardDescription>Tell us about yourself and we'll get you started</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleJoinSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="join-name">Full Name *</Label>
                        <Input
                          id="join-name"
                          value={joinForm.name}
                          onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-email">Email Address *</Label>
                        <Input
                          id="join-email"
                          type="email"
                          value={joinForm.email}
                          onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-school">School Name *</Label>
                        <Input
                          id="join-school"
                          value={joinForm.school}
                          onChange={(e) => setJoinForm({ ...joinForm, school: e.target.value })}
                          required
                          placeholder="Your school"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-grade">Current Grade *</Label>
                        <Input
                          id="join-grade"
                          value={joinForm.grade}
                          onChange={(e) => setJoinForm({ ...joinForm, grade: e.target.value })}
                          required
                          placeholder="e.g., 10th grade"
                        />
                      </div>
                      <div>
                        <Label htmlFor="join-message">Why are you interested?</Label>
                        <Textarea
                          id="join-message"
                          value={joinForm.message}
                          onChange={(e) => setJoinForm({ ...joinForm, message: e.target.value })}
                          placeholder="Tell us about your interest in joining..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800" disabled={joinLoading}>
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
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Bring Future Fund to Your School</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Interested in implementing Future Fund Foundation programs at your school? We work with administrators, teachers, and decision-makers to establish new chapters.
                  </p>
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Implementation Process</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Initial consultation and needs assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Program overview and training for staff</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Chapter establishment and leadership selection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ongoing support and national network access</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>School Partnership Form</CardTitle>
                    <CardDescription>Connect with us to discuss bringing Future Fund to your school</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSchoolSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="school-contact">Contact Name *</Label>
                        <Input
                          id="school-contact"
                          value={schoolForm.contactName}
                          onChange={(e) => setSchoolForm({ ...schoolForm, contactName: e.target.value })}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school-email">Email Address *</Label>
                        <Input
                          id="school-email"
                          type="email"
                          value={schoolForm.email}
                          onChange={(e) => setSchoolForm({ ...schoolForm, email: e.target.value })}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school-name">School Name *</Label>
                        <Input
                          id="school-name"
                          value={schoolForm.schoolName}
                          onChange={(e) => setSchoolForm({ ...schoolForm, schoolName: e.target.value })}
                          required
                          placeholder="School name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school-district">District</Label>
                        <Input
                          id="school-district"
                          value={schoolForm.district}
                          onChange={(e) => setSchoolForm({ ...schoolForm, district: e.target.value })}
                          placeholder="District name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school-role">Your Role *</Label>
                        <Input
                          id="school-role"
                          value={schoolForm.role}
                          onChange={(e) => setSchoolForm({ ...schoolForm, role: e.target.value })}
                          required
                          placeholder="e.g., Principal, Teacher, Administrator"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school-phone">Phone Number</Label>
                        <Input
                          id="school-phone"
                          type="tel"
                          value={schoolForm.phone}
                          onChange={(e) => setSchoolForm({ ...schoolForm, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="school-message">Tell us about your school</Label>
                        <Textarea
                          id="school-message"
                          value={schoolForm.message}
                          onChange={(e) => setSchoolForm({ ...schoolForm, message: e.target.value })}
                          placeholder="School size, current programs, what you're looking for..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800" disabled={schoolLoading}>
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
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Downloadable Resources</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Learn more about our programs and implementation process with these helpful guides
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
