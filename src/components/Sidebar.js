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
                <div className="flex items-center pb-1">
                  <img
                    className="w-16 rounded-full mr-2 -ml-5"
                    src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png"
                    alt="profile"
                  />
                  <h4 className="text-[15px]">Home</h4>
                </div>
              </Link>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-10 rounded-full mr-5 -ml-2"
                  src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/YouTube-Shorts-Black-900x0.png"
                  alt="profile"
                />
                <h4 className="text-[15px]">Shorts</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-subscription-icon.png"
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
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://png2.cleanpng.com/sh/2ddc53843a6c4ed3b4f794132a7408c0/L0KzQYm3VsA1N6V2eZH0aYP2gLBuTgV0baMyiOR4ZnnvdX7olvF1aaMye9H2cIX3dcO0ifNwdqQyf9H4Z3zoPbLqgB92dqUyTdQ6NUe0QISAgfI4bGEzUas9OEG8RoO4VcI5OWQ2UKY8NUC1R3B3jvc=/kisspng-user-profile-avatar-computer-icons-google-account-5b1571037ab7d0.9948196215281318435027.png"
                  alt="profile"
                />
                <h4 className="text-[15px]">Your channel</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"
                  alt="profile"
                />
                <h4 className="text-[15px]">History</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-[22px] ml-[1px] mr-7"
                  src="https://icon-library.com/images/youtube-video-icon-png/youtube-video-icon-png-27.jpg"
                  alt="profile"
                />
                <h4 className="text-[15px]">Your videos</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-watch-later-1781603-1513853.png?f=webp&w=256"
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
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/drvz-swJ2OqdJU_mEnJl1czV6IP1YA1suqq1Gm449HNfXeIRvwXdqG1mZ2Bn8dDGsM8e3CN8=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Lil Uzi Vert</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/ytc/APkrFKb3HsPXilo4kj4017DieGS80eWZGJEobheLmE_T_A=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Playboi Carti</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/qYOHqhSsqJnUw8g2v2MIfugKNIpJQwxfNFlygYMDIdjAMrkdW5FFEuIcNay04EJBPoT3EQSoJg=s88-c-k-c0x00ffffff-no-rj"
                  alt="profile"
                />
                <h4 className="text-[15px]">Tomorrowland</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center pb-4 cursor-pointer">
                <img
                  className="w-6 rounded-full mr-7"
                  src="https://yt3.ggpht.com/ytc/APkrFKYl2sr9wK46w9aqn0eJmY226Gt6jxHi-SB3kJGTJA=s88-c-k-c0x00ffffff-no-rj"
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
