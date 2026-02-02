import React, { useState } from 'react';
import { 
  Landmark, LayoutDashboard, Briefcase, TrendingUp, 
  Globe, Layers, Menu, X, CheckCircle2, ArrowRight 
} from 'lucide-react';

const ERPLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const erpModule = {
    id: "erp-enterprise",
    name: "ERP",
    title: "Next-Gen Enterprise Planning",
    description: "Scale your business operations with a modern ERP framework designed for rapid growth and complete operational control.",
    features: [
      { icon: <Briefcase className="w-6 h-6" />, title: "Resource Planning", desc: "Automated workforce and asset allocation" },
      { icon: <TrendingUp className="w-6 h-6" />, title: "Growth Analytics", desc: "Predictive insights for business scaling" },
      { icon: <Globe className="w-6 h-6" />, title: "Multi-Entity Mgmt", desc: "Manage multiple branches seamlessly" },
      { icon: <Layers className="w-6 h-6" />, title: "Modular Core", desc: "Plug-and-play business functionalities" },
    ],
    benefits: [
      "99.9% Data synchronization", 
      "Zero manual entry errors", 
      "Rapid deployment architecture"
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Landmark className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold tracking-tight text-slate-800">NEXUS<span className="text-blue-600">ERP</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Modules</a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Pricing</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Version 4.0 is now live
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Manage your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise</span> <br /> 
            without the complexity.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            A unified workspace for finance, supply chain, and human resources. 
            Built for modern teams who value speed and data accuracy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              Request Demo <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Main Module Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                <div className="h-8 bg-slate-800 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <div className="p-6">
                  <div className="h-64 flex flex-col gap-4">
                    <div className="h-4 w-1/3 bg-slate-700 rounded animate-pulse"></div>
                    <div className="h-32 w-full bg-slate-800 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-16 bg-blue-500/20 rounded-lg border border-blue-500/30"></div>
                      <div className="h-16 bg-slate-800 rounded-lg"></div>
                      <div className="h-16 bg-slate-800 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <LayoutDashboard size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-blue-600">{erpModule.name}</h3>
              </div>
              <h2 className="text-4xl font-bold mb-6">{erpModule.title}</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {erpModule.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {erpModule.features.map((feature, index) => (
                  <div key={index} className="group p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                    <div className="text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {erpModule.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span className="font-medium text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 NexusERP Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ERPLandingPage;