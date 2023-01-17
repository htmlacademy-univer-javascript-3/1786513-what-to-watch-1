import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

export type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsList;
