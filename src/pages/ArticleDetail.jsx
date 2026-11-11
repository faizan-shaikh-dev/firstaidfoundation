import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Phone,
  Building2,
  Languages,
  BookOpen,
  Eye,
  Heart,
  Quote,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ARTICLES_DATA } from '../data/articles';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [readingMode, setReadingMode] = useState('en'); // 'en' | 'ur' | 'both'
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const article = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.slug === slug);
  }, [slug]);

  const relatedArticles = useMemo(() => {
    return ARTICLES_DATA.filter((a) => a.slug !== slug).slice(0, 3);
  }, [slug]);

  if (!article) {
    return (
      <div className="py-24 max-w-3xl mx-auto px-4 text-center space-y-6">
        <SEOHead title="Article Not Found — First Aid Foundation" />
        <BookOpen className="w-16 h-16 text-navy-400 mx-auto" />
        <h1 className="font-serif text-3xl font-bold text-navy-900">
          Article Not Found
        </h1>
        <p className="text-sm text-navy-600">
          The requested article may have been relocated or renamed.
        </p>
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-900 text-white font-bold text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>
    );
  }

  const images = article.images || [{ url: article.coverImage, captionEn: '', captionUr: '' }];
  const currentImage = images[activeImageIdx] || images[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `${article.titleEn}\n\nRead on First Aid Foundation:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0">
      <SEOHead
        title={`${article.titleEn} — First Aid Foundation`}
        description={article.summaryEn}
        canonicalPath={`/articles/${article.slug}`}
      />

      {/* Header & Breadcrumb */}
      <section className="bg-forest-950 text-white py-12 lg:py-16 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles & Reports</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-forest-900/60 border border-forest-800 text-forest-200 text-xs font-medium">
                {article.dateDisplayEn}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.titleEn}
            </h1>

            {article.titleUr && (
              <p
                className="font-serif text-lg sm:text-2xl text-emerald-200/90 leading-loose text-right pt-1"
                dir="rtl"
              >
                {article.titleUr}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-forest-200 pt-3 border-t border-forest-800/80">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-coral-400" />
                <span>{article.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-coral-400" />
                <span>{article.readTime}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{article.officialNotice.regNo}</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10">

          {/* Reading Mode Switcher & Share Toolbar */}
          <div className="p-4 rounded-2xl bg-ivory border border-ivory-border flex flex-wrap items-center justify-between gap-4">
            
            {/* Language Selection Tabs */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-navy-600 flex items-center gap-1.5 mr-1">
                <Languages className="w-4 h-4 text-forest-800" />
                <span>Language:</span>
              </span>
              <div className="inline-flex rounded-xl bg-white p-1 border border-ivory-border text-xs font-bold shadow-2xs">
                <button
                  type="button"
                  onClick={() => setReadingMode('en')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    readingMode === 'en'
                      ? 'bg-forest-900 text-white'
                      : 'text-navy-700 hover:text-navy-900'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setReadingMode('ur')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-serif ${
                    readingMode === 'ur'
                      ? 'bg-forest-900 text-white'
                      : 'text-navy-700 hover:text-navy-900'
                  }`}
                >
                  اردو (Original)
                </button>
                <button
                  type="button"
                  onClick={() => setReadingMode('both')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer hidden sm:inline-block ${
                    readingMode === 'both'
                      ? 'bg-forest-900 text-white'
                      : 'text-navy-700 hover:text-navy-900'
                  }`}
                >
                  Side-by-Side (Bilingual)
                </button>
              </div>
            </div>

            {/* Sharing buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-forest-50 border border-ivory-border text-navy-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-coral-600" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Interactive Photo Showcase Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-forest-950 aspect-[16/10] sm:aspect-[16/9] w-full border border-ivory-border shadow-editorial-lg group">
              <img
                src={currentImage.url}
                alt={currentImage.captionEn}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setLightboxOpen(true)}
                loading="lazy"
              />

              {/* Prev / Next overlay arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                    }}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/75 hover:bg-navy-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/75 hover:bg-navy-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <span className="absolute bottom-4 right-4 bg-navy-950/85 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    Photo {activeImageIdx + 1} of {images.length}
                  </span>
                </>
              )}

              {/* Click to expand pill */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/85 text-white text-xs font-semibold cursor-pointer hover:bg-navy-950 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-coral-400" />
                <span>Click to Fullscreen</span>
              </button>
            </div>

            {/* Captions in English and Urdu */}
            <div className="p-4 rounded-2xl bg-ivory border border-ivory-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-navy-700">
              <span className="font-medium">{currentImage.captionEn}</span>
              {currentImage.captionUr && (
                <span className="font-serif text-teal-900 font-semibold" dir="rtl">
                  {currentImage.captionUr}
                </span>
              )}
            </div>

            {/* Thumbnail selector strip */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-3 pt-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIdx === idx
                        ? 'border-coral-600 scale-[1.02] shadow-editorial'
                        : 'border-ivory-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-1 right-1 bg-navy-950/80 text-white text-[10px] font-bold px-1.5 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Article Editorial Body */}
          {readingMode === 'both' ? (
            /* Side-by-Side Dual View */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              
              {/* English Column */}
              <div className="space-y-5 border-r lg:border-ivory-border lg:pr-8">
                <span className="px-3 py-1 rounded-full bg-forest-900 text-white text-xs font-bold uppercase tracking-wider inline-block">
                  English Editorial
                </span>
                <div className="space-y-4 text-navy-800 leading-relaxed text-sm sm:text-base">
                  {article.paragraphsEn.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Urdu Column */}
              <div className="space-y-5 lg:pl-2 text-right" dir="rtl">
                <span className="px-3 py-1 rounded-full bg-coral-600 text-white text-xs font-bold uppercase tracking-wider inline-block">
                  اردو متن (اصل)
                </span>
                <div className="space-y-5 font-serif text-navy-900 leading-loose text-base sm:text-lg">
                  {article.paragraphsUr.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Single Column View (English or Urdu) */
            <div
              className={`max-w-3xl mx-auto space-y-6 pt-4 ${
                readingMode === 'ur'
                  ? 'text-right font-serif text-lg sm:text-xl leading-loose text-navy-900'
                  : 'text-left text-navy-800 text-base sm:text-lg leading-relaxed'
              }`}
              dir={readingMode === 'ur' ? 'rtl' : 'ltr'}
            >
              {(readingMode === 'ur' ? article.paragraphsUr : article.paragraphsEn).map(
                (para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                )
              )}
            </div>
          )}

          {/* Highlighted Couplets / Quotes */}
          {article.quotes && article.quotes.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-forest-900 text-white border border-forest-700 shadow-editorial space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Quote className="w-4 h-4 text-coral-400" />
                <span>Reflective Poetry / کلامِ اقبال</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.quotes.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-forest-950/80 border border-forest-800 space-y-2 text-right"
                    dir="rtl"
                  >
                    <p className="font-serif text-lg sm:text-xl italic text-white leading-loose">
                      “{q.text}”
                    </p>
                    <span className="text-xs font-semibold text-coral-300 block">
                      — {q.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dignitaries & Attendees Section */}
          {article.dignitaries && article.dignitaries.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-ivory border border-ivory-border shadow-editorial space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                {readingMode === 'ur' ? 'معزز مہمانان و شرکاء' : 'Dignitaries & Key Participants'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {article.dignitaries.map((person, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-ivory-border flex items-center gap-3 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-forest-50 text-forest-800 font-bold flex items-center justify-center shrink-0">
                      {person.name[0]}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-navy-900">
                        {person.name}
                      </h4>
                      <p className="text-xs text-navy-600">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Foundation Verification Banner (Matching User Prompt) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-forest-950 text-white border border-forest-800 shadow-editorial space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-forest-800 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="First Aid Foundation Logo"
                  className="w-10 h-10 object-contain bg-white p-1 rounded-xl"
                />
                <div>
                  <h4 className="font-serif font-bold text-base text-white">
                    {article.officialNotice.organization}
                  </h4>
                  <span className="text-xs text-emerald-300 font-medium">
                    {article.officialNotice.regNo}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 text-xs font-bold text-coral-400 border border-forest-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Release</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-forest-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-coral-400 shrink-0 mt-0.5" />
                <span>{article.officialNotice.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <a
                  href={`tel:${article.officialNotice.helpline.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors font-semibold"
                >
                  Official Helpline: {article.officialNotice.helpline}
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles Strip */}
          {relatedArticles.length > 0 && (
            <div className="pt-10 border-t border-ivory-border space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  More Articles & Field Reports
                </h3>
                <Link
                  to="/articles"
                  className="text-xs font-bold text-coral-600 hover:underline"
                >
                  View All ({ARTICLES_DATA.length}) →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/articles/${rel.slug}`}
                    className="group bg-ivory rounded-2xl p-4 border border-ivory-border shadow-2xs hover:shadow-editorial hover:border-forest-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-forest-950">
                        <img
                          src={rel.coverImage}
                          alt={rel.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block">
                        {rel.category} • {rel.dateDisplayEn}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-navy-900 leading-snug line-clamp-2 group-hover:text-coral-600 transition-colors">
                        {rel.titleEn}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-coral-600 pt-3 mt-3 border-t border-ivory-border/70 block">
                      Read Report →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-coral-400 p-2 rounded-full bg-white/10 transition-colors cursor-pointer"
            aria-label="Close fullscreen"
          >
            ✕
          </button>
          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center space-y-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage.url}
              alt={currentImage.captionEn}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <p className="text-xs text-forest-200 text-center max-w-2xl px-2">
              {currentImage.captionEn}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

