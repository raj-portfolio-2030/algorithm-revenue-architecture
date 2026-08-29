import type { EvidenceState } from '@/data/site';

export function EvidenceBadge({ state }: { state: EvidenceState }) {
  const stateClass = state.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-');
  return <span className={`evidence-badge evidence-${stateClass}`}>{state}</span>;
}
