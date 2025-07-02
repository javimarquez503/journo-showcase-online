
import { useState } from 'react';
import { Mail, Briefcase, ExternalLink, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              Sarah Mitchell
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('articles')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Articles
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  Experience
                </button>
                <button onClick={() => scrollToSection('articles')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  Articles
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
              alt="Sarah Mitchell"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Investigative Journalist
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Uncovering stories that matter. Specializing in political investigations, 
            social justice, and environmental reporting with over 8 years of experience 
            in digital and print media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('articles')} size="lg" className="bg-slate-900 hover:bg-slate-800">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p className="mb-6">
              I'm a dedicated investigative journalist with a passion for uncovering the truth and 
              telling stories that make a difference. My work focuses on holding power accountable, 
              amplifying underrepresented voices, and exploring the intersection of politics, 
              environment, and social justice.
            </p>
            <p className="mb-6">
              With a Master's degree in Journalism from Columbia University and eight years of 
              experience working with leading publications, I've developed expertise in data-driven 
              reporting, long-form investigations, and multimedia storytelling.
            </p>
            <p>
              When I'm not chasing stories, you can find me mentoring young journalists, 
              speaking at conferences about press freedom, or exploring new hiking trails with my camera.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-slate-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Senior Investigative Reporter</CardTitle>
                  <Briefcase className="h-5 w-5 text-slate-600" />
                </div>
                <p className="text-slate-600">The Washington Herald • 2020 - Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Lead investigative projects focusing on government accountability and environmental issues. 
                  Published over 50 in-depth articles resulting in policy changes and public awareness campaigns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Staff Reporter</CardTitle>
                  <Briefcase className="h-5 w-5 text-slate-600" />
                </div>
                <p className="text-slate-600">Metro Daily News • 2018 - 2020</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Covered local politics, city council meetings, and community issues. 
                  Developed sources and built relationships within the political landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-slate-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Junior Reporter</CardTitle>
                  <Briefcase className="h-5 w-5 text-slate-600" />
                </div>
                <p className="text-slate-600">City Tribune • 2016 - 2018</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Started career covering breaking news, court proceedings, and human interest stories. 
                  Established foundation in journalistic ethics and reporting standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="articles" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop"
                  alt="Environmental Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  The Hidden Cost of Industrial Pollution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  A six-month investigation into illegal dumping practices affecting local communities...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">The Washington Herald</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop"
                  alt="Political Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  Campaign Finance Irregularities Exposed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Uncovering questionable financial ties in the mayoral race that led to reforms...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">The Washington Herald</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop"
                  alt="Social Justice Story"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  Housing Crisis: Voices from the Street
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Personal stories from those affected by the affordable housing shortage...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Metro Daily News</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
                  alt="Government Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  Public Records Reveal Spending Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Data analysis exposes millions in wasteful government spending...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">The Washington Herald</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
                  alt="Healthcare Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  Healthcare Access in Rural Communities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Exploring the challenges faced by rural residents seeking medical care...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Metro Daily News</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop"
                  alt="Education Story"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  The Digital Divide in Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  How the pandemic highlighted inequalities in educational technology access...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">City Tribune</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-slate-600 mb-6">
                Have a story tip, collaboration opportunity, or just want to chat about journalism? 
                I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-600 mr-3" />
                  <span className="text-slate-700">sarah.mitchell@email.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-3">📱</span>
                  <span className="text-slate-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-3">📍</span>
                  <span className="text-slate-700">Washington, D.C.</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 Sarah Mitchell. All rights reserved. | Dedicated to truth, transparency, and public service journalism.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
