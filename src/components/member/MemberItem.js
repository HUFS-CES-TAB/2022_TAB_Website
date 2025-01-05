import { Link } from "react-router-dom";

export default function MemberItem({
  name,
  generation,
  year,
  nickname,
  github,
  link,
  image,
}) {
  return (
    <Link to={`https://github.com/${github}`}>
      <div className="shadow-xl rounded-b-3xl">
        <div>
          <img alt="memberImg" src={image} className="rounded-t-3xl" />
        </div>
        <div className="p-3 rounded-b-3xl">
          <div>
            <span className="text-sm sm:text-base">
              🧑‍💻{name}<br className="sm:hidden" />&#40;{generation},{year}&#41;
            </span>
          </div>
          <div className="text-xs sm:text-sm">{nickname}</div>
          <div className="text-xs sm:text-sm">Github : {github}</div>
        </div>
      </div>
    </Link>
  );
}
