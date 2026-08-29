'use client';

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';
import {
  accountValueLifecycle, acquisitionSteps, acquisitionTriggers, ceoFields,
  commercialLifecycle, discussionContext, discoveryByEngine, engineeringPlays,
  engineeringPrinciples, evidenceStates, expansionJourneys, experienceEvidence,
  feedbackLoop, installedBaseFields, leadingIndicators, libraryAssets, markets,
  opportunityEngines, ownershipChain, pipeline, products, readiness, roadmap,
  scoreDimensions, valueLayers, valueRealizationLoop,
  type EvidenceState, type LibraryAsset, type Product,
} from '@/data/site';

const nav = [
  ['Opportunity', 'opportunity'], ['Architecture', 'architecture'], ['Products', 'products'],
  ['Engineering', 'engineering'], ['Markets', 'markets'], ['Accounts', 'accounts'],
  ['Discovery', 'discovery'], ['Pipeline', 'pipeline'], ['Expansion', 'expansion'],
  ['Roadmap', 'roadmap'], ['CEO Workspace', 'workspace'], ['Library', 'library'],
] as const;

const STORAGE_KEY = 'algorithm-ceo-commercial-inputs-v2-3';

function SectionHead({ index, label, title, copy, inverse = false }: { index: string; label: string; title: string; copy?: string; inverse?: boolean }) {
  return <header className={`section-head${inverse ? ' inverse' : ''}`}>
    <p className="section-index">{index} / {label}</p>
    <div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
  </header>;
}

function EvidenceBadge({ state }: { state: EvidenceState }) {
  return <span className={`evidence-badge evidence-${state.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{state}</span>;
}

function Flow({ steps, dense = false }: { steps: string[]; dense?: boolean }) {
  return <div className={`flow${dense ? ' dense' : ''}`}>
    {steps.map((step, index) => <div className="flow-step" key={`${step}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}
  </div>;
}

function AssetPreview({ asset, compact = false }: { asset: LibraryAsset; compact?: boolean }) {
  return <div className={`asset-preview${compact ? ' compact' : ''}`} aria-label={`${asset.name} preview`}>
    <header><span>{asset.version} / {asset.type}</span><h4>{asset.name}</h4><p>{asset.summary}</p></header>
    <div className="asset-preview-meta"><div><small>What it covers</small><p>{asset.covers}</p></div><div><small>Ideal reader</small><p>{asset.reader}</p></div></div>
    <div className="asset-preview-sections"><small>Key sections</small><ol>{asset.sections.map((section, index) => <li key={section}><span>0{index + 1}</span>{section}</li>)}</ol></div>
    <footer><span>{asset.format} · {asset.version}</span><a href={asset.file} download>Download full {asset.format} <b aria-hidden="true">↓</b></a></footer>
  </div>;
}

function ContextAssetCard({ asset }: { asset: LibraryAsset }) {
  const [open, setOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>();
  const cardRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

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
    <div ref={popoverRef} className="context-popover" style={popoverStyle}><AssetPreview asset={asset} compact /></div>
  </div>;
}

function Modal({ open, title, onClose, children, wide = false }: { open: boolean; title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('modal-open'); previous?.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return <div className="modal-backdrop" onMouseDown={event => { if (event.currentTarget === event.target) onClose(); }}>
    <section className={`modal${wide ? ' wide' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <header><p>Executive intelligence view</p><h2 id="modal-title">{title}</h2><button ref={closeRef} type="button" onClick={onClose} aria-label="Close dialog">×</button></header>
      <div className="modal-body">{children}</div>
    </section>
  </div>;
}

function ProductIntelligence({ product }: { product: Product }) {
  return <div className="intelligence-body">
    <div className="intelligence-lead"><EvidenceBadge state="Documented Fact" /><p>{product.understanding}</p></div>
    <section><h3>Adjacent incumbent and system boundary</h3><p><strong>{product.incumbent.system}</strong></p><p>{product.incumbent.boundary}</p><blockquote>{product.incumbent.message}</blockquote></section>
    <section><h3>Competitive intelligence</h3><div className="comparison-grid">{product.competitors.map(item => <article key={item.name}><h4>{item.name}</h4><dl><div><dt>Where stronger</dt><dd>{item.stronger}</dd></div><div><dt>Commercial wedge</dt><dd>{item.wedge}</dd></div><div><dt>Where not to compete</dt><dd>{item.avoid}</dd></div></dl></article>)}</div></section>
    <section><h3>Structural objections</h3><div className="objection-list">{product.objections.map(item => <details key={item.objection}><summary>{item.objection}<span>+</span></summary><p>{item.response}</p></details>)}</div></section>
    <section className="two-col"><div><h3>Diagnostic discovery</h3><ol>{product.discovery.map(item => <li key={item}>{item}</li>)}</ol><p className="method-note">Methodology: {product.methodology}</p></div><div><h3>Business-case scoping</h3><ul>{product.businessCase.map(item => <li key={item}>{item}</li>)}</ul><p className="guardrail">Every formula uses customer-provided or verified inputs.</p></div></section>
    <section><h3>Research targets, not active opportunities</h3><div className="target-grid">{product.targets.map(target => <article key={target.company}><h4>{target.company}</h4><p><EvidenceBadge state="Documented Fact" />{target.fact}</p><p><EvidenceBadge state="Commercial Hypothesis" />{target.hypothesis}</p><p><strong>Discovery question</strong>{target.question}</p></article>)}</div></section>
    <section className="two-col"><div><h3>Market opportunity context</h3><EvidenceBadge state={product.marketIndicator.state} /><p>{product.marketIndicator.text}</p><small>{product.marketIndicator.source}</small></div><div><h3>Documented packaging context</h3><ul>{product.pricingContext.map(item => <li key={item}>{item}</li>)}</ul><p className="guardrail">Public entry pricing is context, not the enterprise strategy.</p></div></section>
  </div>;
}

export default function StrategySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('opportunity');
  const [activeValueLayer, setActiveValueLayer] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const [intelligenceProduct, setIntelligenceProduct] = useState<Product | null>(null);
  const [activeMarket, setActiveMarket] = useState(0);
  const [scoreValues, setScoreValues] = useState<Record<string, number>>(() => Object.fromEntries(scoreDimensions.map(item => [item.name, 0])));
  const [readinessStatus, setReadinessStatus] = useState<Record<string, string>>(() => Object.fromEntries(readiness.map(item => [item, 'CEO Input Required'])));
  const [activeDiscovery, setActiveDiscovery] = useState(0);
  const [activePipeline, setActivePipeline] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeRoadmap, setActiveRoadmap] = useState(0);
  const [activeLibrary, setActiveLibrary] = useState<number | null>(null);
  const [mobileLibrary, setMobileLibrary] = useState<number | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [editingResponses, setEditingResponses] = useState(true);
  const [workspaceSummary, setWorkspaceSummary] = useState(false);

  const product = products[activeProduct];
  const productAsset = libraryAssets.find(asset => asset.id === product.assetId)!;
  const totalScore = scoreDimensions.reduce((total, item) => total + (scoreValues[item.name] || 0), 0);
  const answeredFields = ceoFields.filter(([key]) => responses[key]?.trim());
  const missingFields = ceoFields.filter(([key]) => !responses[key]?.trim());

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const timer = window.setTimeout(() => {
      try { setResponses(JSON.parse(saved)); setEditingResponses(false); } catch { window.localStorage.removeItem(STORAGE_KEY); }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-18% 0px -70% 0px', threshold: [0, .2, .45] });
    nav.forEach(([, id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  const saveResponses = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
    setEditingResponses(false);
    setWorkspaceSummary(true);
  };

  const exportResponses = () => {
    const lines = ['THE ALGORITHM - CEO COMMERCIAL DISCOVERY RESPONSES', `Exported: ${new Date().toLocaleString()}`, ''];
    ceoFields.forEach(([key, label]) => lines.push(label, responses[key]?.trim() || 'CEO Input Required', ''));
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'the-algorithm-ceo-commercial-responses.txt'; anchor.click(); URL.revokeObjectURL(url);
    setWorkspaceSummary(true);
  };

  const clearResponses = () => {
    if (!window.confirm('Clear all saved CEO responses from this device?')) return;
    window.localStorage.removeItem(STORAGE_KEY); setResponses({}); setEditingResponses(true);
  };

  const cycleReadiness = (item: string) => {
    const states = ['CEO Input Required', 'Partial', 'Validated'];
    setReadinessStatus(current => ({ ...current, [item]: states[(states.indexOf(current[item]) + 1) % states.length] }));
  };

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#overview" aria-label="The Algorithm Commercial Growth Architecture home"><span className="brand-mark">A</span><span>The Algorithm <small>Commercial Growth Architecture</small></span></a>
      <div className="nav-links">{nav.map(([label, id]) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`}>{label}</a>)}</div>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-controls="mobile-menu"><span /><span /><span /><b className="sr-only">Open navigation</b></button>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
    </nav>

    <main id="main-content">
      <section className="hero shell" id="overview">
        <div className="hero-copy"><p className="eyebrow"><span /> CEO commercial operating system</p><h1>Building the Next<br /><em>Revenue Engine</em></h1><p className="hero-deck">One commercial architecture connecting The Algorithm&apos;s products, regulated engineering capability, markets, existing relationships and customer expansion potential.</p><div className="hero-actions"><a className="button primary" href="#architecture">Explore the Commercial Architecture <span aria-hidden="true">↘</span></a><a className="text-link" href="/downloads/executive-strategy-brief-v2-3.pdf" download>Download Executive Brief <span aria-hidden="true">↓</span></a></div></div>
        <div className="hero-system" aria-label="Commercial growth system"><div className="hero-system-label">Commercial thesis</div><p>We are not building a pipeline around disconnected offerings. We are building one system around products, engineering, markets, relationships and customer expansion.</p><div className="hero-system-grid">{['Product entry', 'Implementation insight', 'Engineering depth', 'Managed continuity', 'Customer expansion'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div><strong>Revenue is the outcome. The operating system is the strategy.</strong></div>
      </section>

      <section className="section-space shell" id="opportunity">
        <SectionHead index="01" label="Commercial opportunity" title="The capability exists. The opportunity is commercial." copy="The next step is not more disconnected activity. It is a disciplined system for choosing accounts, proving value, converting opportunities and growing relationships." />
        <div className="opportunity-grid">{opportunityEngines.map(item => <article key={item.name}><span>{item.number}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div>
        <div className="evidence-grid">{discussionContext.map((item, index) => <article key={index}><EvidenceBadge state={item.state} /><p>{item.text}</p></article>)}</div>
        <div className="evidence-legend">{evidenceStates.map(item => <div key={item.state}><EvidenceBadge state={item.state} /><p>{item.meaning}</p></div>)}</div>
      </section>

      <section className="architecture section-space" id="architecture"><div className="shell">
        <SectionHead inverse index="02" label="Unified commercial architecture" title="Understand. Prioritize. Identify. Engage. Diagnose. Convert. Expand. Retain." copy="A single operating system connects market strategy to durable account value." />
        <div className="lifecycle">{commercialLifecycle.map(([name, output], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{output}</p></article>)}</div>
        <div className="account-lifecycle"><p>Account-value lifecycle</p><Flow steps={accountValueLifecycle.map(([name]) => name)} /></div>
        <div className="value-layer-layout"><div className="value-layer-tabs" role="tablist" aria-label="Six commercial value layers">{valueLayers.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={activeValueLayer === index} onClick={() => setActiveValueLayer(index)}><span>0{index + 1}</span>{item.name}</button>)}</div><article className="value-layer-panel" role="tabpanel"><p className="data-label">Commercial purpose</p><h3>{valueLayers[activeValueLayer].name}</h3><dl><div><dt>Purpose</dt><dd>{valueLayers[activeValueLayer].purpose}</dd></div><div><dt>Customer trigger</dt><dd>{valueLayers[activeValueLayer].trigger}</dd></div><div><dt>Proof required</dt><dd>{valueLayers[activeValueLayer].proof}</dd></div><div><dt>Next logical expansion</dt><dd>{valueLayers[activeValueLayer].next}</dd></div></dl></article></div>
      </div></section>

      <section className="products section-space shell" id="products">
        <SectionHead index="03" label="Product growth engines" title="Three products. Distinct entry motions. One account-growth system." copy="Each product starts with an operational problem, proves value in a contained scope and expands only when customer evidence justifies it." />
        <div className="product-tabs" role="tablist" aria-label="Product growth engines">{products.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={activeProduct === index} className={activeProduct === index ? 'active' : ''} onClick={() => setActiveProduct(index)}><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.label}</small></button>)}</div>
        <article className={`product-panel product-${product.id}`}>
          <header className="product-lead"><div><p className="data-label">Our understanding</p><h3>{product.name}</h3><p>{product.understanding}</p></div><div><p className="data-label">Core operational problem</p><p>{product.operationalProblem}</p><p className="market-line"><strong>Active / priority markets</strong>{product.markets.join(' · ')}</p>{product.id === 'cliniq' && <span className="exclusion">India excluded</span>}</div></header>
          <div className="strategy-banner"><span>Enterprise account growth strategy</span><strong>Enterprise Entry → Prove Value → Expand Scope → Increase Account Depth → Engineering / Managed Infrastructure where justified</strong></div>
          <div className="enterprise-grid">
            <div className="wide"><p className="data-label">Industry focus</p><p>{product.industryFocus}</p></div>
            <div><p className="data-label">Best-fit ICP</p><ul>{product.bestFitIcp.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div><p className="data-label">Trigger events</p><ul>{product.triggers.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="wide"><p className="data-label">Economic buyer and buying committee</p><div className="committee-grid">{product.committee.map(item => <article key={item.role}><span>{item.role}</span><strong>{item.buyer}</strong><p><b>Motivation</b>{item.motivation}</p><p><b>Hidden concern</b>{item.concern}</p></article>)}</div></div>
            <div className="wedge"><p className="data-label">Enterprise entry wedge</p><h4>{product.entryWedge}</h4></div>
            <div><p className="data-label">First proof required</p><ul>{product.firstProof.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div><p className="data-label">Primary value and scale variables</p><div className="token-list">{product.scaleVariables.map(item => <span key={item}>{item}</span>)}</div></div>
            <div><p className="data-label">Enterprise graduation triggers</p><ul>{product.graduationTriggers.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div className="wide"><p className="data-label">Expansion path inside the account</p><Flow dense steps={product.expansionPath} /></div>
            <div><p className="data-label">Engineering adjacency</p><p>{product.engineeringAdjacency}</p></div>
            <div><p className="data-label">Managed-services adjacency</p><p>{product.managedAdjacency}</p></div>
            <div className="wide gap-card"><EvidenceBadge state="CEO Input Required" /><ul>{product.gaps.map(item => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <div className="product-actions"><button className="button primary" type="button" onClick={() => setIntelligenceProduct(product)}>View Intelligence <span aria-hidden="true">↗</span></button><ContextAssetCard asset={productAsset} /></div>
        </article>
      </section>

      <section className="engineering section-space" id="engineering"><div className="shell">
        <SectionHead inverse index="04" label="Regulated Engineering & Modernization" title="Outcome, not capacity." copy="The strongest wedge is a technically difficult, regulated and expensive-to-get-wrong business problem with a clearly owned outcome." />
        <div className="engineering-principles">{engineeringPrinciples.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
        <div className="engineering-list">{engineeringPlays.map((play, index) => <details key={play.name} open={index === 0}><summary><span>0{index + 1}</span><strong>{play.name}</strong><em>{play.entry}</em><i>+</i></summary><div><p><small>Verifiable trigger</small>{play.trigger}</p><p><small>Likely buyer</small>{play.buyer}</p><p><small>Entry assessment</small>{play.entry}</p></div></details>)}</div>
        <div className="engineering-footer"><div><p className="data-label">Compliance-by-architecture moat</p><p>Identity, access, encryption, residency, logging, lineage, segmentation, change control, recovery and incident evidence enter before implementation.</p></div><ContextAssetCard asset={libraryAssets.find(asset => asset.id === 'engineering-playbook')!} /></div>
      </div></section>

      <section className="installed section-space shell">
        <SectionHead index="05" label="Installed-base expansion" title="Investigate the next legitimate problem inside relationships already earned." copy="Before searching for the next logo, audit current relationships for adjacent operational problems, product applicability, engineering expansion and managed infrastructure." />
        <div className="installed-grid">{installedBaseFields.map((field, index) => <div key={field}><span>{String(index + 1).padStart(2, '0')}</span><p>{field}</p></div>)}</div>
        <aside className="ceo-required"><EvidenceBadge state="CEO Input Required" /><p>Account identities, current scope, stakeholders, outcomes, revenue and expansion potential are not supplied. The framework remains blank until internal evidence is provided.</p></aside>
      </section>

      <section className="markets section-space" id="markets"><div className="shell">
        <SectionHead index="06" label="Market opportunity & prioritization" title="Market opportunity tells us where to investigate. Account triggers determine where we act." copy="US and UAE are Priority 1. UK and India are Priority 2, with product availability and fit made explicit." />
        <div className="market-layout"><div className="market-tabs" role="tablist" aria-label="Market priorities">{markets.map((market, index) => <button key={market.name} type="button" role="tab" aria-selected={activeMarket === index} className={activeMarket === index ? 'active' : ''} onClick={() => setActiveMarket(index)}><span>{market.priority}</span><strong>{market.name}</strong><small>{market.engines}</small></button>)}</div><article className="market-panel" role="tabpanel"><header><EvidenceBadge state="Commercial Hypothesis" /><h3>{markets[activeMarket].name}</h3><p>{markets[activeMarket].engines}</p></header><dl><div><dt>Primary verticals</dt><dd>{markets[activeMarket].verticals}</dd></div><div><dt>Buyer dynamics</dt><dd>{markets[activeMarket].dynamics}</dd></div><div><dt>Route to market</dt><dd>{markets[activeMarket].route}</dd></div><div><dt>Market indicator</dt><dd>{markets[activeMarket].indicator}</dd></div><div><dt>Partner and ecosystem routes</dt><dd>{markets[activeMarket].partners}</dd></div><div><dt>Relationship status</dt><dd><EvidenceBadge state="CEO Input Required" /></dd></div></dl></article></div>
      </div></section>

      <section className="accounts section-space" id="accounts"><div className="shell">
        <SectionHead inverse index="07" label="Trigger-based acquisition" title="No trigger, no Tier A." copy="ICP tells us who. Evidence tells us why now. Discovery determines whether the account hypothesis is true." />
        <Flow dense steps={acquisitionSteps} />
        <div className="fact-rule"><strong>FACT</strong><i>→</i><strong>HYPOTHESIS</strong><i>→</i><strong>DISCOVERY QUESTION</strong></div>
        <div className="trigger-cards">{acquisitionTriggers.map(item => <article key={item.engine}><h3>{item.engine}</h3><ol>{item.triggers.map(trigger => <li key={trigger}>{trigger}</li>)}</ol></article>)}</div>
        <div className="score-readiness">
          <article className="score-card"><div className="score-total"><span>Interactive account score</span><strong>{totalScore}</strong><small>/ 100</small><p>{totalScore >= 80 ? 'Tier A: deep account plan, with a credible trigger still required.' : totalScore >= 60 ? 'Tier B: targeted nurture and trigger monitoring.' : totalScore >= 40 ? 'Tier C: monitor without heavy presales investment.' : 'Not prioritized.'}</p></div>{scoreDimensions.map(item => <label key={item.name}><span><strong>{item.name}</strong><small>{item.evidence}</small></span><input type="range" min="0" max={item.weight} value={scoreValues[item.name]} onChange={event => setScoreValues(current => ({ ...current, [item.name]: Number(event.target.value) }))} /><b>{scoreValues[item.name]} / {item.weight}</b></label>)}</article>
          <article className="readiness-card"><header><p className="data-label">Commercial readiness & proof audit</p><h3>Validate before enterprise scale.</h3><p>Select each status as internal evidence is reviewed.</p></header>{readiness.map(item => <button key={item} type="button" onClick={() => cycleReadiness(item)}><span>{item}</span><b className={`status-${readinessStatus[item].toLowerCase().replaceAll(' ', '-')}`}>{readinessStatus[item]}</b></button>)}</article>
        </div>
      </div></section>

      <section className="discovery section-space shell" id="discovery">
        <SectionHead index="08" label="Strategic discovery" title="No demo before diagnosis." copy="No proposal before quantified impact. No forecast without a critical event and buying process." />
        <Flow steps={['Situation', 'Pain', 'Impact', 'Metric', 'Critical Event', 'Decision', 'Solution']} />
        <div className="discovery-layout"><div className="discovery-tabs" role="tablist">{discoveryByEngine.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={activeDiscovery === index} className={activeDiscovery === index ? 'active' : ''} onClick={() => setActiveDiscovery(index)}>{item.name}</button>)}</div><article className="discovery-panel" role="tabpanel"><p className="data-label">High-impact diagnostic questions</p><ol>{discoveryByEngine[activeDiscovery].questions.map(item => <li key={item}>{item}</li>)}</ol><div><span>Customer-input business-case model</span><p>{discoveryByEngine[activeDiscovery].formula}</p></div></article></div>
        <p className="methodology-line"><strong>Methodology stays secondary:</strong> SPICED diagnoses · MEDDPICC inspects · Challenger reframes · SPIN supports lighter discovery · PQA signals guide SentienGuard engagement.</p>
      </section>

      <section className="pipeline section-space" id="pipeline"><div className="shell">
        <SectionHead inverse index="09" label="Five-stage pipeline" title="Forecast discipline starts with evidence." copy="A demo, proposal or technical success is not commercial progress unless the customer-owned buying process moves." />
        <div className="pipeline-layout"><div className="pipeline-tabs" role="tablist">{pipeline.map((stage, index) => <button key={stage.name} type="button" role="tab" aria-selected={activePipeline === index} className={activePipeline === index ? 'active' : ''} onClick={() => setActivePipeline(index)}><span>0{index + 1}</span><strong>{stage.name}</strong></button>)}</div><article className="pipeline-panel" role="tabpanel"><h3>{pipeline[activePipeline].name}</h3><dl><div><dt>Entry criteria</dt><dd>{pipeline[activePipeline].entry}</dd></div><div><dt>Required evidence</dt><dd>{pipeline[activePipeline].evidence}</dd></div><div><dt>Exit criteria</dt><dd>{pipeline[activePipeline].exit}</dd></div><div><dt>Forecast treatment</dt><dd>{pipeline[activePipeline].forecast}</dd></div><div><dt>Common false positive</dt><dd>{pipeline[activePipeline].falsePositive}</dd></div></dl></article></div>
        <div className="pipeline-rules">{['No next step = no active opportunity', 'No critical event = weak urgency', 'No economic buyer = not commit', 'Demo does not equal progress', 'Proposal does not equal late-stage deal', 'Technical success does not equal commercial success'].map(rule => <span key={rule}>{rule}</span>)}</div>
      </div></section>

      <section className="expansion section-space shell" id="expansion">
        <SectionHead index="10" label="Multi-engine expansion flywheel" title="The first win should create insight, not just revenue." copy="Cross-sell only when implementation, customer scale, technical architecture, data, compliance or operations expose a legitimate adjacent problem." />
        <div className="journey-tabs" role="tablist">{expansionJourneys.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={activeJourney === index} className={activeJourney === index ? 'active' : ''} onClick={() => setActiveJourney(index)}>{item.name}</button>)}</div>
        <article className="journey-panel" role="tabpanel"><Flow steps={expansionJourneys[activeJourney].steps} /></article>
        <blockquote>Never cross-sell because we have another capability. Cross-sell when the customer&apos;s next legitimate business problem becomes visible.</blockquote>
        <div className="indicator-grid">{leadingIndicators.map(item => <article key={item.name}><h3>{item.name}</h3><ul>{item.metrics.map(metric => <li key={metric}>{metric}</li>)}</ul></article>)}</div>
      </section>

      <section className="roadmap section-space" id="roadmap"><div className="shell">
        <SectionHead index="11" label="180-day single-owner plan" title="Validate. Build. Create traction. Convert. Expand. Systemize." copy="We begin with evidence, not headcount or unsupported forecasts." />
        <div className="roadmap-tabs" role="tablist">{roadmap.map((item, index) => <button key={item.range} type="button" role="tab" aria-selected={activeRoadmap === index} className={activeRoadmap === index ? 'active' : ''} onClick={() => setActiveRoadmap(index)}><span>Days {item.range}</span><strong>{item.phase}</strong></button>)}</div><article className="roadmap-panel" role="tabpanel"><header><p>Days {roadmap[activeRoadmap].range}</p><h3>{roadmap[activeRoadmap].phase}</h3></header><ol>{roadmap[activeRoadmap].items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></article>
      </div></section>

      <section className="ownership section-space"><div className="shell">
        <SectionHead inverse index="12" label="Commercial ownership" title="Responsibility continues after the first contract." copy="New-logo acquisition, customer success, expansion, partnerships, product feedback and revenue intelligence belong to the same commercial system." />
        <Flow dense steps={ownershipChain} />
        <div className="loop-grid"><article><p>Customer and product feedback loop</p><Flow dense steps={feedbackLoop} /></article><article><p>Value realization and retention loop</p><Flow dense steps={valueRealizationLoop} /></article></div>
        <div className="experience-strip">{experienceEvidence.map(item => <article key={item.category}><span>{item.category}</span><h3>{item.examples}</h3><p>{item.work}</p></article>)}</div>
      </div></section>

      <section className="workspace section-space shell" id="workspace">
        <SectionHead index="13" label="CEO commercial discovery workspace" title="Replace assumptions with internal company truth." copy="Responses stay in this browser on this device. They are not sent to a server." />
        <div className="workspace-toolbar"><div><span>{answeredFields.length} answered</span><span>{missingFields.length} remaining</span></div><div><button type="button" onClick={() => setEditingResponses(true)}>Edit</button><button type="button" className="primary" onClick={saveResponses}>{editingResponses ? 'Save Responses' : 'Update Responses'}</button><button type="button" onClick={exportResponses}>Export Responses</button><button type="button" onClick={clearResponses}>Clear</button></div></div>
        <div className="workspace-grid">{ceoFields.map(([key, label], index) => <label key={key}><span><b>{String(index + 1).padStart(2, '0')}</b>{label}</span><textarea value={responses[key] || ''} disabled={!editingResponses} onChange={event => setResponses(current => ({ ...current, [key]: event.target.value }))} placeholder="CEO Input Required" /></label>)}</div>
        <p className="privacy-note">Local persistence only. Saved responses repopulate after refresh on the same browser and device. Unanswered fields remain information gaps.</p>
      </section>

      <section className="library section-space" id="library"><div className="shell">
        <SectionHead index="14" label="GTM Intelligence Library" title="The website is the operating system. The assets carry the detail." copy="Hover or keyboard-focus a resource on desktop for a premium preview. On mobile, tap to preview and use the separate download action." />
        <div className="library-layout"><div className="library-list">{libraryAssets.map((asset, index) => {
          const mobileOpen = mobileLibrary === index;
          return <article key={asset.id} className={mobileOpen ? 'open' : ''} onMouseEnter={() => setActiveLibrary(index)} onFocusCapture={() => setActiveLibrary(index)}>
            <a className="library-main" href={asset.file} download onFocus={() => setActiveLibrary(index)} onClick={event => { if (window.matchMedia('(max-width: 900px)').matches) { event.preventDefault(); setMobileLibrary(mobileOpen ? null : index); } }} aria-expanded={mobileOpen}><span>{asset.number}</span><div><p>{asset.type} · {asset.version}</p><h3>{asset.name}</h3><small>{asset.description}</small><b>{mobileOpen ? 'Close preview' : 'Tap to preview'}</b></div></a>
            <a className="library-download" href={asset.file} download onFocus={() => setActiveLibrary(index)}>Download full {asset.format} <span aria-hidden="true">↓</span></a>
            <div className="mobile-library-preview"><AssetPreview asset={asset} /></div>
          </article>;
        })}</div><aside className="library-rail" aria-live="polite">{activeLibrary === null ? <div className="library-prompt"><span>Resource preview</span><h3>Hover or focus a card</h3><p>The contextual preview stays beside the Library and never covers another download control.</p></div> : <AssetPreview asset={libraryAssets[activeLibrary]} />}</aside></div>
      </div></section>

      <section className="closing"><div className="shell"><p className="section-index">15 / Executive close</p><h2>The next stage is not about more sales activity.</h2><p>It is about building a commercial system that knows where to focus, why a customer should act, how to prove value and how to grow the relationship after the first win.</p><div><a className="button primary" href="#workspace">Review CEO Inputs</a><a className="button outline" href="#library">Explore the GTM Intelligence Library</a></div></div></section>
    </main>

    <footer className="site-footer"><div className="shell"><div className="brand"><span className="brand-mark">A</span><span>The Algorithm <small>Commercial Growth Architecture</small></span></div><p>Evidence-led strategy · No revenue forecast</p><a href="#overview">Back to top ↑</a></div></footer>

    <Modal open={Boolean(intelligenceProduct)} title={`${intelligenceProduct?.name || ''} Commercial Intelligence`} onClose={() => setIntelligenceProduct(null)} wide>{intelligenceProduct && <ProductIntelligence product={intelligenceProduct} />}</Modal>
    <Modal open={workspaceSummary} title="CEO Workspace Summary" onClose={() => setWorkspaceSummary(false)}>
      <div className="workspace-summary"><div><strong>{answeredFields.length}</strong><span>Answered fields</span></div><div><strong>{missingFields.length}</strong><span>Remaining gaps</span></div><section><h3>Captured areas</h3>{answeredFields.length ? <ul>{answeredFields.map(([, label]) => <li key={label}>{label}</li>)}</ul> : <p>No responses have been captured.</p>}</section><section><h3>Suggested next discussion topics</h3>{missingFields.length ? <ul>{missingFields.slice(0, 6).map(([, label]) => <li key={label}>{label}</li>)}</ul> : <p>All requested input areas are populated. Review them with leadership before treating them as confirmed operating truth.</p>}</section><p>No strategic conclusion has been generated from unanswered fields.</p><div><button type="button" onClick={() => { setWorkspaceSummary(false); setEditingResponses(true); }}>Edit Responses</button><button type="button" onClick={exportResponses}>Export</button><button type="button" className="primary" onClick={() => setWorkspaceSummary(false)}>Close</button></div></div>
    </Modal>
  </>;
}
