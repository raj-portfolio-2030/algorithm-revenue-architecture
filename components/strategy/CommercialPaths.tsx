export function ExpansionPath({ steps, dense = false }: { steps: string[]; dense?: boolean }) {
  return <div className={`flow${dense ? ' dense' : ''}`}>
    {steps.map((step, index) => <div className="flow-step" key={`${step}-${index}`}>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <strong>{step}</strong>
      {index < steps.length - 1 && <i aria-hidden="true">→</i>}
    </div>)}
  </div>;
}

export function EnterpriseEntryPath() {
  return <div className="strategy-banner">
    <span>Enterprise account growth strategy</span>
    <strong>Enterprise Entry → Prove Value → Expand Scope → Increase Account Depth → Engineering / Managed Infrastructure where justified</strong>
  </div>;
}
