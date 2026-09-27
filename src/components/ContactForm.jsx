import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Phone, and Message).');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-10 shadow-xl border border-slate-100 relative">
      
      <h3 className="text-2xl font-bold text-[#184E82] mb-2">Send Us a Message</h3>
      <p className="text-sm text-[#5F5F5F] mb-6">
        Fill out the form below and our team will get in touch with you shortly.
      </p>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">Thank You for Contacting Us!</h4>
          <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
            Your message details have been submitted. For immediate urgent medical assistance, please call our direct line: <span className="font-bold">+91 9970809946</span>.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            }}
            className="text-xs font-bold text-emerald-800 underline hover:text-emerald-900 pt-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-[#EB1F23] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#184E82] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#184E82] focus:ring-2 focus:ring-blue-100 outline-none text-sm text-[#334155] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#184E82] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#184E82] focus:ring-2 focus:ring-blue-100 outline-none text-sm text-[#334155] transition-colors"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#184E82] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#184E82] focus:ring-2 focus:ring-blue-100 outline-none text-sm text-[#334155] transition-colors"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#184E82] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Medical support / Inquiry / Donation"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#184E82] focus:ring-2 focus:ring-blue-100 outline-none text-sm text-[#334155] transition-colors"
              />
            </div>

          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#184E82] mb-2">
              Message / Inquiry Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can First Aid Foundation assist you?"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#184E82] focus:ring-2 focus:ring-blue-100 outline-none text-sm text-[#334155] transition-colors resize-y"
            />
          </div>

          <Button type="submit" variant="secondary" size="lg" icon={Send} className="w-full sm:w-auto">
            Submit Inquiry
          </Button>

        </form>
      )}

    </div>
  );
}
