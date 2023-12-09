import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="w-16 cursor-pointer"
          src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png"
          alt="hamberger-icon"
        />

        <img
          className="w-28 "
          src="https://logowik.com/content/uploads/images/899_youtube_2017logo.jpg"
          alt="youtube"
        />
      </div>
      <div className="flex items-center">
        <input
          className="border border-gray-300 w-[550px] p-2 rounded-l-full px-4"
          placeholder="Search"
        />
        <div className="border border-gray-300 border-l-0 p-[12px] rounded-r-full px-5 ">
          <img
            className="w-4"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="search"
          />
        </div>
        <div className="ml-4 py-[10px] rounded-full bg-gray-50 ">
          <img
            className="w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/342/992/png-transparent-microphone-computer-icons-thumbnail-google-voice-search-microphone-thumbnail.png"
            alt="voice"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-7 mr-10">
          <img
            className="w-6"
            src="https://static.thenounproject.com/png/4576699-200.png"
            alt="create"
          />
          <img
            className="w-7"
            src="https://www.pngall.com/wp-content/uploads/11/Youtube-Bell-Icon-Button-PNG-Images.png"
            alt="bell"
          />
          <img
            className="w-8 rounded-full"
            src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
