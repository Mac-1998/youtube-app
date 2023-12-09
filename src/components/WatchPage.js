import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_WATCH_API1, YOUTUBE_WATCH_API2 } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(
      YOUTUBE_WATCH_API1 + searchParams.get("v") + YOUTUBE_WATCH_API2
    );
    const json = await data.json();
    console.log(json, "max");
    setVideo(json?.items[0]);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="pl-24 pt-4">
      <iframe
        className="rounded-xl"
        width="1280"
        height="720"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h1>{video?.snippet?.title}</h1>
    </div>
  );
};

export default WatchPage;
