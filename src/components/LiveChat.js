import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(30),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="py-3 px-6 border-t-[1px] border-l-[1px] border-r-[1px] ml-7 mr-24  rounded-t-xl ">
        <h1 className="font-semibold text-[16.5px]">Top chat</h1>
      </div>
      <div className="ml-7 mr-24 h-[565px] border border-gray-200 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="py-3 px-6 border-b-[1px] border-l-[1px] border-r-[1px] ml-7 mr-24  rounded-b-xl flex items-center">
        <div className="mr-4">
          <img
            className="w-6 rounded-full -mt-5"
            src="https://yt3.ggpht.com/yti/ADpuP3Py1c1CPl-Rmhy5Z-smdqRH5tU5JHguo7AdDJ4=s88-c-k-c0x00ffffff-no-rj"
            alt="profile"
          />
        </div>
        <form
          className="w-full pr-2"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({ name: "Mayur Chavan", message: liveMessage })
            );
            setLiveMessage("");
          }}
        >
          <h1 className="text-sm text-[#11111199]">Mayur Chavan</h1>
          <input
            className="border-b-[1px] border-black w-full focus:outline-none focus:border-blue-400 text-sm"
            placeholder="Chat..."
            value={liveMessage}
            name="chat"
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="text-sm text-gray-900 bg-gray-200 px-2 py-1 rounded-md mt-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
