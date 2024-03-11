const DetailBox = ({ title, value }) => {
  return (
    <div className="border-2 border-main-neon bg-main-primary rounded-3xl flex flex-col justify-center items-center text-justify text-sm py-1 px-4">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DetailBox;
