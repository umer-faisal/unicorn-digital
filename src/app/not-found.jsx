export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-neutral-muted text-text-base">
      <h1 className="text-5xl md:text-5xl font-semibold text-brand-dark">404</h1>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6 text-brand-dark">This page has not been generated</h1>
      <p className="mt-4 text-xl md:text-2xl text-text-muted">Tell me what you would like on this page</p>
    </div>
  );
}