type SummaryCaptionsProps = {
  title: string;
  subtitle: string;
};

export const SummaryCaptions = ({ title, subtitle }: SummaryCaptionsProps) => {
  return (
    <>
      <p className="summary__title">{title}</p>
      <p className="summary__subtitle">{subtitle}</p>
    </>
  );
};
