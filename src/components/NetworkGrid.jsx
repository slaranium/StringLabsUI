// src/components/NetworkGrid.jsx
import React, { useState } from 'react';
import { Archive } from 'lucide-react';

export default function NetworkGrid({ initialNetworks }) {
  const [activeTab, setActiveTab] = useState('All');

  // Filter Logic
  const filteredNetworks = initialNetworks.filter((network) => {
    if (activeTab === 'All') return true;
    return network.category?.toLowerCase() === activeTab.toLowerCase();
  });

  const tabs = ['All', 'Mainnet', 'Testnet', 'Archive'];

  return (
    <div className="w-full">
      
      {/* 1. TAB MENU */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <div className="bg-white/5 p-1.5 rounded-full inline-flex">
            {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                ${activeTab === tab 
                    ? 'bg-brand-primary text-white shadow-lg' 
                    : 'text-brand-text-muted hover:text-white hover:bg-white/5'}
                `}
            >
                {tab}
            </button>
            ))}
        </div>
      </div>

      {/* 2. GRID NETWORK CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredNetworks.map((net, index) => (
          <div 
            key={index} 
            className="group relative bg-[#12121F] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Background Glow Effect saat Hover */}
            <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center h-full">
                
                {/* Logo Container */}
                <div className={`w-20 h-20 mb-6 rounded-lg flex items-center justify-center overflow-hidden shadow-2xl bg-[#1A1A2E]`}>
                     {/* LOGIKA ICON: Cek apakah icon berupa path gambar (string) atau komponen */}
                     {typeof net.icon === 'string' ? (
                        <img src={net.icon} alt={net.name} className="w-full h-full object-cover" />
                     ) : (
                        <span className="text-4xl">{net.icon}</span>
                     )}
                </div>

                {/* Nama Network */}
                <h3 className="text-xl font-bold text-white mb-2">{net.name}</h3>
                <span className="text-brand-text-muted text-xs uppercase tracking-widest mb-8 font-medium">
                    {net.category}
                </span>

                {/* Tombol Action */}
                <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                    
                    {/* 1. Tombol Explorer (Fixed Link) */}
                    <a 
                        href={net.explorer} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-2.5 rounded-lg bg-gray-200 hover:bg-white text-black font-bold text-sm transition-colors"
                    >
                        Explorer
                    </a>

                    {/* 2. Tombol Stake (Fixed Link) */}
                    {net.stake ? (
                        <a 
                            href={net.stake}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20"
                        >
                            Stake
                        </a>
                    ) : (
                        // Jika tidak ada link stake, tampilkan tombol mati
                        <button disabled className="flex items-center justify-center py-2.5 rounded-lg bg-white/5 text-white/20 font-bold text-sm cursor-not-allowed">
                            Stake
                        </button>
                    )}

                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNetworks.length === 0 && (
        <div className="text-center py-20 text-brand-text-muted">
            <Archive className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No networks found in this category.</p>
        </div>
      )}

    </div>
  );
}