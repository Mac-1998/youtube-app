const ChatMessage = ({ name, message }) => {
  return (
    <div className="px-6">
      <div className="flex items-center my-2">
        <img
          className="rounded-full w-[22px] mr-3"
          src="https://yt4.ggpht.com/ytc/APkrFKb-tHouMmOz3pLTQT6MPVguWShnvGipdliGOw=s32-c-k-c0x00ffffff-no-rj"
          alt="profile"
        ></img>
        <span className="text-[13px] text-[#11111199] mr-3">{name}</span>
        <span className="text-[13px]">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
