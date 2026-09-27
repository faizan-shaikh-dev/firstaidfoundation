import React from 'react';
import { QrCode, Smartphone, ShieldCheck } from 'lucide-react';

export default function QRDonation() {
  return (
    <div className="bg-gradient-to-br from-[#184E82] to-[#0F3356] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden text-center border border-blue-800">
      
      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md text-red-300">
        <Smartphone className="w-6 h-6" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">Scan & Donate via UPI Apps</h3>
      <p className="text-xs text-blue-200 mb-6 max-w-sm mx-auto">
        Scan using Google Pay, PhonePe, Paytm, BHIM, or any banking app.
      </p>

      {/* QR Placeholder Box */}
      <div className="bg-white p-6 rounded-2xl max-w-[240px] mx-auto shadow-2xl text-slate-700 mb-6 border-4 border-white/20 relative group">
        <div className="w-full aspect-square bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4">
          <QrCode className="w-24 h-24 text-[#184E82] mb-2" />
          <span className="text-xs font-bold text-[#184E82]">First Aid Foundation</span>
          <span className="text-[10px] text-slate-500 font-medium">Official UPI QR Code</span>
        </div>
      </div>

      <div className="space-y-1 text-xs text-blue-100">
        <p className="font-semibold text-white">Direct UPI Payment</p>
        <p className="text-[11px] text-blue-200">Account Verified for Medical Assistance</p>
      </div>

      <div className="mt-6 pt-4 border-t border-blue-700/50 inline-flex items-center gap-2 text-xs text-emerald-300 font-medium">
        <ShieldCheck className="w-4 h-4" />
        <span>Secure & Direct Contribution</span>
      </div>

    </div>
  );
}
