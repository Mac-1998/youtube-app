import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const isSidebasMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const searchVideos = useSelector(
    (store) => store.searchVideos.searchVideosResults
  );

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div
      className={`flex flex-wrap pl-6 gap-4 mt-36 absolute -z-20 ${
        isSidebasMenuOpen ? "ml-60" : "ml-20"
      }`}
    >
      {searchVideos.length === 0
        ? videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))
        : searchVideos.map((video) => (
            <Link key={video.etag} to={"/watch?v=" + video.id.videoId}>
              <VideoCard info={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
