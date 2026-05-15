import { motion } from 'motion/react';
import { ArrowRight, Code, Megaphone, Smartphone, Star, BarChart3, Database, LayoutGrid, Layers, Zap, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { GlassCard } from '../components/GlassCard';

const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, Bloom Media', text: 'Tech Tonic transformed our online presence. Our sales jumped by 40% in just three months of working together.' },
    { name: 'Michael Chen', role: 'Founder, DevFlow', text: 'The SaaS dashboard they built for us is world-class. Scalable, fast, and exactly what our users needed.' },
    { name: 'Emma Davis', role: 'Director, Urban Loft', text: 'Highly professional team. Their Facebook ads strategy is pure magic. We finally have a predictable lead flow.' },
    { name: 'Alex Rivera', role: 'CTO, NextGen Systems', text: 'Their technical expertise is unmatched. They delivered a complex web application ahead of schedule and under budget.' },
    { name: 'Jessica Taylor', role: 'Marketing Lead, Spark Digital', text: 'We saw an immediate ROI with their ad campaigns. The creative design and strategic targeting are top-notch.' },
];

export const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/30 blur-[150px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 blur-[150px] rounded-full" 
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-cyan font-bold text-xs uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(0,242,255,0.1)]">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Innovate • Develop • Scale</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-black leading-[0.88] tracking-tighter">
              Build <br /><span className="text-gradient">Better</span> <br />Faster.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium">
              We engineer high-performance ecosystems that combine stunning architecture with data-driven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                to="/contact"
                className="px-12 py-6 rounded-2xl bg-linear-to-r from-brand-cyan to-brand-purple text-white font-black text-xl flex items-center justify-center gap-3 group hover:shadow-[0_20px_60px_rgba(0,242,255,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-12 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl font-black text-xl text-center hover:bg-white/10 transition-all dark:text-white group flex items-center justify-center gap-2"
              >
                Our Services <Zap size={20} className="text-brand-cyan group-hover:scale-125 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative perspective-distant"
          >
            <div className="relative z-10 grid grid-cols-2 gap-6 preserve-3d">
              <GlassCard tiltScale={1.5} className="translate-y-16">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6">
                  <Code size={24} />
                </div>
                <h3 className="font-black text-lg mb-2">Web Systems</h3>
                <p className="text-xs text-slate-400 font-medium">Modern performance architecture</p>
              </GlassCard>
              <GlassCard tiltScale={1.2} className="translate-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6">
                  <Megaphone size={24} />
                </div>
                <h3 className="font-black text-lg mb-2">Growth Strategy</h3>
                <p className="text-xs text-slate-400 font-medium">Strategic marketing systems</p>
              </GlassCard>
              <GlassCard tiltScale={1.3} className="translate-y-8 -translate-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6">
                  <Database size={24} />
                </div>
                <h3 className="font-black text-lg mb-2">SaaS Solutions</h3>
                <p className="text-xs text-slate-400 font-medium">Scalable cloud platforms</p>
              </GlassCard>
              <GlassCard tiltScale={1.4} className="-translate-y-12">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-black text-lg mb-2">Insights Hub</h3>
                <p className="text-xs text-slate-400 font-medium">Conversion-first analytics</p>
              </GlassCard>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-display font-bold">Creative Technology Meets <span className="text-gradient">Business Growth</span></h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Tech Tonic Creative helps businesses build strong online presence through cutting-edge technology and strategic marketing. We don't just build websites; we create digital ecosystems that drive conversions and foster long-term success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {[
                  { title: 'Strategy', desc: 'Data-informed planning' },
                  { title: 'Design', desc: 'Premium aesthetic UI' },
                  { title: 'Growth', desc: 'Scalable ROI models' }
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl glass">
                    <h4 className="font-bold text-brand-cyan mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:gap-3 transition-all pt-4">
                Learn more about us <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden group"
            >
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Workshop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
               <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-bold">Driven by Innovation</h3>
                  <p className="text-white/60">Our team works at the intersection of design and code.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative bg-grid">
        <div className="absolute inset-0 bg-linear-to-b from-white dark:from-[#050816] via-transparent to-white dark:to-[#050816] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em]">
              <Layers size={12} /> Our Capabilities
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
              Standard <span className="text-gradient">Services</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              We leverage advanced digital tools to build high-converting platforms.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { 
              title: 'Architectural Web', 
              desc: 'High-performance, edge-computed platforms built with React and Next.js for sub-second speeds.', 
              icon: Code,
              href: '/services/web-development' 
            },
            { 
              title: 'Growth Strategy', 
              desc: 'Strategic brand positioning and multi-channel marketing designed to capture market share.', 
              icon: Megaphone,
              href: '/services/digital-marketing' 
            },
            { 
              title: 'FB Meta Precision', 
              desc: 'Algorithmic ad campaigns using advanced pixel events and conversion API for maximum ROI.', 
              icon: BarChart3,
              href: '/services/facebook-ads' 
            },
            { 
              title: 'SaaS Metallurgy', 
              desc: 'Custom software ecosystems that automate complex business workflows and scale seamlessly.', 
              icon: Database,
              href: '/services/saas-products' 
            },
            { 
              title: 'Conversion Funnels', 
              desc: 'Direct-response digital environments designed to guide potential users to high-value actions.', 
              icon: MousePointer2,
              href: '/services/facebook-ads' 
            },
            { 
              title: 'Visual Identity', 
              desc: 'Premium UI/UX systems that establish authority and trust through intentional design.', 
              icon: LayoutGrid,
              href: '/services' 
            }
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full border-white/5 hover:border-brand-cyan/30 transition-all duration-700" tiltScale={0.5}>
                <div className="w-16 h-16 rounded-3xl bg-slate-900 flex items-center justify-center text-brand-cyan mb-8 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-black mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <Link to={service.href} className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-brand-cyan hover:gap-5 transition-all">
                  Documentation <ArrowRight size={16} />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section - NEW */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-purple/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-6">Our Development <span className="text-gradient">Process</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium">From initial strategy to final launch, we guide you through every step.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Strategy', desc: 'Discovery and in-depth business mapping.' },
              { step: '02', title: 'Design', desc: 'Creative UI and user-experience modeling.' },
              { step: '03', title: 'Develop', desc: 'Performance-tuned engineering and testing.' },
              { step: '04', title: 'Go-Live', desc: 'Global deployment and performance tracking.' }
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="text-8xl font-display font-black text-white/5 absolute -top-12 -left-4 group-hover:text-brand-cyan/10 transition-colors duration-500">{p.step}</div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-display font-black text-white mb-4 tracking-tight">{p.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ x: '-100%' }}
                     whileInView={{ x: '0%' }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                     className="h-full w-full bg-linear-to-r from-brand-cyan to-brand-purple" 
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-black/20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-brand-cyan/[0.02] to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter">Trusted by <span className="text-gradient">Innovators</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg font-medium">Hear from the business leaders who scaled their digital presence with us.</p>
          </motion.div>
        </div>

        {/* Marquee Section */}
        <div className="relative group">
          {/* Faded edges for better transition - matched to site background */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-slate-50 dark:from-[#050816] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-slate-50 dark:from-[#050816] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-8 py-10 pr-8 animate-marquee hover:[animation-play-state:paused]"
              style={{ width: "fit-content" }}
            >
              {/* Render testimonials twice for seamless loop */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <GlassCard key={i} className="w-[350px] md:w-[480px] shrink-0 p-12 hover:border-brand-cyan/40 hover:shadow-[0_0_50px_rgba(0,242,255,0.08)] transition-all duration-700 group/card relative">
                  <div className="flex gap-1.5 mb-8">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#00f2ff" className="text-brand-cyan" />)}
                  </div>

                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 text-slate-700 dark:text-slate-200 relative z-10 min-h-[140px] tracking-tight">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-5">
                     <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand-cyan to-brand-purple p-[1px] shrink-0 shadow-lg">
                       <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                          <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} 
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                       </div>
                     </div>
                     <div>
                       <h4 className="font-display font-black text-xl tracking-tight leading-tight">{t.name}</h4>
                       <p className="text-[11px] text-brand-cyan font-bold uppercase tracking-[0.25em] opacity-80">{t.role}</p>
                     </div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto text-center bg-slate-900 border border-white/10 dark:bg-slate-900 p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/20 blur-[100px] rounded-full" />
              
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10 leading-tight text-white">Ready to Build Something <span className="text-gradient">Powerful?</span></h2>
              <p className="text-xl text-slate-300 mb-12 relative z-10 max-w-2xl mx-auto">Let's discuss your project and see how we can take your business to the next level.</p>
              <Link
                to="/contact"
                className="inline-flex px-10 py-5 rounded-2xl bg-linear-to-r from-brand-cyan to-brand-purple text-white font-bold text-xl hover:shadow-[0_20px_50px_rgba(0,242,255,0.4)] transition-all relative z-10 transform hover:-translate-y-1"
              >
                Book Your Discovery Call
              </Link>
          </div>
      </section>
    </main>
  );
};
