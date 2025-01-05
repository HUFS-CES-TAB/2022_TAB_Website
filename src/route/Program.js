import { Link } from "react-router-dom";
import data_2022 from "../api/2022TAB_semina.json";
import Bar from "../components/Bar";
import Header from "../components/Header";
import ProgramItem from "../components/program/ProgramItem";
import data_2023 from "../api/2023TAB_semina.json";
import { useState } from "react";

export default function Program() {
  const [year, setYear] = useState(2024);
  function getData(year) {
    switch (year) {
      case 2022:
        return data_2022;
      case 2023:
        return data_2023;
      default:
        setYear(2022);
        return data_2022;
    }
  }
  const data = getData(year);
  const onClick = (i) => {
    setYear(i);
  };

  return (
    <div>
      <Header />
      <div className="mx-auto  w-full lg:w-[1024px] p-7">
        <span className="text-2xl tsm:text-3xl font-extrabold">
          지난 TAB의 활동들, 함께 보실까요?
        </span>
        <div className="py-10 text-center text- mb-10">
          설레는 새 학기, 내 흥미분야는 뭘까?
          <br />
          TAB에서 선후배/동기들과 함께 공부하고 성장해보세요. <br />
          다양한 스터디, 세미나가 준비되어있습니다.
        </div>
        <div className="flex  w-24">
          {[2022, 2023].map((i) => (
            <div
              onClick={() => onClick(i)}
              className="cursor-pointer rounded-full text-lg p-2  font-bold hover:text-xl transition-all pb-3"
            >
              <span className={i === year ? "text-[#865DFF]" : ""}>{i}</span>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-12 pb-40">
          {data.programs.map((d, i) => (
            <Link to={`${data.year}/${i}`} state={data.programs[i]}>
              <ProgramItem imgSrc={d.imgSrc[0]} title={d.title} />
            </Link>
          ))}
        </div>
      </div>
      <Bar />
    </div>
  );
}
