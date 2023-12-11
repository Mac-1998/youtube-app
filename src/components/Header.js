import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {
  YOUTUBE_INPUT_API1,
  YOUTUBE_INPUT_API2,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { addSearchVideosResult } from "../utils/searchVideosSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggetions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchSubmitClick = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      dispatch(addSearchVideosResult([]));
    } else {
      getSearchResults();
    }

    setShowSuggestions(false);
    navigate("/");
  };

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_INPUT_API1 + searchQuery + YOUTUBE_INPUT_API2
    );
    const json = await data.json();
    dispatch(addSearchVideosResult(json?.items));
  };

  return (
    <div className="flex items-center justify-between h-16 fixed w-full bg-white">
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          className="w-16 cursor-pointer"
          src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png"
          alt="hamberger-icon"
        />
        <Link to={"/"}>
          <img
            className="w-28 h-16 object-cover"
            src="https://logowik.com/content/uploads/images/899_youtube_2017logo.jpg"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="">
          <form onSubmit={handleSearchSubmitClick}>
            <input
              className="border border-gray-300 w-[200px] md:w-[550px] p-2 rounded-l-full px-4 focus:outline-none focus:border-blue-800 shadow-inner"
              placeholder="Search"
              value={searchQuery}
              name="search"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
          </form>
          {showSuggestions && suggestions.length !== 0 && (
            <div className="absolute bg-white py-4  pr-6 pl-3 mt-1 w-[550px] rounded-xl shadow-2xl border border-gray-200">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex items-center justify-between hover:bg-gray-100 px-2 py-1"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-5 rounded-full mr-4"
                        src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                        alt="profile"
                      />
                      <h1 className="font-semibold">{s}</h1>
                    </div>
                    <p className="text-[#36c] text-sm">Remove</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className="border border-gray-300 border-l-0 p-[12px] rounded-r-full px-5 cursor-pointer"
          onClick={handleSearchSubmitClick}
        >
          <img
            className="w-4"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="search"
          />
        </div>
        <div className="ml-4 py-[10px] rounded-full bg-gray-50 cursor-pointer">
          <img
            className="w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/342/992/png-transparent-microphone-computer-icons-thumbnail-google-voice-search-microphone-thumbnail.png"
            alt="voice"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-7 mr-10 ">
          <img
            className="w-6 cursor-pointer"
            src="https://static.thenounproject.com/png/4576699-200.png"
            alt="create"
          />
          <img
            className="w-7 cursor-pointer"
            src="https://www.pngall.com/wp-content/uploads/11/Youtube-Bell-Icon-Button-PNG-Images.png"
            alt="bell"
          />
          <img
            className="w-8 rounded-full cursor-pointer"
            src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
