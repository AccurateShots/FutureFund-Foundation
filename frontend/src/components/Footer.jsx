import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FF</span>
              </div>
              <span className="font-semibold text-lg">Future Fund Foundation</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-md">
              Building a national, chapter-based system to improve how K–12 schools operate through standardized Learning Kits and structured implementation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-blue-200 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/chapters" className="text-blue-200 hover:text-white transition-colors">Chapter Model</Link></li>
              <li><Link to="/competition" className="text-blue-200 hover:text-white transition-colors">Competition</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/get-involved" className="text-blue-200 hover:text-white transition-colors">Join a Chapter</Link></li>
              <li><Link to="/get-involved" className="text-blue-200 hover:text-white transition-colors">Start a Chapter</Link></li>
              <li><Link to="/leadership" className="text-blue-200 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Future Fund Foundation. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="mailto:info@futurefund.org" className="hover:text-white transition-colors flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@futurefund.org</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
