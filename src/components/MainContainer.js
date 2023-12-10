import { useDispatch } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
