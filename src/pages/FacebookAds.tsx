import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { BarChart, Target, Repeat, TrendingUp, Users, Search, Share2, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FacebookAds = () => (
    <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-block px-4 py-1 rounded-full glass mb-6 text-brand-purple border-brand-purple/20 text-sm font-bold uppercase tracking-widest">Growth Engine</motion.div>
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Scale Your Revenue with <span className="text-gradient">Facebook Ads</span></h1>
                <p className="text-xl text-slate-500 leading-relaxed">Most agencies just spend your money. We build systems that generate measurable ROI using high-precision targeting and creative testing.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {[
                    { title: 'Pixel Setup', icon: Target, desc: 'Accurate tracking for data-driven scale.' },
                    { title: 'Retargeting', icon: Repeat, desc: 'Win back visitors who didn\'t buy.' },
                    { title: 'Creative Testing', icon: MousePointer2, desc: 'Iterative design for maximum CTR.' },
                    { title: 'Scale Strategy', icon: TrendingUp, desc: 'Predictable growth with CBO/ABO.' }
                ].map((item, i) => (
                    <GlassCard key={i} className="text-center group">
                        <div className="w-14 h-14 rounded-2xl glass mx-auto flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all transform group-hover:rotate-6">
                            <item.icon size={28} />
                        </div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                    </GlassCard>
                ))}
            </div>

            {/* Strategy Grid */}
            <h2 className="text-4xl font-bold mb-12">Our Ads Playbook</h2>
            <div className="grid lg:grid-cols-2 gap-12 mb-32">
                <div className="space-y-8">
                    {[
                        { step: '01', title: 'Deep Audience Research', desc: 'We identify exactly who your customers are and where they hide on Social.' },
                        { step: '02', title: 'High-Octane Creatives', desc: 'Our design team builds ads that stop the thumb scrolling and demand attention.' },
                        { step: '03', title: 'Continuous Optimization', desc: 'We monitor stats hourly, cutting losers and scaling winners to the moon.' }
                    ].map(step => (
                        <div key={step.step} className="flex gap-6">
                            <span className="text-4xl font-black text-white/10">{step.step}</span>
                            <div>
                                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                <p className="text-slate-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative glass rounded-[3rem] p-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 blur-3xl" />
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><BarChart className="text-brand-purple" /> Sales Funnel Layout</h4>
                    <div className="space-y-4">
                        <div className="h-12 glass rounded-xl flex items-center px-4 justify-between border-brand-purple/20">
                            <span className="text-sm font-bold">Top of Funnel (Awareness)</span>
                            <span className="text-brand-purple font-mono text-[10px]">70% Budget</span>
                        </div>
                        <div className="h-10 ml-8 glass rounded-xl flex items-center px-4 justify-between opacity-80">
                            <span className="text-xs">Middle of Funnel (Interest)</span>
                            <span className="text-white/40 font-mono text-[10px]">20% Budget</span>
                        </div>
                        <div className="h-8 ml-16 glass rounded-xl flex items-center px-4 justify-between opacity-60">
                            <span className="text-[10px] font-bold">Bottom of Funnel (Conversion)</span>
                            <span className="text-brand-cyan font-mono text-[10px]">10% Budget</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Link to="/contact" className="px-12 py-5 rounded-2xl bg-brand-purple text-white font-black text-xl hover:shadow-[0_0_50px_rgba(112,0,255,0.4)] transition-all">
                    Scale My Sales Now
                </Link>
            </div>
        </div>
    </main>
);
