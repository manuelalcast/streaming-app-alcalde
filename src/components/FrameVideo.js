export default function FrameVideo({movie}) {
    return (
        <iframe title={movie.name} className="w-full-button h-[400px] m-auto" src={movie.trailer}></iframe>
    );
  }
  