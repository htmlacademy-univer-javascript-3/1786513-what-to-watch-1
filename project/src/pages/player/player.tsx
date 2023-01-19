import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import NotFound from '../not-found/not-found';
import { getFilm, isFilmDataLoading } from '../../store/film-data/selectors';
import { useFilm } from '../../hooks/useFilmDetails';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const getLeftTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  timeInSeconds %= 3600;
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.trunc(timeInSeconds % 60);

  return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`;
};

function Player(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const film = useAppSelector(getFilm);
  const isDataLoading = useAppSelector(isFilmDataLoading);
  const [leftTime, setLeftTime] = useState('00:00:00');

  useFilm(Number(id), film);

  useEffect(() => {
    if (film) {
      setLeftTime(getLeftTime((film?.runTime ?? 0) * 60));
    }
  }, [film]);

  if (isDataLoading) {
    return <LoadingScreen />;
  }

  if (!film) {
    return <NotFound />;
  }

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setLeftTime(
        getLeftTime(videoRef.current.duration - videoRef.current.currentTime)
      );
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current !== null) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
  };

  const handleFullScreenClick = () => {
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      toast.warn('Your browser does not support fullscreen mode');
    }
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.previewImage}
        style={{ objectFit: 'fill' }}
        onTimeUpdate={handleVideoTimeUpdate}
        autoPlay
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(-1)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{leftTime}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayClick}
          >
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
