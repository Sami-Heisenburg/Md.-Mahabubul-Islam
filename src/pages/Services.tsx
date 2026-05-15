import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { ArrowRight, Code, Megaphone, BarChart3, Database, Globe, Zap, Cpu, Server, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    icon: Code,
    desc: 'Bespoke ecommerce systems, administrative portals, and high-performance lead generation modules.',
    href: '/services/web-development',
    tech: ['React', 'Next.js', 'Node.js']
  },
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    desc: 'Strategic brand positioning and performance-based marketing designed for rapid market expansion.',
    href: '/services/digital-marketing',
    tech: ['Google Ads', 'SEO', 'Email']
  },
  {
    title: 'Paid Acquisition',
    icon: BarChart3,
    desc: 'Optimized advertising systems with advanced conversion tracking and real-time ROI measurement.',
    href: '/services/facebook-ads',
    tech: ['Meta Ads', 'CAPI', 'Retargeting']
  },
  {
    title: 'Custom Software',
    icon: Database,
    desc: 'Scalable business dashboards and cloud-native automation designed to streamline operations.',
    href: '/services/saas-products',
    tech: ['AWS', 'Firebase', 'APIs']
  }
];

export const Services = () => (
  <main className="pt-32 pb-20 px-6 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[30vh] bg-grid opacity-10 pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-28 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <Cpu size={12} /> Our Expertise
          </div>
          <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85]">
            Our <br /><span className="text-gradient">Services.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            We provide the strategic digital infrastructure required to drive measurable results.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-32">
        {services.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="flex flex-col h-full group border-white/5 hover:border-brand-cyan/40 transition-all duration-700 p-12" tiltScale={0.5}>
              <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/10 flex items-center justify-center text-brand-cyan mb-10 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                <s.icon size={36} />
              </div>
              <h3 className="text-4xl font-display font-black mb-6 tracking-tight">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-xl leading-relaxed flex-1 font-medium">{s.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                 {s.tech.map(t => (
                   <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">{t}</span>
                 ))}
              </div>

              <Link to={s.href} className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-brand-cyan hover:gap-6 transition-all group-hover:text-brand-purple">
                Explore Service <ArrowRight size={20} />
              </Link>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 relative overflow-hidden rounded-[4rem] bg-slate-900">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 px-8 md:px-20 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-20 whitespace-normal">The <span className="text-gradient">Professional</span> Advantage</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
              {[
                  { title: 'Data-Driven', icon: BarChart3, text: 'We use real-time analytics and market intelligence to drive design decisions.' },
                  { title: 'International Scale', icon: Globe, text: 'Building infrastructure designed for global deployment and performance.' },
                  { title: 'Strategic Execution', icon: Zap, text: 'Fast-paced development cycles with a primary focus on ROI.' }
              ].map((b, i) => (
                  <div key={i} className="text-center group">
                      <div className="w-20 h-20 mx-auto bg-white/5 rounded-[2rem] flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <b.icon size={40} />
                      </div>
                      <h4 className="font-display font-black text-white text-2xl mb-4 tracking-tight">{b.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{b.text}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </main>
);
