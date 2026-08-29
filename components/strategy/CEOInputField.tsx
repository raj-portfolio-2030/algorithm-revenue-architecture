type CEOInputFieldProps = {
  fieldKey: string;
  index: number;
  label: string;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
};

export function CEOInputField({ fieldKey, index, label, value, disabled, onChange }: CEOInputFieldProps) {
  const id = `ceo-input-${fieldKey}`;
  return <label htmlFor={id}>
    <span><b>{String(index + 1).padStart(2, '0')}</b>{label}</span>
    <textarea id={id} value={value} disabled={disabled} onChange={event => onChange(event.target.value)} placeholder="CEO Input Required" />
  </label>;
}
