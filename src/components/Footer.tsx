import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-slate-50 dark:bg-[#02040d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white p-[2px] shadow-lg shadow-brand-cyan/20 group-hover:scale-110 transition-all duration-500 overflow-hidden">
              <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-brand-cyan">
                <Cpu size={20} className="group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Tech Tonic</span>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Leading creative technology agency helping businesses build strong online presence and drive scalable growth.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all transform hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-brand-cyan transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
          <ul className="space-y-4">
            {[
              { name: 'Web Development', href: '/services/web-development' },
              { name: 'Digital Marketing', href: '/services/digital-marketing' },
              { name: 'Facebook Ads', href: '/services/facebook-ads' },
              { name: 'SaaS Solutions', href: '/services/saas-products' },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-slate-400 hover:text-brand-cyan transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <Mail className="text-brand-cyan shrink-0" size={20} />
              <span className="text-slate-400">hello@techtonic.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-brand-cyan shrink-0" size={20} />
              <span className="text-slate-400">+1 (234) 567-890</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-cyan shrink-0" size={20} />
              <span className="text-slate-400">123 Innovation Drive, Silicon Valley, CA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2024 Tech Tonic Creative. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-brand-cyan">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand-cyan">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
