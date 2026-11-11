import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BRAND_CONTENT } from '../data/foundationContent';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medical Support / General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedReceipt, setSubmittedReceipt] = useState(null);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (minimum 2 characters).';
    }
    const digits = formData.phone.replace(/\D/g, '');
    if (!digits || digits.length < 10 || digits.length > 15) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please provide at least 10 characters describing your inquiry.';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock client-side success with receipt ID
    const generatedId = `FAF-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    setSubmittedReceipt({
      inquiryId: generatedId,
      name: formData.name.trim(),
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'Medical Support / General Inquiry',
      message: '',
    });
  };

  return (
    <div className="space-y-0">
      <SEOHead
        title="Contact Us — Jalgaon Headquarters & Emergency Helpline"
        description="Get in touch with First Aid Foundation. Headquarters: Near Bombay Bakery, Mehrun, Jalgaon, Maharashtra – 425001. Emergency & Donor Helpline: +91 9970809946 | info@firstaidfoundation.in."
        canonicalPath="/contact"
      />

      {/* Page Hero */}
      <section className="bg-forest-950 text-white py-14 lg:py-22 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5 gsap-hero-group">
            <span className="gsap-hero-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Phone className="w-3.5 h-3.5 text-coral-400" />
              <span>Reach Our Team • Emergency & Inquiries</span>
            </span>
            <h1 className="gsap-hero-item font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {BRAND_CONTENT.contact.heading}
            </h1>
            <p className="gsap-hero-item text-base sm:text-xl text-forest-100 leading-relaxed">
              {BRAND_CONTENT.contact.subheading}
            </p>
          </div>
        </div>
      </section>

      {/* 1. Contact Information Cards */}
      <section className="py-14 sm:py-16 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-card-group">
            
            {/* Headquarters Card */}
            <div className="card-hover-editorial p-5 sm:p-8 rounded-3xl bg-ivory border border-ivory-border shadow-editorial space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900">
                Registered Headquarters
              </h3>
              <p className="text-sm text-navy-700 leading-relaxed">
                {BRAND_CONTENT.contact.address}
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-800">
                Reg. No. F-16650/Jal (Maharashtra)
              </div>
            </div>

            {/* Helpline Card */}
            <div className="card-hover-editorial p-5 sm:p-8 rounded-3xl bg-ivory border border-ivory-border shadow-editorial space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-coral-50 border border-coral-200 text-coral-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900">
                Helpline & WhatsApp
              </h3>
              <p className="text-sm text-navy-700 leading-relaxed">
                Call or WhatsApp our team for urgent hospital patient assistance, admission guidance, and donation receipts.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BRAND_CONTENT.contact.phoneRaw}`}
                  className="font-serif text-lg font-bold text-coral-600 hover:underline"
                >
                  {BRAND_CONTENT.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Email & Coordination Card */}
            <div className="card-hover-editorial p-5 sm:p-8 rounded-3xl bg-ivory border border-ivory-border shadow-editorial space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900">
                Official Email
              </h3>
              <p className="text-sm text-navy-700 leading-relaxed">
                Send official inquiries, partnership proposals, and medical documentation for review.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${BRAND_CONTENT.contact.email}`}
                  className="text-sm font-bold text-teal-800 hover:underline block truncate"
                >
                  {BRAND_CONTENT.contact.email}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Contact Form & Map */}
      <section className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-ivory-border shadow-editorial-lg space-y-6 gsap-fade-up">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200 mb-2">
                  <Send className="w-3.5 h-3.5 text-coral-600" />
                  <span>Send a Message</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                  How Can We Help You?
                </h2>
                <p className="text-xs sm:text-sm text-navy-600 mt-1">
                  Fill out the form below. For immediate medical emergencies, please call our 24/7 helpline directly.
                </p>
              </div>

              {submittedReceipt ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fade-up">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Inquiry Registered Successfully</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Thank you, <strong>{submittedReceipt.name}</strong>. Your message has been received with reference number{' '}
                    <code className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-300 font-bold">
                      {submittedReceipt.inquiryId}
                    </code>
                    . Our coordinator will follow up with you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedReceipt(null)}
                    className="text-xs font-bold text-emerald-700 underline pt-1 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patil"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                          errors.name ? 'border-coral-500 bg-coral-50/30' : 'border-ivory-border bg-ivory focus:bg-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-coral-600 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9970809946"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                          errors.phone ? 'border-coral-500 bg-coral-50/30' : 'border-ivory-border bg-ivory focus:bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-coral-600 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@domain.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                          errors.email ? 'border-coral-500 bg-coral-50/30' : 'border-ivory-border bg-ivory focus:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-coral-600 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Subject / Category
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-border bg-ivory text-sm focus:bg-white transition-colors"
                      >
                        <option value="Medical Support / General Inquiry">Medical Support / General Inquiry</option>
                        <option value="Khandesh House Shelter Inquiry">Khandesh House Shelter Inquiry</option>
                        <option value="Cancer Care Guidance">Cancer Care Guidance</option>
                        <option value="Donation & Receipt Verification">Donation & Receipt Verification</option>
                        <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                      Your Message or Medical Requirement *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe patient status, hospital name, and specific assistance needed..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                        errors.message ? 'border-coral-500 bg-coral-50/30' : 'border-ivory-border bg-ivory focus:bg-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-coral-600 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-base shadow-coral-glow transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Map & Hospital Network Card */}
            <div className="lg:col-span-5 space-y-6 gsap-fade-up">
              
              {/* Google Maps Embed */}
              <div className="bg-white rounded-3xl p-3 border border-ivory-border shadow-editorial-lg overflow-hidden space-y-3">
                <div className="h-72 w-full rounded-2xl overflow-hidden bg-forest-950 relative">
                  <iframe
                    title="First Aid Foundation Headquarters Location in Jalgaon"
                    src={BRAND_CONTENT.contact.mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 text-xs text-navy-700 flex items-center justify-between">
                  <span className="font-semibold">Mehrun, Jalgaon, Maharashtra 425001</span>
                  <a
                    href="https://maps.google.com?q=Mehrun,+Jalgaon,+Maharashtra+425001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral-600 font-bold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Emergency Advisory Box */}
              <div className="p-4 sm:p-6 rounded-3xl bg-forest-900 text-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Clock className="w-4 h-4" />
                  <span>24x7 Emergency Assistance</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Patients Admitted in Mumbai Hospitals
                </h3>
                <p className="text-xs text-forest-100 leading-relaxed">
                  If your family member is currently admitted in Sir J.J. Hospital, Tata Memorial Hospital, or KEM Hospital and requires emergency medicines or patient shelter, please contact our helpline immediately at <strong>+91 9970809946</strong>.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
