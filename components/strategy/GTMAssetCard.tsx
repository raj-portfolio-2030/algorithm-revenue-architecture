'use client';

import type { LibraryAsset } from '@/data/site';

export function GTMAssetButton({ asset, onOpen, compact = false }: { asset: LibraryAsset; onOpen: (asset: LibraryAsset) => void; compact?: boolean }) {
  if (!asset.ready) return <span className="asset-unavailable">In preparation</span>;
  return <span className={`asset-trigger-wrap${compact ? ' compact' : ''}`}>
    <button className="asset-trigger" type="button" onClick={() => onOpen(asset)} aria-label={`View ${asset.name}`}><span>View GTM Playbook</span><strong>{asset.name}</strong></button>
    <span className="asset-tooltip" role="tooltip"><b>{asset.name}</b>{asset.summary}</span>
  </span>;
}

export function GTMAssetLibraryCard({ asset, index, onOpen }: { asset: LibraryAsset; index: number; onOpen: (asset: LibraryAsset) => void }) {
  return <article className="library-card">
    <button type="button" className="library-card-main" onClick={() => asset.ready && onOpen(asset)} disabled={!asset.ready}>
      <span>{String(index + 1).padStart(2, '0')}</span><div><p>{asset.type}</p><h3>{asset.name}</h3><small>{asset.description}</small></div><b>{asset.ready ? 'View asset' : 'In preparation'} <i aria-hidden="true">↗</i></b>
    </button>
    {asset.ready && <a className="library-download" href={asset.file} download>Download {asset.format} <span aria-hidden="true">↓</span></a>}
  </article>;
}

export function GTMAssetModalContent({ asset }: { asset: LibraryAsset }) {
  const previewFile = asset.previewFile ?? (asset.format === 'PDF' ? asset.file : null);
  const isPresentation = asset.format === 'PPTX' && Boolean(asset.previewFile);
  return <div className="asset-modal-content">
    <div className="asset-modal-summary">
      <div><p className="data-label">Executive synopsis</p><p>{asset.summary}</p></div>
      <dl><div><dt>Document type</dt><dd>{asset.type}</dd></div><div><dt>Ideal reader</dt><dd>{asset.reader}</dd></div></dl>
      <div><p className="data-label">What it covers</p><p>{asset.covers}</p></div>
      <div><p className="data-label">Key sections</p><ol>{asset.sections.map((section, index) => <li key={section}><span>{String(index + 1).padStart(2, '0')}</span>{section}</li>)}</ol></div>
      <div className="asset-modal-actions">{isPresentation ? <><a className="button primary" href={asset.file} download>Download PPTX <span aria-hidden="true">↓</span></a><a className="button outline" href={asset.previewFile} download>Download PDF <span aria-hidden="true">↓</span></a></> : <><a className="button primary" href={asset.file} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">↗</span></a><a className="button outline" href={asset.file} download>Download {asset.format} <span aria-hidden="true">↓</span></a></>}</div>
    </div>
    <div className="asset-document-preview">{previewFile ? <iframe tabIndex={0} title={`${asset.name} document preview`} src={`${previewFile}#view=FitH&toolbar=0&navpanes=0`} /> : <div className="presentation-preview"><span>{asset.format}</span><h3>Leadership conversation deck</h3><p>Download the original file to view the presentation.</p></div>}</div>
  </div>;
}
