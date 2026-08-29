type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  copy?: string;
  inverse?: boolean;
};

export function SectionHeader({ index, label, title, copy, inverse = false }: SectionHeaderProps) {
  return <header className={`section-head${inverse ? ' inverse' : ''}`}>
    <p className="section-index">{index} / {label}</p>
    <div><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
  </header>;
}
