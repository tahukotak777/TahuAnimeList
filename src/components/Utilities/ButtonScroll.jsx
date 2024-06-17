const ButtonScroll = ({ day, setDay, currentDay }) => {
  return (
    <div>
      <button
        className={`${currentDay == day ? 'bg-main-primary' : 'bg-main-neon'} border-2 border-main-primary hover:bg-main-primary shrink-0 w-20 h-8 flex justify-center items-center m-4 text-lg rounded-lg transition-all duration-200 hover:scale-110`}
        onClick={() => setDay(day)}
      >
        {day}
      </button>
    </div>
  );
};

export default ButtonScroll;
