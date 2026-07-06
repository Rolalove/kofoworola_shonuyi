interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
  numberClassName?: string;
}

export function SectionHeader({
  number,
  title,
  className = "",
  numberClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-label ${className}`.trim()}>
      <span className={`section-number ${numberClassName}`.trim()}>
        {number}
      </span>
      <span className="section-separator" />
      <span className="section-name">{title}</span>
    </div>
  );
}
