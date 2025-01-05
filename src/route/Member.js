
import Bar from "../components/Bar";
import Header from "../components/Header";
import MemberItem from "../components/member/MemberItem";

import data from "../api/TAB_member_information.json"


export default function Member() {
  return (
    <div>
      <Header />
      <div className="mx-auto  w-full lg:w-[1024px] p-7">
        <span className="text-2xl sm:text-3xl font-extrabold">TAB 학회원을 소개합니다</span>

        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 pb-40 mt-12">
          {data.map((i) => (
            <MemberItem
              image={`https://github.com/${i.githubId}.png`} name={i.name} generation={i.tab} year={i.studentId} nickname={i.keword} github={i.githubId}
            />
          ))}
        </div>
      </div>
      <Bar />
    </div>
  );
}

