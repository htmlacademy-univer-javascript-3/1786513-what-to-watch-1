import { ReactNode } from 'react';

type DetailsItemProps = {
  name: string;
  value: ReactNode;
};

function DetailsItem({ name, value }: DetailsItemProps) {
  return (
    <p className="film-card__details-item">
      <strong className="film-card__details-name">{name}</strong>
      <span className="film-card__details-value">{value}</span>
    </p>
  );
}

export default DetailsItem;
