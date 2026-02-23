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

function Button({ children, onClick, iconLeading: Icon, className = "", ariaLabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={
        "inline-flex items-center gap-2 rounded-md border border-secondary bg-transparent px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary/60 " +
        className
      }
    >
      {Icon ? <Icon className="size-4" /> : null}
      {children ? <span>{children}</span> : null}
    </button>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-secondary px-3 py-1 text-sm font-medium text-primary">
      {children}
    </span>
  );
}

export function ContentRichTextSection() {
  const copy = async (text) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        // no state: just give a tiny confirmation
        // (you can remove the alert if you dislike it)
        alert("Copied!");
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Copied!");
      }
    } catch (e) {
      console.error(e);
      alert("Could not copy.");
    }
  };

  return (
    <div className="bg-primary not-prose">
      <div className="mx-auto px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <span className="text-sm font-semibold md:text-md">Published 20 Jan 2025</span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              UX review presentations
            </h1>
            <p className="mt-4 text-lg opacity-80 md:mt-6 md:text-xl">
              How do you create compelling presentations that wow your colleagues and impress your managers?{" "}
              <span className="max-md:hidden">Find out with our in-depth guide on UX presentations.</span>
            </p>
          </div>

          <div className="mt-8 flex gap-2">
            <Badge>Design</Badge>
            <Badge>Research</Badge>
            <Badge>Presentation</Badge>
          </div>
        </div>

        <img
          className="mt-12 h-60 w-full rounded-xl object-cover md:mt-16 md:h-[640px]"
          src="https://www.untitledui.com/marketing/smiling-girl-5.webp"
          alt="Smiling girl"
        />
      </div>

      <div className="mx-auto px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="prose md:prose-lg">
            <h2>Introduction</h2>
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.
            </p>
            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-secondary pt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                className="size-12 rounded-full object-cover"
                alt="Olivia Rhye"
              />
              <div>
                <p className="text-md font-semibold">Olivia Rhye</p>
                <p className="text-md opacity-70">Product Designer, Untitled</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => copy("https://www.untitledui.com/")} iconLeading={IconCopy}>
                Copy link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}