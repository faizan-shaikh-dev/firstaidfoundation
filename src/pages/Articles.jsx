import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Eye,
  Filter,
  Search,
  ChevronDown,
  Sparkles,
  Camera,
  Languages,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ARTICLES_DATA } from '../data/articles';
import ArticleQuickModal from '../components/ArticleQuickModal';

export default function Articles() {
  const [globalLang, setGlobalLang] = useState('en'); // 'en' | 'ur'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeModalArticle, setActiveModalArticle] = useState(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set(ARTICLES_DATA.map((a) => a.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered & Search-matched articles (already sorted chronologically in articles.js)
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.titleEn.toLowerCase().includes(q) ||
        article.titleUr.toLowerCase().includes(q) ||
        article.summaryEn.toLowerCase().includes(q) ||
        article.summaryUr.toLowerCase().includes(q) ||
        article.location.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const hasMore = visibleCount < filteredArticles.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const featuredArticle = ARTICLES_DATA[0]; // Allama Iqbal 149th anniversary

  return (
    <div className="space-y-0">
      <SEOHead
        title="Articles, Reports & Community News — First Aid Foundation"
        description="Read official articles, literary symposiums, environmental Tree Bank updates, and hospital welfare milestones from First Aid Foundation Jalgaon. Available in English and Urdu."
        canonicalPath="/articles"
      />

      {/* Page Hero */}
      <section className="bg-forest-950 text-white py-14 lg:py-20 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5 gsap-hero-group">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest gsap-hero-item">
              <BookOpen className="w-3.5 h-3.5 text-coral-400" />
              <span>Foundation News & Official Releases</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight gsap-hero-item">
              Articles, Reports & Heritage Milestones
            </h1>

            <p className="text-base sm:text-xl text-forest-100 leading-relaxed gsap-hero-item">
              Documenting our literary gatherings, grassroots healthcare relief, hospital assistance,
              and humanitarian initiatives across Maharashtra.
            </p>

            {/* Language Preference Switcher */}
            <div className="pt-2 flex items-center gap-3 gsap-hero-item">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                <Languages className="w-4 h-4" />
                <span>Reading Language:</span>
              </span>
              <div className="inline-flex rounded-xl bg-forest-900/90 p-1 border border-forest-700 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setGlobalLang('en')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    globalLang === 'en'
                      ? 'bg-coral-600 text-white'
                      : 'text-forest-200 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setGlobalLang('ur')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-serif ${
                    globalLang === 'ur'
                      ? 'bg-coral-600 text-white'
                      : 'text-forest-200 hover:text-white'
                  }`}
                >
                  اردو (Urdu)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lead Editorial (Allama Iqbal 149th Anniversary) */}
      <section className="py-12 sm:py-16 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-coral-600 bg-coral-50 px-3 py-1 rounded-full border border-coral-200">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Latest Featured Release • 9 November</span>
            </span>
            <span className="text-xs text-navy-600 font-semibold hidden sm:inline-block">
              {globalLang === 'ur' ? featuredArticle.dateDisplayUr : featuredArticle.dateDisplayEn}
            </span>
          </div>

          <div className="bg-ivory rounded-3xl border border-ivory-border shadow-editorial-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 card-hover-editorial">
            
            {/* Left 4-Image Collage Showcase */}
            <div className="lg:col-span-6 bg-forest-950 p-4 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-forest-900">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.titleEn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-coral-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  4 Photographs Attached
                </span>
              </div>

              {/* Four Photo Strip */}
              <div className="grid grid-cols-4 gap-2">
                {featuredArticle.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-xl overflow-hidden border border-forest-800 bg-forest-900"
                  >
                    <img
                      src={img.url}
                      alt={`Iqbal Day Photograph ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Editorial Text & Actions */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-forest-900 text-white text-[11px] font-bold uppercase tracking-wider">
                    {globalLang === 'ur' ? featuredArticle.categoryUrdu : featuredArticle.category}
                  </span>
                  <span className="text-xs text-teal-800 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-coral-600" />
                    <span>{globalLang === 'ur' ? featuredArticle.locationUrdu : featuredArticle.location}</span>
                  </span>
                </div>

                <h2
                  className={`font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-navy-900 leading-snug ${
                    globalLang === 'ur' ? 'font-serif text-right leading-loose text-2xl sm:text-3xl' : ''
                  }`}
                  dir={globalLang === 'ur' ? 'rtl' : 'ltr'}
                >
                  {globalLang === 'ur' ? featuredArticle.titleUr : featuredArticle.titleEn}
                </h2>

                <p
                  className={`text-sm sm:text-base text-navy-700 leading-relaxed ${
                    globalLang === 'ur' ? 'text-right font-serif text-base sm:text-lg leading-loose' : ''
                  }`}
                  dir={globalLang === 'ur' ? 'rtl' : 'ltr'}
                >
                  {globalLang === 'ur' ? featuredArticle.summaryUr : featuredArticle.summaryEn}
                </p>

                {/* Key Attendees snippet */}
                <div className="pt-2 border-t border-ivory-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-600 block mb-1.5">
                    {globalLang === 'ur' ? 'خصوصی شرکت:' : 'Distinguished Presence:'}
                  </span>
                  <p className="text-xs text-navy-800 leading-relaxed">
                    Janab Shakil Ahmed (President), Janab Waseem Choudhary, Janab Irfan Shaheen, Janab Waqar Badliwala & Dignitaries.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-ivory-border flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalArticle(featuredArticle)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-coral-400" />
                  <span>{globalLang === 'ur' ? 'فوری مطالعہ (Modal)' : 'Quick View Article'}</span>
                </button>

                <Link
                  to={`/articles/${featuredArticle.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coral-600 hover:bg-coral-700 text-white text-xs font-bold transition-colors shadow-coral-glow"
                >
                  <span>{globalLang === 'ur' ? 'مکمل مضمون دیکھیں →' : 'Read Dedicated Page'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-6 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-navy-600 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(4);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-forest-900 text-white shadow-xs'
                      : 'bg-white text-navy-700 border border-ivory-border hover:bg-forest-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-navy-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(4);
                }}
                placeholder="Search articles & reports..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-ivory-border text-xs text-navy-900 focus:outline-none focus:border-coral-500 transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Chronological Articles Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex items-center justify-between border-b border-ivory-border pb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                All Field Reports & Historical Articles
              </h2>
              <p className="text-xs sm:text-sm text-navy-600 mt-0.5">
                Showing {displayedArticles.length} of {filteredArticles.length} records sorted chronologically
              </p>
            </div>
          </div>

          {/* Grid */}
          {displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gsap-card-group">
              {displayedArticles.map((article) => (
                <article
                  key={article.id}
                  className="card-hover-editorial bg-ivory rounded-3xl overflow-hidden border border-ivory-border shadow-editorial flex flex-col justify-between"
                >
                  <div>
                    {/* Lazy-loaded cover image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                      <img
                        src={article.coverImage}
                        alt={article.titleEn}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 bg-forest-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {globalLang === 'ur' ? article.categoryUrdu : article.category}
                      </span>
                      <span className="absolute bottom-2.5 right-3 text-ivory text-[11px] font-semibold flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-coral-400" />
                        <span>{globalLang === 'ur' ? article.dateDisplayUr : article.dateDisplayEn}</span>
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-navy-500">
                        <span className="inline-flex items-center gap-1 font-medium text-teal-800">
                          <MapPin className="w-3.5 h-3.5 text-coral-600" />
                          <span>{globalLang === 'ur' ? article.locationUrdu : article.location}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-lg sm:text-xl font-bold text-navy-900 leading-snug line-clamp-2 ${
                          globalLang === 'ur' ? 'font-serif text-right text-lg sm:text-xl leading-relaxed' : ''
                        }`}
                        dir={globalLang === 'ur' ? 'rtl' : 'ltr'}
                      >
                        {globalLang === 'ur' ? article.titleUr : article.titleEn}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm text-navy-700 leading-relaxed line-clamp-3 ${
                          globalLang === 'ur' ? 'text-right font-serif text-sm sm:text-base leading-loose' : ''
                        }`}
                        dir={globalLang === 'ur' ? 'rtl' : 'ltr'}
                      >
                        {globalLang === 'ur' ? article.summaryUr : article.summaryEn}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-ivory-border/70 mt-2 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalArticle(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 hover:text-coral-600 transition-colors cursor-pointer py-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-coral-600" />
                      <span>{globalLang === 'ur' ? 'فوری نظارہ' : 'Quick Read'}</span>
                    </button>

                    <Link
                      to={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-coral-600 hover:text-coral-700 transition-colors py-1.5"
                    >
                      <span>{globalLang === 'ur' ? 'تفصیل →' : 'Read Article →'}</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-ivory rounded-3xl border border-ivory-border space-y-3">
              <BookOpen className="w-8 h-8 text-navy-400 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-navy-900">No articles matched your criteria</h3>
              <p className="text-xs text-navy-600">Try adjusting your search terms or category filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-coral-600 underline pt-1 cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Show More Button (Lazy Load Pagination) */}
          {hasMore && (
            <div className="pt-8 text-center">
              <button
                type="button"
                onClick={handleShowMore}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-editorial transition-all cursor-pointer"
              >
                <span>Show More Articles</span>
                <ChevronDown className="w-4 h-4 text-coral-400" />
              </button>
              <p className="text-xs text-navy-500 mt-2">
                Displaying {displayedArticles.length} of {filteredArticles.length} articles
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Quick Modal View */}
      <ArticleQuickModal
        article={activeModalArticle}
        isOpen={Boolean(activeModalArticle)}
        onClose={() => setActiveModalArticle(null)}
      />

    </div>
  );
}

