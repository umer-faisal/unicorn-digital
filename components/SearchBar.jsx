
'use client';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <style jsx>{`
        .search-container {
          max-width: 42rem;
          margin: 0 auto 2rem;
        }
        
        .search-wrapper {
          position: relative;
        }
        
        .search-icon {
          position: absolute;
          top: 50%;
          left: 0.75rem;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 1.125rem;
          pointer-events: none;
        }
        
        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          color: #ffffff;
          font-size: 0.875rem;
          transition: border-color 0.2s;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }
        
        .search-input::placeholder {
          color: #9ca3af;
        }
      `}</style>
      
      <div className="search-container">
        <div className="search-wrapper">
          <div className="search-icon">
            <i className="ri-search-line"></i>
          </div>
          <input
            type="text"
            placeholder="Search digital services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </>
  );
}
