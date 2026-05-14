import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Gavel, Globe, Briefcase, AlertTriangle, ChevronRight, Scale } from 'lucide-react';

export const Terms = () => {
  const sections = [
    {
      title: "1. Agreement to Terms",
      icon: <Gavel className="text-brand-cyan" size={24} />,
      content: 'By accessing or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. This agreement constitutes a legally binding contract between you and Tech Tonic Creative.'
    },
    {
      title: "2. Services",
      icon: <Globe className="text-brand-purple" size={24} />,
      content: "Tech Tonic Creative provides creative technology services including web development, marketing, and SaaS products. We reserve the right to modify or discontinue services at any time."
    },
    {
      title: "3. Intellectual Property",
      icon: <Briefcase className="text-brand-cyan" size={24} />,
      content: "All content and designs created by us remain our property until full payment is received, at which point ownership is transferred to the client as per the specific project agreement signed between parties."
    },
    {
      title: "4. Limitation of Liability",
      icon: <AlertTriangle className="text-brand-purple" size={24} />,
      content: "In no event shall Tech Tonic Creative be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services or digital assets."
    }
  ];

  return (
    <main className="pt-40 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-black uppercase tracking-[0.3em] mb-6">
            <Scale size={14} /> Legal Framework
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-tight">Terms of <span className="text-gradient">Service</span></h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Updated May 14, 2026. The clear ground rules for our creative partnership.</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <GlassCard className="p-10 border-slate-200/30 dark:border-white/5 hover:border-brand-purple/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-black mb-4 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {section.content}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-12 rounded-[3.5rem] bg-linear-to-br from-slate-900 to-black border border-white/10 text-center"
        >
          <h3 className="text-3xl font-display font-black text-white mb-4 tracking-tight">Ready to start?</h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">By proceeding with our services, you acknowledge that you have read and understood these terms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-10 py-5 rounded-2xl bg-brand-purple text-white font-black uppercase tracking-widest text-[10px] hover:shadow-brand-purple/50 transition-all transform hover:-translate-y-1">
               Accept & Start Project
             </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
