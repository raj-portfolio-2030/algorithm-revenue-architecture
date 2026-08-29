import type { ReactNode } from 'react';
import type { EvidenceState } from '@/data/site';
import { EvidenceBadge } from './EvidenceBadge';

type ExecutiveCalloutProps = {
  state?: EvidenceState;
  children: ReactNode;
  className?: string;
};

export function ExecutiveCallout({ state = 'CEO Input Required', children, className = '' }: ExecutiveCalloutProps) {
  return <aside className={`ceo-required executive-callout${className ? ` ${className}` : ''}`}>
    <EvidenceBadge state={state} />
    <div>{children}</div>
  </aside>;
}
