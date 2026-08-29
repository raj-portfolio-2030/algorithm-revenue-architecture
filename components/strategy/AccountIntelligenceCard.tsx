import { EvidenceBadge } from './EvidenceBadge';

type AccountIntelligenceCardProps = {
  account: {
    company: string;
    fact: string;
    hypothesis: string;
    question: string;
  };
};

export function AccountIntelligenceCard({ account }: AccountIntelligenceCardProps) {
  return <article>
    <h4>{account.company}</h4>
    <p><EvidenceBadge state="Documented Fact" />{account.fact}</p>
    <p><EvidenceBadge state="Commercial Hypothesis" />{account.hypothesis}</p>
    <p><strong>Discovery question</strong>{account.question}</p>
  </article>;
}
