import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Rocket, CheckCircle2, Layout, Zap, Cpu, Search, Lock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WebDev = () => {
    return (
        <main className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">World-Class <span className="text-gradient">Web Dev</span></h1>
                        <p className="text-xl text-slate-500 mb-8">We build fast, secure, and beautiful websites that convert. From complex SaaS platforms to high-end corporate sites.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {['Custom Frameworks', 'SEO Optimized', 'Mobile First', 'Ultra Fast', 'Secure Build', 'Cloud Ready'].map(f => (
                                <div key={f} className="flex items-center gap-2 font-semibold">
                                    <CheckCircle2 className="text-brand-cyan" size={20} />
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <GlassCard className="aspect-square flex items-center justify-center">
                        <Cpu className="text-brand-cyan animate-pulse" size={120} />
                        <div className="absolute inset-0 bg-brand-cyan/5 blur-3xl rounded-full" />
                    </GlassCard>
                </div>

                <h2 className="text-4xl font-bold mb-12 text-center">What We Deliver</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        { title: 'E-commerce', icon: Layers, desc: 'High-conversion stores with seamless payment flows.' },
                        { title: 'Landing Pages', icon: Layout, desc: 'Single pages designed for massive conversion.' },
                        { title: 'Speed Optimization', icon: Zap, desc: '99+ PageSpeed scores to boost your SEO ranking.' }
                    ].map((s, i) => (
                        <GlassCard key={i} className="text-center">
                            <div className="w-16 h-16 rounded-full glass mx-auto flex items-center justify-center text-brand-cyan mb-6">
                                <s.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                            <p className="text-slate-400">{s.desc}</p>
                        </GlassCard>
                    ))}
                </div>

                <div className="glass-dark p-12 md:p-20 rounded-[4rem] text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Build Your Platform?</h2>
                    <Link to="/contact" className="inline-flex px-10 py-4 rounded-xl bg-linear-to-r from-brand-cyan to-brand-purple text-white font-bold text-xl">
                        Schedule a Free Audit
                    </Link>
                </div>
            </div>
        </main>
    )
}
