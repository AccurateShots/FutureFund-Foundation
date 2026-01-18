import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { mockSubmitContact } from '../mock';
import { Mail, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { ScrollReveal } from '../components/ScrollReveal';

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await mockSubmitContact(formData);
      toast.success(result.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-2xl text-slate-300">
              Have questions? We're here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  Whether you're interested in starting a chapter, bringing Future Fund to your school, or have general questions about our programs, we'd love to hear from you.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="font-semibold text-white mb-2 text-xl">Email</h3>
                      <a href="mailto:info@futurefund.org" className="text-amber-400 hover:text-amber-300 transition-colors text-lg">
                        info@futurefund.org
                      </a>
                      <p className="text-sm text-slate-400 mt-2">We typically respond within 24-48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
                  <h3 className="font-semibold text-white mb-4 text-xl">What Happens Next?</h3>
                  <ol className="space-y-4 text-slate-300">
                    <li className="flex items-start">
                      <span className="font-semibold text-amber-400 mr-3 text-lg">1.</span>
                      <span>We'll review your inquiry and respond within 24-48 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-amber-400 mr-3 text-lg">2.</span>
                      <span>For chapter or school inquiries, we'll schedule a follow-up call</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-amber-400 mr-3 text-lg">3.</span>
                      <span>We'll provide resources and next steps tailored to your needs</span>
                    </li>
                  </ol>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200}>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-slate-400">Fill out the form below and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-slate-200">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your name"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-200">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="your@email.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-slate-200">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        placeholder="What is this regarding?"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-200">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-6" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { q: 'How long does it take to start a chapter?', a: 'Typically 4-6 weeks from initial contact to chapter launch, including consultation, training, and setup.' },
              { q: 'Is there a cost to implement programs?', a: 'We work with schools to determine appropriate program costs based on size and implementation scope. Contact us for details.' },
              { q: 'What support do chapters receive?', a: 'Chapters receive onboarding training, ongoing support, access to national resources, regular check-ins, and participation in the national network.' },
              { q: 'Can individual students join without a school chapter?', a: 'Our model requires school-based chapters for implementation. However, interested students can work with us to establish a new chapter at their school.' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
