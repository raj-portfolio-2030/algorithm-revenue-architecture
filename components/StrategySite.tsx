'use client';

import { useEffect, useState } from 'react';
import {
  accountFields, accountSteps, architecture, crossSell, experience, markets,
  operatingModel, playbooks, products, roadmap, scenarios, scoreWeights, services,
  teamStages, triggerExamples,
} from '@/data/site';

const nav = [
  ['Overview', 'overview'], ['Architecture', 'architecture'], ['Products', 'products'],
  ['Services', 'services'], ['Markets', 'markets'], ['Account Engine', 'accounts'],
  ['Expansion', 'expansion'], ['Roadmap', 'roadmap'], ['Revenue', 'revenue'], ['Library', 'library'],
];

function SectionHead({ index, label, title, copy, inverse = false }: { index: string; label: string; title: string; copy?: string; inverse?: boolean }) {
  return <header className={`section-head${inverse ? ' inverse' : ''}`}>
    <p className="section-index">{index} / {label}</p>
    <div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
  </header>;
}

function Flow({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  return <div className={`flow ${compact ? 'compact' : ''}`}>
    {steps.map((step, index) => <div className="flow-item" key={`${step}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}
  </div>;
}

export default function StrategySite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeMarket, setActiveMarket] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeRoadmap, setActiveRoadmap] = useState(0);
  const [activeScenario, setActiveScenario] = useState(1);
  const [activeTeam, setActiveTeam] = useState(0);
  const [activeBookPreview, setActiveBookPreview] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .5] });
    nav.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const product = products[activeProduct];
  const market = markets[activeMarket];
  const journey = crossSell[activeJourney];
  const selectedScenario = scenarios[activeScenario];

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#overview" aria-label="The Algorithm Revenue Architecture home">
        <span className="brand-mark">A</span><span>The Algorithm <small>Revenue Architecture</small></span>
      </a>
      <div className="nav-links">
        {nav.map(([label, id]) => <a className={activeSection === id ? 'active' : ''} key={id} href={`#${id}`}>{label}</a>)}
      </div>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu"><span /><span /><span /><b className="sr-only">Menu</b></button>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </div>
    </nav>

    <main id="main-content">
      <section className="hero shell" id="overview">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Confidential strategic discussion</p>
          <h1>Building the Next<br /><em>Revenue Engine</em></h1>
          <p className="hero-deck">Connecting product IP, engineering capability, market opportunity and customer relationships into a repeatable commercial growth system.</p>
          <div className="hero-actions"><a className="button primary" href="#architecture">Explore the architecture <span aria-hidden="true">↘</span></a><a className="text-link" href="#library">Open GTM Intelligence Library <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="system-map" aria-label="Four capabilities converge into repeatable revenue">
          <div className="system-grid">{['Product IP', 'Engineering', 'Markets', 'Account intelligence'].map((item, index) => <div className="system-node" key={item}><span>0{index + 1}</span>{item}</div>)}</div>
          <div className="converge" aria-hidden="true"><i /><i /><i /></div><div className="revenue-node"><small>Commercial outcome</small>Repeatable Revenue</div>
        </div>
      </section>

      <section className="thesis shell" aria-labelledby="thesis-title">
        <p className="section-index">01 / Executive thesis</p>
        <div><h2 id="thesis-title">The capability exists.<br /><em>The opportunity is commercial.</em></h2><p>The opportunity is not simply to increase lead volume. It is to create a commercial operating system that consistently converts capability into qualified opportunities, customers, expansion and recurring revenue.</p></div>
      </section>

      <section className="pillars shell" aria-label="Commercial capability pillars">
        {[
          ['01', 'Product IP', 'clinIQ · Regure · SentienGuard'], ['02', 'Engineering', 'AI · Cloud · Data · Modernization · Compliance'],
          ['03', 'Managed', 'Infrastructure · AIOps · Technical Support'], ['04', 'Markets', 'North America · UK · UAE · India'],
        ].map(([num, title, copy]) => <article key={title}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>

      <section className="commercial-shift shell">
        <SectionHead index="02" label="The commercial shift" title="Add repeatability to relationship-led growth." copy="The relationship engine remains valuable. Account intelligence adds a deliberate, measurable route to the next opportunity." />
        <div className="shift-grid">
          <div><p className="data-label">Relationship-led motion</p><Flow compact steps={['Network', 'Referral', 'Requirement', 'Proposal', 'Project']} /></div>
          <div className="proposed"><p className="data-label">Proposed repeatable motion</p><Flow compact steps={['Market intelligence', 'ICP', 'Trigger', 'Account intelligence', 'Executive engagement', 'Discovery', 'Business case', 'Solution', 'Close', 'Expand']} /></div>
        </div>
        <blockquote>“We don’t wait for requirements. We identify the business conditions that create the requirement.”</blockquote>
      </section>

      <section className="architecture" id="architecture">
        <div className="shell">
          <SectionHead inverse index="03" label="Revenue architecture" title="Land. Expand. Transform. Retain." copy="Products create entry. Engineering creates depth. Managed services create continuity. Customer success creates expansion." />
          <div className="stage-tabs" role="tablist" aria-label="Revenue architecture stages">
            {architecture.map((stage, index) => <button role="tab" aria-selected={activeStage === index} aria-controls="stage-panel" id={`stage-${index}`} onClick={() => setActiveStage(index)} className={activeStage === index ? 'active' : ''} key={stage.name}><span>0{index + 1}</span><strong>{stage.name}</strong><i aria-hidden="true">→</i></button>)}
          </div>
          <div className="stage-panel" role="tabpanel" id="stage-panel" aria-labelledby={`stage-${activeStage}`}>
            <div><p className="data-label">Commercial intent</p><h3>{architecture[activeStage].intent}</h3></div>
            <ul>{architecture[activeStage].mechanisms.map(item => <li key={item}>{item}</li>)}</ul>
            <div className="strategic-account"><small>Designed destination</small><strong>Strategic Account</strong><span>Larger · longer · more valuable</span></div>
          </div>
        </div>
      </section>

      <section className="products section-space shell" id="products">
        <SectionHead index="04" label="Product growth engines" title="Three products. Three distinct revenue motions." copy="Each product enters through a specific operational problem, then opens a designed path into engineering and recurring services." />
        <div className="product-tabs" role="tablist" aria-label="Product growth engines">
          {products.map((item, index) => <button key={item.id} role="tab" aria-selected={activeProduct === index} aria-controls="product-panel" id={`product-${index}`} className={activeProduct === index ? 'active' : ''} onClick={() => setActiveProduct(index)}><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.kicker}</small></button>)}
        </div>
        <article className={`product-panel product-${product.id}`} id="product-panel" role="tabpanel" aria-labelledby={`product-${activeProduct}`}>
          <div className="product-hero"><p className="data-label">Proposed commercial positioning</p><h3>{product.thesis}</h3><p>{product.message}</p></div>
          <div className="product-grid">
            <div><p className="data-label">Priority ICP</p><ul>{product.icp.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div><p className="data-label">Buying committee</p><ul>{product.buyers.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div><p className="data-label">Proposed triggers</p><ul>{product.triggers.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div className="wedge"><p className="data-label">Entry offer</p><h4>{product.wedge}</h4><ul>{product.assess.map(x => <li key={x}>{x}</li>)}</ul></div>
          </div>
          <div className="motion-block"><p className="data-label">Account motion</p><Flow compact steps={product.motion} /></div>
          <div className="expansion-path"><p className="data-label">Designed expansion path</p><Flow compact steps={product.expansion} /></div>
          <a className="button outline" href="#library">View {product.name} GTM Playbook <span aria-hidden="true">→</span></a>
        </article>
      </section>

      <section className="services section-space" id="services">
        <div className="shell">
          <SectionHead index="05" label="Services revenue engine" title="Engineering outcomes for regulated technology problems." copy="We organise capability around business triggers and commercial entry offers—not generic developers on demand." />
          <div className="service-list">{services.map((service, index) => <details key={service.name} open={index === 0}><summary><span>0{index + 1}</span><strong>{service.name}</strong><em>{service.entry}</em><i aria-hidden="true">+</i></summary><div><p><small>Trigger</small>{service.trigger}</p><p><small>Capability route</small>{service.capabilities}</p></div></details>)}</div>
          <aside className="staffing-note"><span>Valid entry motion</span><p>Specialist staffing or resource augmentation can answer an urgent capability requirement. It is an entry route—not The Algorithm’s central identity.</p><a href="#library">View IT Services GTM Playbook →</a></aside>
        </div>
      </section>

      <section className="markets section-space shell" id="markets">
        <SectionHead index="06" label="Market attack map" title="Different markets need different roles." copy="All priorities below are proposed GTM choices to validate—not claims of existing performance." />
        <div className="market-layout">
          <div className="market-tabs" role="tablist" aria-label="Proposed market priorities">{markets.map((item, index) => <button role="tab" aria-selected={activeMarket === index} aria-controls="market-panel" id={`market-${index}`} className={activeMarket === index ? 'active' : ''} onClick={() => setActiveMarket(index)} key={item.name}><span>0{index + 1}</span><strong>{item.name}</strong><small>{item.role}</small></button>)}</div>
          <article className="market-panel" id="market-panel" role="tabpanel" aria-labelledby={`market-${activeMarket}`}>
            <div className="market-title"><p className="data-label">Proposed GTM Priority</p><h3>{market.name}</h3><p>{market.role}</p></div>
            <dl><div><dt>Priority sectors</dt><dd>{market.sectors.join(' · ')}</dd></div><div><dt>Target buyer</dt><dd>{market.buyer}</dd></div><div><dt>Trigger</dt><dd>{market.trigger}</dd></div><div><dt>Recommended entry</dt><dd>{market.entry}</dd></div><div><dt>Product / service fit</dt><dd>{market.fit}</dd></div><div><dt>Expansion route</dt><dd>{market.expansion}</dd></div></dl>
          </article>
        </div>
      </section>

      <section className="accounts section-space" id="accounts">
        <div className="shell">
          <SectionHead inverse index="07" label="Account acquisition system" title="We don’t build lists. We build account intelligence." copy="The system starts with fit and a timely business condition—then maps the right buyer, conversation, offer and expansion route." />
          <Flow steps={accountSteps} />
          <div className="account-grid">
            <article><p className="data-label">Proposed account intelligence record</p><div className="field-cloud">{accountFields.map(field => <span key={field}>{field}</span>)}</div></article>
            <article className="scoring"><p className="data-label">Proposed scoring model</p>{scoreWeights.map(score => <div className="score" key={score.name}><span>{score.name}</span><i><b style={{ width: `${score.weight * 3.15}%` }} /></i><strong>{score.weight}%</strong></div>)}<div className="tiers"><span><b>80–100</b> Tier A</span><span><b>60–79</b> Tier B</span><span><b>40–59</b> Tier C</span><span><b>&lt;40</b> Nurture</span></div></article>
          </div>
          <div className="trigger-grid">{triggerExamples.map(item => <article key={item.sector}><span>{item.sector}</span><strong>{item.signal}</strong><i>→</i><p>{item.pain}</p><i>→</i><em>{item.offer}</em></article>)}</div>
          <blockquote className="inverse-quote">The trigger determines the conversation. The conversation determines the entry offer.</blockquote>
        </div>
      </section>

      <section className="expansion section-space shell" id="expansion">
        <SectionHead index="08" label="Cross-sell engine" title="The first sale is not the destination." copy="It is the architecture of the account relationship. Every entry motion should have a credible, customer-led route to broader value." />
        <div className="journey-tabs" role="tablist" aria-label="Cross-sell journeys">{crossSell.map((item, index) => <button key={item.name} role="tab" aria-selected={activeJourney === index} aria-controls="journey-panel" id={`journey-${index}`} className={activeJourney === index ? 'active' : ''} onClick={() => setActiveJourney(index)}>{item.name}</button>)}</div>
        <article className="journey-panel" id="journey-panel" role="tabpanel" aria-labelledby={`journey-${activeJourney}`}><p className="data-label">{journey.name} account journey</p><div className="journey-line">{journey.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < journey.steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div></article>
      </section>

      <section className="roadmap section-space" id="roadmap">
        <div className="shell"><SectionHead index="09" label="90 / 180 / 365 roadmap" title="Prove the motion. Then build around what works." copy="The sequence protects focus: understand, activate, prove, build and only then scale." />
          <div className="roadmap-nav" role="tablist" aria-label="Commercial roadmap">{roadmap.map((item, index) => <button key={item.range} role="tab" aria-selected={activeRoadmap === index} aria-controls="roadmap-panel" id={`roadmap-${index}`} className={activeRoadmap === index ? 'active' : ''} onClick={() => setActiveRoadmap(index)}><span>{item.range}</span><small>days</small><strong>{item.phase}</strong></button>)}</div>
          <article className="roadmap-panel" id="roadmap-panel" role="tabpanel" aria-labelledby={`roadmap-${activeRoadmap}`}><div><p className="data-label">Days {roadmap[activeRoadmap].range}</p><h3>{roadmap[activeRoadmap].phase}</h3></div><ol>{roadmap[activeRoadmap].items.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></article>
        </div>
      </section>

      <section className="revenue section-space shell" id="revenue">
        <SectionHead index="10" label="Revenue scenarios" title="A planning model, not a promise." copy="These scenarios test how product, services and expansion assumptions could combine. They must be recalibrated against internal pricing, conversion and capacity data." />
        <div className="scenario-tabs" role="tablist" aria-label="Illustrative revenue scenarios">{scenarios.map((item, index) => <button key={item.name} role="tab" aria-selected={activeScenario === index} aria-controls="scenario-panel" id={`scenario-${index}`} className={activeScenario === index ? 'active' : ''} onClick={() => setActiveScenario(index)}><span>{item.name}</span><strong>{item.value}</strong><small>{item.note}</small></button>)}</div>
        <article className="scenario-panel" id="scenario-panel" role="tabpanel" aria-labelledby={`scenario-${activeScenario}`}>
          <div><p className="data-label">Illustrative scenario</p><h3>{selectedScenario.value}</h3><p>{selectedScenario.name}</p></div>
          <details open><summary>View planning assumptions <span aria-hidden="true">+</span></summary><ul>{selectedScenario.assumptions.map(item => <li key={item}>{item}</li>)}</ul></details>
        </article>
        <p className="disclaimer"><strong>Planning model only.</strong> These figures are not The Algorithm’s current revenue, historical performance, forecast or commitment. They are scenario assumptions designed to test commercial potential and must be recalibrated using internal data.</p>
      </section>

      <section className="operating section-space">
        <div className="shell"><SectionHead inverse index="11" label="Commercial operating model" title="Not just lead generation. Full revenue ownership." copy="A connected model spanning strategy, pipeline, enterprise sales, customer success, partnerships and market feedback." />
          <div className="operating-grid">{operatingModel.map((item, index) => <article key={item.name}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.owns}</p></article>)}</div>
        </div>
      </section>

      <section className="team section-space shell">
        <SectionHead index="12" label="Sales team design" title="Capacity follows evidence—not ambition alone." copy="Do not build a five-person sales team before we know which market, ICP, offer and motion consistently converts." />
        <div className="team-layout"><div className="team-tabs" role="tablist" aria-label="Sales team stages">{teamStages.map((item, index) => <button key={item.stage} role="tab" aria-selected={activeTeam === index} aria-controls="team-panel" id={`team-${index}`} className={activeTeam === index ? 'active' : ''} onClick={() => setActiveTeam(index)}><span>{item.stage}</span><strong>{item.phase}</strong></button>)}</div><article className="team-panel" id="team-panel" role="tabpanel" aria-labelledby={`team-${activeTeam}`}>{teamStages[activeTeam].roles.map((role, index) => <div key={role}><span>0{index + 1}</span><strong>{role}</strong></div>)}</article></div>
      </section>

      <section className="experience section-space">
        <div className="shell"><SectionHead index="13" label="Commercial pattern recognition" title="Experience connecting commercial strategy to delivery reality." copy="Prior experience is presented only as evidence of relevant operating patterns. These are not The Algorithm engagements or performance claims." />
          <div className="experience-grid">{experience.map(item => <article key={item.org}><p className="data-label">Prior experience / {item.org}</p><h3>{item.org}</h3><ul>{item.work.map(work => <li key={work}>{work}</li>)}</ul><p>{item.themes}</p></article>)}</div>
          <div className="credibility-note"><strong>15+ years</strong><span>IT services · SaaS · account management · business development · customer success · partnerships · enterprise technology</span><p>Experience across North America, UK and India, with the ability to work across North America, UK, UAE and India. Strength in building relationships from scratch and 0-to-1 revenue. No immediate client is represented as available to bring to The Algorithm.</p></div>
        </div>
      </section>

      <section className="library section-space shell" id="library">
        <SectionHead index="14" label="GTM Intelligence Library" title="The architecture becomes execution." copy="The executive website presents the system. The playbooks will translate it into detailed market, account, sales and expansion motions." />
        <div className="library-grid">{playbooks.map((book, index) => {
          const previewOpen = activeBookPreview === index;
          return <article className={previewOpen ? 'preview-open' : ''} key={book.number} onKeyDown={event => { if (event.key === 'Escape') setActiveBookPreview(null); }}>
            <a
              className="library-primary"
              href={book.file}
              download
              aria-controls={`book-preview-${index}`}
              aria-expanded={previewOpen}
              onClick={event => {
                if (window.matchMedia('(max-width: 680px)').matches) {
                  event.preventDefault();
                  setActiveBookPreview(previewOpen ? null : index);
                }
              }}
            >
              <span className="book-num">{book.number}</span>
              <div><p className="data-label">Strategy resource</p><h3>{book.name}</h3><p>{book.description}</p><span className="mobile-preview-label">{previewOpen ? 'Close preview' : 'Tap to preview'} <i aria-hidden="true">{previewOpen ? '−' : '+'}</i></span></div>
            </a>
            {book.ready && <a className="library-download" href={book.file} download aria-label={`Download ${book.name} PDF`}>Download PDF <span aria-hidden="true">↓</span></a>}
            <aside className="library-preview" id={`book-preview-${index}`} aria-label={`${book.name} preview`}>
              <header><span>{book.number} / {book.type}</span><h4>{book.name}</h4><p>{book.summary}</p></header>
              <div className="preview-meta"><div><small>What it covers</small><p>{book.covers}</p></div><div><small>Ideal reader</small><p>{book.reader}</p></div></div>
              <div className="preview-sections"><small>Key sections</small><ol>{book.sections.map((section, sectionIndex) => <li key={section}><span>0{sectionIndex + 1}</span>{section}</li>)}</ol></div>
              <footer><span>Document type</span><strong>{book.type}</strong></footer>
            </aside>
          </article>;
        })}</div>
        <p className="library-note">Seven executive resources are available as direct PDF downloads.</p>
      </section>

      <section className="closing">
        <div className="shell"><p className="section-index">15 / The next stage</p><h2>The next stage isn’t about doing more sales.<br /><em>It’s about building a system that makes growth repeatable.</em></h2><p>We identify the conditions that create demand, create the right entry point, convert the opportunity, expand the account and build long-term customer value.</p><a className="button primary" href="#architecture">Let’s Build the Revenue Engine <span aria-hidden="true">↑</span></a></div>
      </section>
    </main>
    <footer><div className="shell"><div className="brand"><span className="brand-mark">A</span><span>The Algorithm <small>Revenue Architecture</small></span></div><p>Confidential Strategic Discussion</p><a href="#overview">Back to top ↑</a></div></footer>
  </>;
}
