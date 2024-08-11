import React from "react";
import useGetVideo from "../hooks/useGetVideo";

const VideoBackground = ({ movieId }) => {
  const {video,loading,error}=useGetVideo(movieId);
  console.log(video)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!video) {
    return <div>No trailer available</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1`;

  return (
    <div className="w-screen aspect-video ">
      <iframe
      //it is set to aspect ration for video
      className="w-screen aspect-video"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
  );
};

export default VideoBackground;
