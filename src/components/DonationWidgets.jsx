import { useState } from 'react';
import {
  Building2,
  Copy,
  Check,
  AlertTriangle,
  QrCode,
  ShieldCheck,
  Phone,
  Mail,
  Heart,
} from 'lucide-react';
import { BANK_DETAILS, BRAND_CONTENT } from '../data/foundationContent';

export function BankTransferCard() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);
      setTimeout(() => setCopiedField(null), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedField(key);
      setTimeout(() => setCopiedField(null), 2400);
    }
  };

  return (
    <div
      id="bank-transfer"
      className="bg-white rounded-3xl border border-ivory-border shadow-editorial p-4 sm:p-6 lg:p-8 relative overflow-hidden"
    >
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-forest-800" />

      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ivory-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-teal-700 block">
              Direct Institutional Remittance
            </span>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-navy-900">
              Bank Transfer (NEFT / RTGS / IMPS)
            </h3>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-900 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
          <span>Zero Commission</span>
        </span>
      </div>

      {/* Bank Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-5 sm:my-6">
        
        {/* Account Name */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-ivory border border-ivory-border flex items-center justify-between gap-2.5">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy-600 block">
              Account Holder Name
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-navy-900 block mt-0.5 truncate">
              {BANK_DETAILS.accountName}
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(BANK_DETAILS.accountName, 'accountName')}
            aria-label="Copy Account Holder Name"
            className="p-2 rounded-lg bg-white border border-ivory-border hover:bg-forest-50 text-navy-700 hover:text-forest-900 transition-colors shrink-0 cursor-pointer"
          >
            {copiedField === 'accountName' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Bank Name */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-ivory border border-ivory-border flex items-center justify-between gap-2.5">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy-600 block">
              Bank Name
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-bold text-navy-900 block mt-0.5 truncate">
              {BANK_DETAILS.bankName}
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(BANK_DETAILS.bankName, 'bankName')}
            aria-label="Copy Bank Name"
            className="p-2 rounded-lg bg-white border border-ivory-border hover:bg-forest-50 text-navy-700 hover:text-forest-900 transition-colors shrink-0 cursor-pointer"
          >
            {copiedField === 'bankName' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Account Number */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-ivory border border-ivory-border flex items-center justify-between gap-2.5">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy-600 block">
              Account Number
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-mono font-bold text-forest-900 block mt-0.5 tracking-wider truncate">
              {BANK_DETAILS.accountNumber}
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'accountNumber')}
            aria-label="Copy Account Number"
            className="p-2 rounded-lg bg-white border border-ivory-border hover:bg-forest-50 text-navy-700 hover:text-forest-900 transition-colors shrink-0 cursor-pointer"
          >
            {copiedField === 'accountNumber' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* IFSC Code */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-ivory border border-ivory-border flex items-center justify-between gap-2.5">
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-navy-600 block">
              IFSC Code
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-mono font-bold text-forest-900 block mt-0.5 tracking-wider truncate">
              {BANK_DETAILS.ifscCode}
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(BANK_DETAILS.ifscCode, 'ifscCode')}
            aria-label="Copy IFSC Code"
            className="p-2 rounded-lg bg-white border border-ivory-border hover:bg-forest-50 text-navy-700 hover:text-forest-900 transition-colors shrink-0 cursor-pointer"
          >
            {copiedField === 'ifscCode' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>

      {/* Verification Notice */}
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed mb-6">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-0.5">Verification Advisory:</span>
          <span>{BANK_DETAILS.branchNote}</span>
        </div>
      </div>

      {/* Receipt Request Instructions */}
      <div className="pt-5 border-t border-ivory-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-navy-700">
        <div className="space-y-1">
          <span className="font-bold text-navy-900 block">To Request Your Official Donation Receipt:</span>
          <p className="text-navy-600">
            Please WhatsApp or email your transaction screenshot, donor name, and PAN card details.
          </p>
        </div>

        <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          <a
            href={`tel:${BRAND_CONTENT.contact.phoneRaw}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-ivory hover:bg-ivory-warm border border-ivory-border font-semibold text-navy-800 transition-colors text-xs truncate"
          >
            <Phone className="w-3.5 h-3.5 text-coral-600 shrink-0" />
            <span className="truncate">{BRAND_CONTENT.contact.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${BRAND_CONTENT.contact.email}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-ivory hover:bg-ivory-warm border border-ivory-border font-semibold text-navy-800 transition-colors text-xs truncate max-w-full"
          >
            <Mail className="w-3.5 h-3.5 text-coral-600 shrink-0" />
            <span className="truncate">{BRAND_CONTENT.contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function UpiQrCard() {
  const [copiedUpi, setCopiedUpi] = useState(false);

  const handleCopyUpi = async (upi) => {
    try {
      await navigator.clipboard.writeText(upi);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = upi;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2400);
    }
  };

  return (
    <div
      id="upi-donation"
      className="bg-white rounded-3xl border border-ivory-border shadow-editorial p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full space-y-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-coral-600" />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-ivory-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-coral-50 border border-coral-200 text-coral-600 flex items-center justify-center shrink-0">
              <QrCode className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-coral-700 block">
                Instant Mobile Remittance
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-navy-900">
                Official UPI QR Code
              </h3>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified</span>
          </span>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-ivory border border-ivory-border space-y-4">
          <div className="w-44 h-44 xs:w-52 xs:h-52 sm:w-60 sm:h-60 max-w-full aspect-square rounded-2xl bg-white p-2.5 sm:p-3 border-2 border-dashed border-forest-300 shadow-sm flex items-center justify-center overflow-hidden mx-auto">
            <img
              src="/images/qr-scanner.png"
              alt="First Aid Foundation Official UPI QR Code for instant donations"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 block">
              Scan & Pay With Any UPI App
            </span>
            <p className="text-[11px] sm:text-xs text-navy-600">
              Google Pay • PhonePe • Paytm • BHIM • Amazon Pay
            </p>
          </div>

          {/* Copy UPI ID */}
          <div className="w-full pt-2">
            <div className="p-3 rounded-xl bg-white border border-ivory-border flex items-center justify-between gap-2 shadow-2xs">
              <div className="min-w-0 text-left">
                <span className="text-[10px] uppercase font-bold text-navy-400 block">
                  Official UPI ID
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-forest-900 truncate block">
                  {BANK_DETAILS.upiId}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopyUpi(BANK_DETAILS.upiId)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 rounded-lg bg-coral-50 hover:bg-coral-100 text-coral-700 font-bold text-xs transition-colors shrink-0 cursor-pointer"
              >
                {copiedUpi ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-forest-900 text-white space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
          <Heart className="w-3.5 h-3.5 fill-current text-coral-400" />
          <span>Every Rupee Directly Supports Patients</span>
        </div>
        <p className="text-xs text-forest-100 leading-relaxed">
          First Aid Foundation utilizes contributions strictly for patient medicine relief, cancer packages, and the Khandesh House shelter.
        </p>
      </div>
    </div>
  );
}
