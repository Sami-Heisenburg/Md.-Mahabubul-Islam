import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { ExternalLink, Filter, Cpu, Layers, Globe, Zap, ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Quantum CRM', category: 'SaaS', desc: 'Comprehensive enterprise CRM with real-time data integration.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Vanguard Store', category: 'Website', desc: 'High-performance ecommerce architecture with optimized load times.', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Nexus Growth', category: 'Marketing', desc: 'Strategic market expansion for technology-focused organizations.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Solaris Ads', category: 'Facebook Ads', desc: 'High-ROI advertising campaigns for renewable energy initiatives.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Apex Dashboard', category: 'SaaS', desc: 'Advanced data visualization for cloud-based infrastructure.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Luxe Real Estate', category: 'Website', desc: 'Premium real estate portal featuring interactive virtual tours.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' }
];

export const Projects = () => {
    const [filter, setFilter] = useState('All');
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-grid opacity-10 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-28">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em]">
                           <Layers size={12} /> Our Portfolio
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none">
                          Featured <span className="text-gradient">Projects.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium">Explore our history of delivering professional digital solutions.</p>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-3 pb-2">
                        {['All', 'Website', 'Marketing', 'SaaS', 'Facebook Ads'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-brand-cyan text-black shadow-[0_10px_25px_rgba(0,242,255,0.4)]' : 'glass hover:bg-white/10 dark:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 perspective-distant">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                className="preserve-3d"
                            >
                                <GlassCard className="p-0 border-white/5 group h-full flex flex-col hover:border-brand-cyan/30 transition-all duration-700 overflow-hidden" tiltScale={0.5}>
                                    <div className="aspect-video relative overflow-hidden">
                                        <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                            <div className="w-16 h-16 rounded-full bg-brand-cyan text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-[0_0_30px_#00f2ff]">
                                                <ExternalLink size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-10 space-y-6 flex-1 bg-linear-to-b from-transparent to-black/20">
                                        <div className="flex items-center gap-3">
                                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-cyan px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20">
                                            {project.category}
                                          </span>
                                        </div>
                                        <h3 className="text-3xl font-display font-black tracking-tight">{project.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">{project.desc}</p>
                                        
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                          <button className="font-black text-xs uppercase tracking-[0.2em] text-brand-cyan flex items-center gap-3 group/btn hover:gap-5 transition-all">
                                              View Project <ArrowRight size={16} />
                                          </button>
                                          <div className="text-slate-700 dark:text-slate-600">
                                            <Zap size={16} className="group-hover:text-brand-cyan transition-colors" />
                                          </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
};
