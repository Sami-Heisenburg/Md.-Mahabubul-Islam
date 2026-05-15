import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Magnetic } from '../components/Magnetic';
import { CustomSelect } from '../components/CustomSelect';
import { ArrowRight, Mail, Phone, MapPin, Send, ExternalLink, Cpu, Terminal as TerminalIcon, Globe, BarChart3, Database, Code } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const services = [
  { value: 'web', label: 'Web Development', icon: <Code size={18} /> },
  { value: 'marketing', label: 'Digital Marketing', icon: <Globe size={18} /> },
  { value: 'ads', label: 'Paid Acquisition', icon: <BarChart3 size={18} /> },
  { value: 'saas', label: 'SaaS Solutions', icon: <Database size={18} /> },
];

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedService, setSelectedService] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  return (
    <main className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4">
               Contact Us
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85]">
              Start A <br /><span className="text-gradient">Project.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Ready to take your business to the next level? Connect with our team to discuss your goals.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-1 space-y-8">
            <GlassCard className="h-fit border-white/10 hover:border-brand-cyan/40 shadow-2xl transition-all duration-700 p-10" tiltScale={0.8}>
               <h3 className="text-3xl font-display font-black mb-8 tracking-tight">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Email Us</h4>
                    <p className="text-lg font-bold">hello@techtonic.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Call Us</h4>
                    <p className="text-lg font-bold">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Visit Us</h4>
                    <p className="text-lg font-bold">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="aspect-square rounded-[3rem] overflow-hidden glass relative group border border-white/5 shadow-2xl transition-all duration-700"
            >
              {hasValidKey ? (
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={{ lat: 37.42, lng: -122.08 }}
                    defaultZoom={13}
                    mapId="TECH_TONIC_MAP"
                    disableDefaultUI={true}
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    style={{ width: '100%', height: '100%' }}
                    className="grayscale contrast-125 dark:invert dark:hue-rotate-180"
                  >
                    <AdvancedMarker position={{ lat: 37.42, lng: -122.08 }}>
                      <div className="w-12 h-12 bg-brand-cyan rounded-full flex items-center justify-center shadow-[0_0_30px_#00f2ff] animate-pulse p-1">
                        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                          <Cpu className="text-brand-cyan" size={20} />
                        </div>
                      </div>
                    </AdvancedMarker>
                  </Map>
                </APIProvider>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-slate-900 overflow-hidden">
                   <div className="absolute inset-0 bg-grid opacity-10" />
                   <MapPin className="text-brand-cyan mb-6 opacity-50 relative z-10" size={64} />
                   <h4 className="font-display font-black text-white text-xl mb-3 relative z-10">Our Location</h4>
                   <p className="text-sm text-slate-400 mb-8 relative z-10 font-medium">Add GOOGLE_MAPS_PLATFORM_KEY to Secrets to view our interactive office location.</p>
                   <a 
                     href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" 
                     target="_blank" 
                     className="text-xs font-black uppercase tracking-[0.2em] text-brand-cyan underline flex items-center gap-2 relative z-10 hover:text-white transition-colors"
                   >
                     Get Map Key <ExternalLink size={14} />
                   </a>
                </div>
              )}
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <GlassCard className="h-full p-12 hover:border-brand-purple/40 border-white/10 shadow-2xl transition-all duration-700" tiltScale={0.4}>
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center min-h-[600px] text-center"
                  >
                    <div className="w-24 h-24 rounded-3xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-8 animate-pulse">
                      <Send size={48} />
                    </div>
                    <h3 className="text-5xl font-display font-black mb-4 tracking-tight">Message Received</h3>
                    <p className="text-slate-400 text-xl font-medium max-w-md">Our team has received your message. We typically respond within 24 hours.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-12 px-10 py-4 font-bold text-brand-cyan border border-brand-cyan/20 rounded-xl hover:bg-brand-cyan/5">
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Full Name</label>
                         <input required type="text" placeholder="John Doe" className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/5 transition-all font-medium text-lg" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Email Address</label>
                         <input required type="email" placeholder="john@company.com" className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/5 transition-all font-medium text-lg" />
                      </div>
                    </div>
                    <CustomSelect 
                      label="Inquiry Type"
                      placeholder="Select a Service"
                      options={services}
                      value={selectedService}
                      onChange={setSelectedService}
                    />
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Message</label>
                       <textarea required rows={6} placeholder="Tell us about your project or inquiry..." className="w-full px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/5 transition-all font-medium text-lg" />
                    </div>
                    
                    <Magnetic strength={0.2}>
                      <button className="w-full py-6 rounded-3xl bg-linear-to-r from-brand-cyan to-brand-purple text-white font-black text-xl uppercase tracking-[0.1em] hover:shadow-[0_20px_50px_rgba(0,242,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3 group">
                        Submit Inquiry <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
};
