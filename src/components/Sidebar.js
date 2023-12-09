import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);

  return (
    showSidebar && (
      <div>
        <div className="w-60 p-3">
          <ul className="px-3 pt-3">
            <li>
              <Link to={"/"}>
                <div className="flex items-center pb-4">
                  <img
                    className="w-6 rounded-full mr-7"
                    src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                    alt="profile"
                  />
                  <h4 className="text-[15px]">Home</h4>
                </div>
              </Link>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Shorts</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Subsriptions</h4>
              </div>
            </li>
          </ul>
          <hr />
        </div>

        <div className="w-56 p-3">
          <h1 className="font-semibold text-[18px] px-3 py-1">You</h1>
          <ul className="px-3 pt-3">
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Your channel</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">History</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Your videos</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Watch later</h4>
              </div>
            </li>
          </ul>
          <hr />
        </div>

        <div className="w-56 p-3">
          <h1 className="font-semibold text-[18px] px-3 py-1">Subscriptions</h1>
          <ul className="px-3 pt-3">
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">sCout</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">MortaL</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Tomorrowland</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Drake</h4>
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    )
  );
};

export default Sidebar;
