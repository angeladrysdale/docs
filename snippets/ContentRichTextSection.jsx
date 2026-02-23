import React from "react";

export function ContentRichTextSection() {
  const handleCopy = async () => {
    const urlToCopy = "https://example.com";
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(urlToCopy);
        alert("Link copied!");
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = urlToCopy;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Link copied!");
      }
    } catch (e) {
      console.error(e);
      alert("Could not copy link.");
    }
  };

  return (
    <section className="not-prose py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-semibold opacity-80">Published 20 Jan 2025</p>

          {/* Title */}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            UX review presentations
          </h2>

          {/* Lead */}
          <p className="mt-4 text-lg opacity-80">
            How do you create compelling presentations that wow your colleagues and
            impress your managers?
          </p>

          {/* Body */}
          <div className="mt-6 space-y-4 text-base leading-7 opacity-90">
            <p>
              Find out with our in-depth guide on UX presentations. You can customize
              this section to include rich text, lists, and links.
            </p>

            <ul className="list-disc pl-6">
              <li>Structure your narrative</li>
              <li>Use evidence to support decisions</li>
              <li>Design slides for clarity</li>
            </ul>

            <p>
              Want to share this guide with someone? Copy the link below.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold no-underline"
            >
              Learn more
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold"
            >
              Copy link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}