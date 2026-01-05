import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-renalyse-light py-12 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-renalyse-dark mb-4">
                REnalyse<span className="text-renalyse-primary">.</span>
            </div>
            <p className="text-renalyse-textGray max-w-sm">
                Setting the standard for 2026 health-tech with distributed infrastructure, clinical AI excellence, and consent-driven workflows.
            </p>
        </div>
        <div>
            <h5 className="font-bold text-renalyse-dark mb-4">Quick Links</h5>
            <ul className="space-y-2 text-renalyse-textGray">
                <li><a href="#" className="hover:text-renalyse-primary">Home</a></li>
                <li><a href="#how-it-works" className="hover:text-renalyse-primary">How to use</a></li>
                <li><a href="#users" className="hover:text-renalyse-primary">Target Users</a></li>
                <li><a href="/privacy" className="hover:text-renalyse-primary">Privacy Policy (HIPAA)</a></li>
            </ul>
        </div>
        <div>
            <h5 className="font-bold text-renalyse-dark mb-4">Connect</h5>
            <div className="flex space-x-4 text-renalyse-textGray">
                <a href="#" className="hover:text-renalyse-primary transition"><Twitter size={20} /></a>
                <a href="#" className="hover:text-renalyse-primary transition"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-renalyse-primary transition"><Github size={20} /></a>
            </div>
        </div>
      </div>
      <div className="text-center text-renalyse-textGray text-sm pt-8 border-t border-gray-200">
        © {new Date().getFullYear()} REnalyse Pro 2026. All rights reserved. A Microsoft-First Health Platform.
      </div>
    </footer>
  );
};

export default Footer;