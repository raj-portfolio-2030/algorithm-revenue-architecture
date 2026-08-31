'use client';

import { type ReactNode, useEffect, useId, useRef } from 'react';

type AccessibleModalProps = { open: boolean; title: string; eyebrow?: string; onClose: () => void; children: ReactNode; wide?: boolean };

export function AccessibleModal({ open, title, eyebrow = 'Executive intelligence view', onClose, children, wide = false }: AccessibleModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), iframe, textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
      if (event.key !== 'Tab') return;
      const items = focusable(); if (!items.length) return;
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown); document.body.classList.add('modal-open'); requestAnimationFrame(() => closeRef.current?.focus());
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('modal-open'); previous?.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return <div className="modal-backdrop" onMouseDown={event => { if (event.currentTarget === event.target) onClose(); }}>
    <section ref={dialogRef} className={`modal${wide ? ' wide' : ''}`} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <header><div><p>{eyebrow}</p><h2 id={titleId}>{title}</h2></div><button ref={closeRef} type="button" onClick={onClose} aria-label={`Close ${title}`}>×</button></header>
      <div className="modal-body">{children}</div>
    </section>
  </div>;
}
