import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const SERVICES_SECTIONS = {
  'web-development': {
    title: 'Web Development',
    intro:
      'Custom websites, WordPress solutions, e‑commerce stores, and AI-powered experiences built for performance and conversions.',
    items: [
      'Custom Website Design',
      'WordPress Development',
      'E‑Commerce Development',
      'Website Redesign',
      'Website Maintenance',
      'AI‑Powered Websites & Smart Forms',
    ],
  },
  'seo-services': {
    title: 'SEO Services',
    intro:
      'End‑to‑end SEO services to grow your organic visibility, traffic, and qualified leads.',
    items: [
      'Local SEO',
      'National SEO',
      'Technical SEO',
      'On‑Page SEO',
      'SEO Audits',
      'Link Building',
      'AI SEO Optimization & Content Automation',
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    intro:
      'Performance‑driven campaigns across paid channels to acquire and nurture customers.',
    items: [
      'Google Ads (PPC)',
      'Facebook & Instagram Ads',
      'Conversion Optimization (CRO)',
      'Lead Generation',
      'Email Marketing',
      'AI Marketing & Funnel Automation',
    ],
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    intro:
      'Full‑funnel social media strategy, content, and paid campaigns to grow your brand.',
    items: [
      'Social Media Management',
      'Content Creation',
      'Paid Social Ads',
      'Brand Growth Strategy',
    ],
  },
  'ai-services': {
    title: 'AI Services',
    intro:
      'Automation, chatbots, and custom AI solutions tailored to your workflows and customers.',
    items: ['AI Automation', 'AI Chatbots', 'Custom AI Solutions'],
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_SECTIONS).map((slug) => ({ slug }));
}

export default async function ServiceSlugPage({ params }) {
  const resolvedParams = await params;
  const section = SERVICES_SECTIONS[resolvedParams.slug];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      {/* We keep this as a server component so we can pre-generate slugs,
          but Header/Footer themselves are marked as 'use client' internally. */}
      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {section ? section.title : 'Services'}
            </h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              {section
                ? section.intro
                : 'Discover our tailored digital services designed to grow your business.'}
            </p>
          </div>
        </section>

        {/* Details */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            {section ? (
              <div className="max-w-4xl mx-auto bg-neutral-muted rounded-lg p-8 md:p-12 border border-brand-soft">
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  What&apos;s included
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 bg-white rounded-lg p-4 border border-neutral-muted"
                    >
                      <i className="ri-checkbox-circle-line text-brand-primary text-xl mt-1" />
                      <span className="text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto bg-neutral-muted rounded-lg p-8 border border-brand-soft text-center">
                <p className="text-text-muted">
                  This service section could not be found. Please go back to the services page
                  and choose a valid category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll recommend the right services for
              your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap"
            >
              Talk to our team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


