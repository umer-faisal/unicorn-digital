
'use client';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-brand-primary text-lg pointer-events-none">
            <i className="ri-search-line"></i>
          </div>
          <input
            type="text"
            placeholder="Search digital services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-brand-soft rounded-md text-text-base text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 placeholder-text-muted"
          />
        </div>
      </div>
    </>
  );
}
