// snippets/ContentRichTextSection.jsx
import React from "react";
function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCopy(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 9h10v10H9V9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLink(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.1l.9-3H13V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 9H3v12h3V9ZM4.5 3.5A1.75 1.75 0 1 0 4.5 7a1.75 1.75 0 0 0 0-3.5Z"
        fill="currentColor"
      />
      <path
        d="M10 9H7v12h3v-6.2c0-1.7.4-3.1 2.4-3.1 2 0 2 1.8 2 3.2V21h3v-6.7c0-3.3-.7-5.8-4.6-5.8-1.9 0-3.1 1-3.6 1.9H10V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-secondary px-3 py-1 text-sm font-medium text-primary">
      {children}
    </span>
  );
}

function Button({
  children,
  onClick,
  className = "",
  iconLeading: Icon,
  ariaLabel,
  href,
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md border border-secondary bg-transparent px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary/60";
  const iconClass = "size-4";

  const content = (
    <>
      {Icon ? <Icon className={iconClass} /> : null}
      {children ? <span>{children}</span> : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={`${base} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${className}`}
    >
      {content}
    </button>
  );
}

export function ContentRichTextSection() {
  const [copied, setCopied] = React.useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
      // Fallback: at least don't crash rendering
      setCopied(false);
    }
  };

  return (
    <div className="bg-primary not-prose">
      <div className="mx-auto max-w-container px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <span className="text-sm font-semibold text-brand-secondary md:text-md">
              Published 20 Jan 2025
            </span>
            <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
              UX review presentations
            </h1>
            <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
              How do you create compelling presentations that wow your colleagues
              and impress your managers?{" "}
              <span className="max-md:hidden">
                Find out with our in-depth guide on UX presentations.
              </span>
            </p>
          </div>

          <div className="mt-8 flex gap-2">
            <Badge>Design</Badge>
            <Badge>Research</Badge>
            <Badge>Presentation</Badge>
          </div>

          <div className="mt-8 flex items-center gap-4 md:hidden">
            <img
              src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
              className="size-14 rounded-full object-cover"
              alt="Olivia Rhye"
            />
            <div>
              <p className="text-lg font-semibold text-primary">Olivia Rhye</p>
              <p className="text-md text-tertiary">20 Jan 2025</p>
            </div>
          </div>
        </div>

        <img
          className="mt-12 h-60 w-full object-cover md:mt-16 md:h-160"
          src="https://www.untitledui.com/marketing/smiling-girl-5.webp"
          alt="Smiling girl"
        />
      </div>

      <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-prose md:max-w-180">
          <div className="mx-auto prose md:prose-lg">
            <h2>Introduction</h2>
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis.
            </p>
            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor.
            </p>

            <figure>
              <img
                className="h-60 md:h-120"
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?cs=srgb&dl=pexels-fauxels-3182746.jpg&fm=jpg&w=1920&h=1280"
                alt="Woman leaning on wooden table"
              />
              <figcaption>
                <IconLink className="size-4 text-utility-gray-400" />
                <span>
                  Image courtesy of Fauxels via{" "}
                  <a
                    href="https://www.pexels.com/photo/photo-of-woman-leaning-on-wooden-table-3182746/"
                    className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Pexels
                  </a>
                </span>
              </figcaption>
            </figure>

            <figure>
              <blockquote>
                <p>
                  In a world older and more complete than ours they move finished
                  and complete...
                </p>
              </blockquote>
              <figcaption className="not-prose mt-6 text-md md:mt-8">
                — Olivia Rhye, <cite className="not-italic">Product Designer</cite>
              </figcaption>
            </figure>

            <h3>Other resources</h3>
            <ol>
              <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
              <li>Eu turpis posuere semper feugiat volutpat elit.</li>
              <li>Suspendisse maecenas ac donec scelerisque diam.</li>
            </ol>

            <figure>
              <img
                className="h-110 md:h-210"
                src="https://images.pexels.com/photos/7148059/pexels-photo-7148059.jpeg?cs=srgb&dl=pexels-michael-burrows-7148059.jpg&fm=jpg&w=1920&h=2880"
                alt="Woman sitting in a light workspace"
              />
              <figcaption>
                <IconLink className="size-4 text-utility-gray-400" />
                <span>
                  Image courtesy of Michael Burrows via{" "}
                  <a
                    href="https://www.pexels.com/photo/pensive-woman-sitting-in-light-workspace-7148059/"
                    className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Pexels
                  </a>
                </span>
              </figcaption>
            </figure>

            <div className="not-prose my-8 rounded-2xl bg-secondary px-5 py-6 text-lg text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5">
              <h2 className="mb-4 text-display-xs font-semibold text-primary">
                Conclusion
              </h2>
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
                scelerisque est ultricies ultricies.
              </p>
              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa.
              </p>
            </div>
          </div>

          <div className="-mt-px flex flex-col items-start justify-between gap-y-8 border-t border-secondary pt-6 md:flex-row">
            <div className="flex items-center gap-3 md:gap-4">
              <img
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                className="size-12 rounded-full object-cover md:size-14"
                alt="Olivia Rhye"
              />
              <div>
                <p className="text-md font-semibold text-primary md:text-lg">
                  Olivia Rhye
                </p>
                <p className="text-md text-tertiary">
                  Product Designer, Untitled
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => copy("https://www.untitledui.com/")}
                iconLeading={copied ? IconCheck : IconCopy}
              >
                {copied ? "Copied" : "Copy link"}
              </Button>

              <Button ariaLabel="X" className="text-fg-quaternary" iconLeading={IconX} />
              <Button
                ariaLabel="Facebook"
                className="text-fg-quaternary"
                iconLeading={IconFacebook}
              />
              <Button
                ariaLabel="LinkedIn"
                className="text-fg-quaternary"
                iconLeading={IconLinkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}