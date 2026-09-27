import React, { useState } from 'react';
import { bankDetailsData } from '../data/donation';
import { Copy, Check, Building2, ShieldCheck } from 'lucide-react';

export default function BankDetails() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#184E82] flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#184E82]">Direct Bank Transfer (NEFT / RTGS / IMPS)</h3>
          <p className="text-xs text-[#5F5F5F]">Transfer funds directly into the foundation's official bank account</p>
        </div>
      </div>



      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        
        {/* Account Name */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-xs font-semibold text-[#5F5F5F] block uppercase tracking-wider mb-1">
            Account Holder Name
          </span>
          <span className="text-lg font-bold text-[#184E82]">
            {bankDetailsData.accountName}
          </span>
        </div>

        {/* Bank Name */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-xs font-semibold text-[#5F5F5F] block uppercase tracking-wider mb-1">
            Bank Name
          </span>
          <span className="text-lg font-bold text-[#184E82]">
            {bankDetailsData.bankName}
          </span>
        </div>

        {/* Account Number with Copy */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-xs font-semibold text-[#5F5F5F] block uppercase tracking-wider mb-1">
              Account Number
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-[#184E82] font-mono tracking-wider break-all block">
              {bankDetailsData.accountNumber}
            </span>
          </div>
          <button
            onClick={() => copyToClipboard(bankDetailsData.accountNumber, 'acc')}
            className="p-2.5 rounded-xl bg-white text-[#184E82] hover:bg-[#184E82] hover:text-white transition-colors border border-blue-200 shadow-xs flex items-center justify-center gap-1.5 text-xs font-bold shrink-0 self-start sm:self-auto w-full sm:w-auto"
            title="Copy Account Number"
          >
            {copiedField === 'acc' ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* IFSC Code with Copy */}
        <div className="p-4 sm:p-5 rounded-2xl bg-red-50/60 border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-xs font-semibold text-[#5F5F5F] block uppercase tracking-wider mb-1">
              IFSC Code
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-[#EB1F23] font-mono tracking-wider break-all block">
              {bankDetailsData.ifscCode}
            </span>
          </div>
          <button
            onClick={() => copyToClipboard(bankDetailsData.ifscCode, 'ifsc')}
            className="p-2.5 rounded-xl bg-white text-[#EB1F23] hover:bg-[#EB1F23] hover:text-white transition-colors border border-red-200 shadow-xs flex items-center justify-center gap-1.5 text-xs font-bold shrink-0 self-start sm:self-auto w-full sm:w-auto"
            title="Copy IFSC Code"
          >
            {copiedField === 'ifsc' ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Footer Trust Info */}
      <div className="flex items-center gap-2 text-xs text-[#5F5F5F] pt-4 border-t border-slate-100">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Official verified bank account of First Aid Foundation. Tax exempt receipt provided upon request.</span>
      </div>

    </div>
  );
}
