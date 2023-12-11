import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  //const { channelTitle, title, thumbnails } = snippet;

  const isSidebasMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isSidebasMenuOpen ? "w-[310px]" : "w-[340px]"
      } cursor-pointer`}
    >
      <img
        className="rounded-xl"
        src={snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="flex pt-3">
        <img
          className="w-9 h-9 rounded-full mr-3"
          src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
          alt="profile"
        />
        <div>
          <h1 className="font-semibold text-[17px]">
            {snippet?.title.slice(0, 50)}...
          </h1>
          <p className="text-[#606060] text-[15px]">{snippet?.channelTitle}</p>
          <p className="text-[#606060] text-[15px]">
            {statistics?.viewCount} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
