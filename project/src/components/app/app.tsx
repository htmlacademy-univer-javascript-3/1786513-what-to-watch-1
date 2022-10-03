import Main, { MainProps } from '../../pages/main/main';

function App({ name, genre, releaseYear }: MainProps): JSX.Element {
  return <Main name={name} genre={genre} releaseYear={releaseYear} />;
}

export default App;
