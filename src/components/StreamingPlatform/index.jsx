import Link from "next/link";

const StreamingPlatform = ({ platform }) => {
  const HavePlatform = () => {
    return (
      <div>
        <h3 className="text-main-primary text-2xl text-bold pb-4">Watch At</h3>
        <div className="grid md:grid-cols-8 sm:grid-cols-5 grid-cols-3 gap-4">
          {platform.map((platform) => {
            return (
              <Link
                href={platform.url}
                className="bg-main-neon border-2 border-main-primary flex justify-center items-center px-2 rounded-2xl text-center hover:bg-main-primary hover:scale-105 transition-all duration-200"
              >
                {platform.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return platform[0] ? <HavePlatform /> : null;
};

export default StreamingPlatform;
