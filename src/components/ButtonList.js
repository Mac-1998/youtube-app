import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Gaming",
    "Mixes",
    "Beats",
    "Game shows",
    "Loops",
    "Rockstar Games",
    "Albums",
    "Deep House",
    "Thrillers",
    "Motorcycles",
    "Freestyle Rap",
    "Comedy",
    "Watched",
    "New to you",
    "Sketch",
  ];
  return (
    <div className="flex gap-3 pl-6 py-3 mb-16">
      {list.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
