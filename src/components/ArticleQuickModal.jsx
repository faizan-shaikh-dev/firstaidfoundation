import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Languages,
  ShieldCheck,
  Share2,
  Check,
} from 'lucide-react';

export default function ArticleQuickModal({ article, isOpen, onClose }) {
  const [lang, setLang] = useState('en'); // 'en' | 'ur'
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveImageIdx(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const images = article.images || [{ url: article.coverImage, captionEn: '', captionUr: '' }];
  const currentImage = images[activeImageIdx] || images[0];

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}/articles/${article.slug}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-navy-950/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-ivory-border overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-ivory-border flex items-center justify-between gap-3 bg-ivory">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-forest-900 text-white text-xs font-bold uppercase tracking-wider">
              {lang === 'ur' ? article.categoryUrdu : article.category}
            </span>
            <span className="hidden xs:inline-flex items-center gap-1 text-xs text-navy-600 font-medium">
              <Calendar className="w-3.5 h-3.5 text-coral-600" />
              <span>{lang === 'ur' ? article.dateDisplayUr : article.dateDisplayEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="inline-flex rounded-xl bg-white p-1 border border-ivory-border text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-forest-900 text-white'
                    : 'text-navy-700 hover:text-navy-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('ur')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  lang === 'ur'
                    ? 'bg-forest-900 text-white'
                    : 'text-navy-700 hover:text-navy-900'
                }`}
              >
                اردو
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white hover:bg-forest-50 text-navy-700 hover:text-navy-900 border border-ivory-border flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Title & Metadata */}
          <div className="space-y-3">
            <h2
              id="quick-modal-title"
              className={`font-serif text-2xl sm:text-3xl font-bold text-navy-900 leading-snug ${
                lang === 'ur' ? 'font-serif text-right leading-loose' : ''
              }`}
              dir={lang === 'ur' ? 'rtl' : 'ltr'}
            >
              {lang === 'ur' ? article.titleUr : article.titleEn}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-navy-600 border-b border-ivory-border pb-4">
              <span className="inline-flex items-center gap-1 font-semibold text-teal-800">
                <MapPin className="w-3.5 h-3.5 text-coral-600" />
                <span>{lang === 'ur' ? article.locationUrdu : article.location}</span>
              </span>
              <span className="inline-flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-navy-500" />
                <span>{article.readTime}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>First Aid Foundation Official Release</span>
              </span>
            </div>
          </div>

          {/* Interactive Image Gallery */}
          <div className="space-y-2.5">
            <div className="relative rounded-2xl overflow-hidden bg-forest-950 aspect-video max-h-[380px] w-full">
              <img
                src={currentImage.url}
                alt={lang === 'ur' ? currentImage.captionUr : currentImage.captionEn}
                className="w-full h-full object-cover object-center transition-all duration-300"
                loading="lazy"
              />

              {/* Navigation arrows if multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="absolute bottom-3 right-3 bg-navy-950/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {activeImageIdx + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {/* Image Caption */}
            {currentImage && (
              <p
                className={`text-xs text-navy-600 italic px-1 ${
                  lang === 'ur' ? 'text-right' : ''
                }`}
                dir={lang === 'ur' ? 'rtl' : 'ltr'}
              >
                {lang === 'ur' ? currentImage.captionUr : currentImage.captionEn}
              </p>
            )}

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      activeImageIdx === idx
                        ? 'border-coral-600 scale-105'
                        : 'border-ivory-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Full Paragraphs */}
          <div
            className={`space-y-4 text-navy-800 leading-relaxed text-sm sm:text-base ${
              lang === 'ur' ? 'text-right font-serif text-base sm:text-lg leading-loose' : ''
            }`}
            dir={lang === 'ur' ? 'rtl' : 'ltr'}
          >
            {(lang === 'ur' ? article.paragraphsUr : article.paragraphsEn).map(
              (paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              )
            )}
          </div>

          {/* Key Quotes if any */}
          {article.quotes && article.quotes.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-50 border-l-4 border-forest-800 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
                {lang === 'ur' ? 'منتخب کلام' : 'Highlighted Verse / Quote'}
              </span>
              {article.quotes.map((q, idx) => (
                <blockquote
                  key={idx}
                  className={`font-serif italic text-navy-900 text-sm sm:text-base ${
                    lang === 'ur' ? 'text-right' : ''
                  }`}
                  dir={lang === 'ur' ? 'rtl' : 'ltr'}
                >
                  “{q.text}”
                </blockquote>
              ))}
            </div>
          )}

          {/* Dignitaries List */}
          {article.dignitaries && article.dignitaries.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-ivory border border-ivory-border space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                {lang === 'ur' ? 'معزز شرکاء و اراکین' : 'Dignitaries & Key Attendees'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-navy-800">
                {article.dignitaries.map((person, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-coral-500 shrink-0" />
                    <span>
                      <strong>{person.name}</strong> ({person.role})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Registration Notice */}
          <div className="p-4 rounded-xl bg-forest-950 text-forest-100 text-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-coral-400" />
              <span>{article.officialNotice.organization}</span>
            </div>
            <p className="text-forest-200">{article.officialNotice.regNo}</p>
            <p className="text-forest-200">
              {article.officialNotice.address} • Helpline: {article.officialNotice.helpline}
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 border-t border-ivory-border bg-ivory flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-forest-50 border border-ivory-border text-navy-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-coral-600" />
                <span>Share Article</span>
              </>
            )}
          </button>

          <Link
            to={`/articles/${article.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white text-xs font-bold transition-colors shadow-coral-glow"
          >
            <span>View Dedicated Article Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

