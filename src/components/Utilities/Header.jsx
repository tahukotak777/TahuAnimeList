import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-main-primary">{title}</h1>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-lg font-thin text-md underline hover:text-main-neon text-main-primary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
