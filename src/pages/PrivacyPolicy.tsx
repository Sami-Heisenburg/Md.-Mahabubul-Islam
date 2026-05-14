import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

export const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      icon: <Shield className="text-brand-cyan" size={24} />,
      content: 'Tech Tonic Creative ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.'
    },
    {
      title: "2. Information We Collect",
      icon: <Eye className="text-brand-purple" size={24} />,
      content: "We may collect personal information such as your name, email address, phone number, and company details when you fill out our contact form or subscribe to our newsletter."
    },
    {
      title: "3. How We Use Your Information",
      icon: <Lock className="text-brand-cyan" size={24} />,
      items: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To monitor the usage of our services",
        "To gather analysis or valuable information so that we can improve our services"
      ]
    },
    {
      title: "4. Data Security",
      icon: <FileText className="text-brand-purple" size={24} />,
      content: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure."
    }
  ];

  return (
    <main className="pt-40 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-brand-cyan/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-black uppercase tracking-[0.3em] mb-6">
            <Shield size={14} /> Trust & Transparency
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-tight">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Updated May 14, 2026. Your privacy is our priority. Learn how we handle your digital footprint with care.</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <GlassCard className="p-10 hover:border-brand-cyan/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-black mb-4 tracking-tight flex items-center gap-2">
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <ul className="grid gap-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                            <ChevronRight size={16} className="text-brand-cyan shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>


      </div>
    </main>
  );
};
