type IndustryFocusProps = {
  focus: string;
  bestFitIcp: string[];
  triggers: string[];
};

export function IndustryFocus({ focus, bestFitIcp, triggers }: IndustryFocusProps) {
  return <>
    <div className="wide"><p className="data-label">Industry focus</p><p>{focus}</p></div>
    <div><p className="data-label">Best-fit ICP</p><ul>{bestFitIcp.map(item => <li key={item}>{item}</li>)}</ul></div>
    <div><p className="data-label">Trigger events</p><ul>{triggers.map(item => <li key={item}>{item}</li>)}</ul></div>
  </>;
}
