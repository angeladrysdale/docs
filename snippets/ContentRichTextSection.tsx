export function ContentRichTextSection() {
  return (
    <section className="not-prose py-16">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold">Published 20 Jan 2025</p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          UX review presentations
        </h2>

        <p className="mt-4 text-lg opacity-80">
          How do you create compelling presentations that wow your colleagues and impress your managers?
        </p>

        <p className="mt-4">
          Find out with our in-depth guide on UX presentations.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold border"
            href="#"
          >
            Learn more
          </a>

          <button
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold border"
            onClick={() => navigator.clipboard?.writeText?.("https://your-link-here")}
            type="button"
          >
            Copy link
          </button>
        </div>
      </div>
    </section>
  );
}