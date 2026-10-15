import React, { useState } from 'react';
import { Smartphone, ShieldCheck, Download, Check } from 'lucide-react';

export default function QRDonation() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/qr-scanner.png';
    link.download = 'FirstAidFoundation_QR_Scanner.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="bg-gradient-to-br from-[#184E82] via-[#0F3356] to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden text-center border border-blue-800 flex flex-col justify-between h-full">
      
      <div>
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md text-red-300">
          <Smartphone className="w-6 h-6" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-1">Scan & Donate via UPI</h3>
        <p className="text-xs text-blue-200 mb-6 max-w-sm mx-auto">
          Scan using Google Pay, PhonePe, Paytm, BHIM, or any BharatQR / UPI enabled app.
        </p>

        {/* Real QR Scanner Image Card */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl max-w-[280px] mx-auto shadow-2xl text-slate-700 mb-6 border-4 border-white/20 group hover:scale-[1.02] transition-transform duration-300">
          <div className="rounded-xl overflow-hidden bg-white shadow-inner">
            <img 
              src="/images/qr-scanner.png" 
              alt="First Aid Foundation Official UPI QR Scanner" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-1 text-xs text-blue-100">
          <p className="font-semibold text-white">First Aid Foundation — Jalgaon</p>
          <p className="text-[11px] text-blue-200 font-mono">Terminal ID (TID): 62008986</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-blue-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Verified Merchant UPI</span>
        </div>

        <button 
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20 text-xs cursor-pointer"
        >
          {downloaded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Download QR</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
