
'use client';

export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { id: 'all', name: 'All Services', icon: 'ri-apps-line' },
    { id: 'development', name: 'Development', icon: 'ri-code-line' },
    { id: 'design', name: 'Design', icon: 'ri-palette-line' },
    { id: 'marketing', name: 'Marketing', icon: 'ri-megaphone-line' },
    // { id: 'marketing', name: 'Analytics', icon: 'ri-bar-chart-line' },
    // { id: 'cloud', name: 'Cloud', icon: 'ri-cloud-line' },
    // { id: 'security', name: 'Security', icon: 'ri-shield-line' }
  ];

  return (
    <>
      <style jsx>{`
        .category-filter {
          margin-bottom: 2rem;
        }
        
        .category-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        
        .category-btn {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          white-space: nowrap;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }
        
        .category-btn.active {
          background-color: #2563eb;
          color: #ffffff;
        }
        
        .category-btn:not(.active) {
          background-color: #1f2937;
          color: #d1d5db;
        }
        
        .category-btn:not(.active):hover {
          background-color: #374151;
        }
        
        .category-icon {
          font-size: 0.875rem;
        }
      `}</style>
      
      <div className="category-filter">
        <div className="category-wrapper">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <i className={`${category.icon} category-icon`}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
