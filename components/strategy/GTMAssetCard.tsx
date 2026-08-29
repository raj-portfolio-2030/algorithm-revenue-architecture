'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';
import type { LibraryAsset } from '@/data/site';

export function GTMAssetPreview({ asset, compact = false }: { asset: LibraryAsset; compact?: boolean }) {
  return <div className={`asset-preview${compact ? ' compact' : ''}`} aria-label={`${asset.name} preview`}>
    <header><span>{asset.version} / {asset.type}</span><h4>{asset.name}</h4><p>{asset.summary}</p></header>
    <div className="asset-preview-meta"><div><small>What it covers</small><p>{asset.covers}</p></div><div><small>Ideal reader</small><p>{asset.reader}</p></div></div>
    <div className="asset-preview-sections"><small>Key sections</small><ol>{asset.sections.map((section, index) => <li key={section}><span>0{index + 1}</span>{section}</li>)}</ol></div>
    <footer><span>{asset.format} · {asset.version}</span><a href={asset.file} download>Download full {asset.format} <b aria-hidden="true">↓</b></a></footer>
  </div>;
}

export function GTMAssetCard({ asset }: { asset: LibraryAsset }) {
  const [open, setOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    let frame = 0;
    const positionPreview = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (window.matchMedia('(max-width: 980px)').matches) {
          setPopoverStyle(undefined);
          return;
        }
        const card = cardRef.current?.getBoundingClientRect();
        if (!card) return;
        const gap = 14;
        const topBoundary = 96;
        const bottomBoundary = 24;
        const width = Math.min(510, window.innerWidth - 48);
        const left = Math.min(window.innerWidth - width - 24, Math.max(24, card.right - width));
        const spaceAbove = Math.max(0, card.top - topBoundary - gap);
        const spaceBelow = Math.max(0, window.innerHeight - card.bottom - bottomBoundary - gap);
        const placeAbove = spaceAbove >= 300 || spaceAbove >= spaceBelow;
        const maxHeight = Math.min(560, Math.max(220, placeAbove ? spaceAbove : spaceBelow));
        const top = placeAbove ? Math.max(topBoundary, card.top - gap - maxHeight) : card.bottom + gap;
        setPopoverStyle({ top, left, width, maxHeight });
      });
    };
    positionPreview();
    window.addEventListener('resize', positionPreview);
    window.addEventListener('scroll', positionPreview, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', positionPreview);
      window.removeEventListener('scroll', positionPreview);
    };
  }, [open]);

  const isDesktopPreview = () => window.matchMedia('(min-width: 981px)').matches;

  return <div ref={cardRef} className={`context-asset${open ? ' open' : ''}`} onMouseEnter={() => { if (isDesktopPreview()) setOpen(true); }} onMouseLeave={() => { if (isDesktopPreview()) setOpen(false); }} onFocusCapture={() => { if (isDesktopPreview()) setOpen(true); }} onBlurCapture={event => { if (isDesktopPreview() && !event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
    <button type="button" className="context-preview-trigger" onClick={() => setOpen(value => isDesktopPreview() ? true : !value)} aria-expanded={open}>
      <span>Contextual GTM asset</span><strong>{asset.name}</strong><small>{open ? 'Close preview' : 'Hover, focus or tap to preview'}</small>
    </button>
    <a className="download-button" href={asset.file} download>Download full {asset.format} <span aria-hidden="true">↓</span></a>
    <div className="context-popover" style={popoverStyle}><GTMAssetPreview asset={asset} compact /></div>
  </div>;
}

type GTMAssetLibraryCardProps = {
  asset: LibraryAsset;
  index: number;
  mobileOpen: boolean;
  onPreview: (index: number) => void;
  onToggleMobile: (index: number) => void;
};

export function GTMAssetLibraryCard({ asset, index, mobileOpen, onPreview, onToggleMobile }: GTMAssetLibraryCardProps) {
  return <article className={mobileOpen ? 'open' : ''} onMouseEnter={() => onPreview(index)} onFocusCapture={() => onPreview(index)}>
    <a className="library-main" href={asset.file} download onFocus={() => onPreview(index)} onClick={event => { if (window.matchMedia('(max-width: 900px)').matches) { event.preventDefault(); onToggleMobile(index); } }} aria-expanded={mobileOpen}>
      <span>{asset.number}</span><div><p>{asset.type} · {asset.version}</p><h3>{asset.name}</h3><small>{asset.description}</small><b>{mobileOpen ? 'Close preview' : 'Tap to preview'}</b></div>
    </a>
    <a className="library-download" href={asset.file} download onFocus={() => onPreview(index)}>Download full {asset.format} <span aria-hidden="true">↓</span></a>
    <div className="mobile-library-preview"><GTMAssetPreview asset={asset} /></div>
  </article>;
}
