"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "100%",
    height: "390",
  };

  return (
    <div>
      <YouTube
        videoId={youtubeId}
        onReady={(e) => e.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
};

export default VideoPlayer;
