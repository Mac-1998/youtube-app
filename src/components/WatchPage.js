import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_WATCH_API1, YOUTUBE_WATCH_API2 } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState([]);

  const isSidebasMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(
      YOUTUBE_WATCH_API1 + searchParams.get("v") + YOUTUBE_WATCH_API2
    );
    const json = await data.json();
    setVideo(json?.items[0]);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full">
      <div className={`${!isSidebasMenuOpen ? "pl-24" : "pl-5"} pt-4 flex`}>
        <div>
          <iframe
            className="rounded-xl"
            width={!isSidebasMenuOpen ? "1280" : "1116"}
            height="720"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <h1 className="font-bold text-xl mt-3">{video?.snippet?.title}</h1>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="pl-16 pt-4 w-9/12">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
