type VideoPlayerProps = {
  src: string;
  posterSrc: string;
  muted?: boolean;
};

function VideoPlayer({ src, posterSrc, muted }: VideoPlayerProps) {
  return (
    <video
      src={src}
      poster={posterSrc}
      width="280"
      height="175"
      muted={muted}
      autoPlay
    />
  );
}

export default VideoPlayer;
