import Achievement from "./components/Achievement";
import MainaAtivity from "./components/MainActivity";
import TabCommunity from "./components/TabCommunity";
import TabRecruit from "./components/tabRecruit";

import TabPhoto from "./components/TabPhoto";
import ClubRoom from "./components/ClubRoom";
import WithTab from "./components/WithTab";
import Target from "./components/Target";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";

import Bar from "./components/Bar";
import Header from "./components/Header";

function Home() {
  return (
    <div>
      <Header />

      <div className="mx-auto  w-full lg:w-[1024px] p-7 space-y-20 ">
        <TabRecruit />
        <WithTab />
        <TabCommunity />
        <MainaAtivity />
        <Achievement />
        <TabPhoto />
        <ClubRoom />

        <Target />
        <Schedule />
        <FAQ />
      </div>
      <Bar />
    </div>
  );
}

export default Home;
