import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">FF</span>
              </div>
              <span className="font-bold text-xl">Future Fund Foundation</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-md mb-6">
              Building a national, chapter-based system to improve how K–12 schools operate through standardized Learning Kits and structured implementation.
            </p>
            <a 
              href="mailto:info@futurefund.org" 
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <Mail className="h-5 w-5 mr-2" />
              info@futurefund.org
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/chapters" className="text-gray-300 hover:text-white transition-colors">Chapter Model</Link></li>
              <li><Link to="/competition" className="text-gray-300 hover:text-white transition-colors">Competition</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Get Involved</h3>
            <ul className="space-y-3 text-base">
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Join a Chapter</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Start a Chapter</Link></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Future Fund Foundation. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Building better schools through structure and consistency</p>
        </div>
      </div>
    </footer>
  );
};
