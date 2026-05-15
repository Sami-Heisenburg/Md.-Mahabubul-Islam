import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Zap, Heart, LayoutGrid, Cpu, Globe } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const About = () => {
  return (
    <main className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* About Hero */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              <Cpu size={12} /> Innovation for the Digital Age
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85]">
              Building <br /><span className="text-gradient">The Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We are a collective of strategists, designers, and developers dedicated to building high-performance digital ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-display font-black tracking-tight">Our <span className="text-gradient">Story</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                Tech Tonic was established at the intersection of creative innovation and technical precision. We recognized that the digital world was becoming crowded with standard solutions, and we chose to offer something more.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                We treat every project as a critical business asset. Whether it is a custom dashboard or a global marketing campaign, we apply rigorous testing and strategic integrity to ensure success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 p-8 rounded-[2rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-grid opacity-5" />
               <div className="relative z-10">
                 <h4 className="text-4xl font-display font-black text-brand-cyan">150+</h4>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-2">Projects Deployed</p>
               </div>
               <div className="relative z-10">
                 <h4 className="text-4xl font-display font-black text-brand-purple">99%</h4>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-2">Client Success</p>
               </div>
               <div className="relative z-10">
                 <h4 className="text-4xl font-display font-black text-brand-cyan">45%</h4>
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black pt-2">Avg. Growth Delta</p>
               </div>
            </div>
          </motion.div>
          
          <div className="relative perspective-distant preserve-3d">
            <motion.div 
               initial={{ rotateY: 15, rotateX: 5 }}
               animate={{ rotateY: 0, rotateX: 0 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="aspect-square rounded-[4rem] overflow-hidden glass p-4 shadow-2xl relative z-10"
            >
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Agency Office" className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-12 -left-12 z-20"
            >
              <GlassCard className="p-8 rounded-[2.5rem] max-w-sm border-brand-cyan/30 shadow-2xl shadow-brand-cyan/20" tiltScale={0.5}>
                <Target className="text-brand-cyan mb-6" size={40} />
                <p className="font-display font-black text-lg italic leading-tight text-slate-800 dark:text-white">
                  "Our core mission is to bridge complex technology with intuitive business growth."
                </p>
              </GlassCard>
            </motion.div>

            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full -z-10" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-40">
            <GlassCard className="group border-white/5 hover:border-brand-cyan/40 transition-all duration-700" tiltScale={0.8}>
                <div className="w-20 h-20 rounded-3xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Lightbulb size={40} />
                </div>
                <h3 className="text-4xl font-display font-black mb-6 tracking-tight">The Vision</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-medium">To establish the definitive protocol for creative technology—where every digital touchpoint is an engineered masterpiece of design and profitability.</p>
            </GlassCard>
            <GlassCard className="group border-white/5 hover:border-brand-purple/40 transition-all duration-700" tiltScale={0.8}>
                <div className="w-20 h-20 rounded-3xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  <Zap size={40} />
                </div>
                <h3 className="text-4xl font-display font-black mb-6 tracking-tight">The Mission</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-medium">To empower entrepreneurs and enterprises with high-conversion websites, breakthrough marketing strategies, and scalable software that automates success.</p>
            </GlassCard>
        </div>

        {/* Core Values */}
        <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
              <Globe size={12} /> Global Standards
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tighter">Our Core <span className="text-gradient">Values</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg font-medium">The fundamental constants that drive our business success.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            {[
                { title: 'Commitment to Excellence', desc: 'Predictable results only. We do not deliver anything less than exceptional. Every component is tested for absolute performance.', icon: ShieldCheck },
                { title: 'Data-Driven Strategy', desc: 'Aesthetics are validated by logic. We use deep analytics to guide our design decisions, ensuring measurable ROI.', icon: TrendingUp },
                { title: 'Full Transparency', desc: 'Open communication at every layer. No hidden complexities. Just clear strategy and verifiable results.', icon: Heart }
            ].map((value, i) => (
                <GlassCard key={i} className="text-center group border-white/5" tiltScale={0.5}>
                    <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/10 mx-auto flex items-center justify-center text-brand-cyan mb-8 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                        <value.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-display font-black mb-4 tracking-tight">{value.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{value.desc}</p>
                </GlassCard>
            ))}
        </div>
      </div>
    </main>
  );
};
