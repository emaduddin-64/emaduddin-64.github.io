import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  note?: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, note, className }: Props) {
  const [open, setOpen] = useState(false);

  // Close on Escape and stop the page scrolling behind the overlay
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${alt}`}
        className="group block w-full cursor-zoom-in overflow-hidden rounded-xl"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "transition-transform duration-300 group-hover:scale-[1.03]",
            className
          )}
        />
        <p>
          {note}
        </p>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/80 p-4"
          >
            <img
              src={src}
              alt={alt}
              className="max-h-full max-w-full rounded-xl bg-white object-contain"
            />
          </div>,
          document.body
        )}
    </>
  );
}