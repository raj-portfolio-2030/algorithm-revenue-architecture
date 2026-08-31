import type { LibraryAsset, Product } from '@/data/site';
import { EnterpriseEntryPath, ExpansionPath } from './CommercialPaths';
import { EvidenceBadge } from './EvidenceBadge';
import { GTMAssetButton } from './GTMAssetCard';
import { IndustryFocus } from './IndustryFocus';

type ProductGrowthCardProps = {
  product: Product;
  asset: LibraryAsset;
  onViewIntelligence: (product: Product) => void;
  onOpenAsset: (asset: LibraryAsset) => void;
};

export function ProductGrowthCard({ product, asset, onViewIntelligence, onOpenAsset }: ProductGrowthCardProps) {
  return <article className={`product-panel product-${product.id}`} aria-labelledby={`product-${product.id}-title`}>
    <header className="product-lead"><div><p className="data-label">Our understanding</p><h3 id={`product-${product.id}-title`}>{product.name}</h3><p>{product.understanding}</p><div className="product-lead-actions"><button className="button outline" type="button" onClick={() => onViewIntelligence(product)}>Explore Enterprise Strategy <span aria-hidden="true">↗</span></button><GTMAssetButton compact asset={asset} onOpen={onOpenAsset} /></div></div><div><p className="data-label">Core operational problem</p><p>{product.operationalProblem}</p><p className="market-line"><strong>Active / priority markets</strong>{product.markets.join(' · ')}</p></div></header>
    <EnterpriseEntryPath />
    <div className="enterprise-grid">
      <IndustryFocus focus={product.industryFocus} bestFitIcp={product.bestFitIcp} triggers={product.triggers} />
      <div className="wide"><p className="data-label">Economic buyer and buying committee</p><div className="committee-grid">{product.committee.map(item => <article key={item.role}><span>{item.role}</span><strong>{item.buyer}</strong><p><b>Motivation</b>{item.motivation}</p><p><b>Hidden concern</b>{item.concern}</p></article>)}</div></div>
      <div className="wedge"><p className="data-label">Enterprise entry wedge</p><h4>{product.entryWedge}</h4></div>
      <div><p className="data-label">First proof required</p><ul>{product.firstProof.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><p className="data-label">Primary value and scale variables</p><div className="token-list">{product.scaleVariables.map(item => <span key={item}>{item}</span>)}</div></div>
      <div><p className="data-label">Enterprise graduation triggers</p><ul>{product.graduationTriggers.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className="wide"><p className="data-label">Expansion path inside the account</p><ExpansionPath dense steps={product.expansionPath} /></div>
      <div><p className="data-label">Engineering adjacency</p><p>{product.engineeringAdjacency}</p></div>
      <div><p className="data-label">Managed-services adjacency</p><p>{product.managedAdjacency}</p></div>
      <div className="wide gap-card"><EvidenceBadge state="CEO Input Required" /><ul>{product.gaps.map(item => <li key={item}>{item}</li>)}</ul></div>
    </div>
  </article>;
}
