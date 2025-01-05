import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
function TabPhoto() {
  return (
    <div>
      <span className="text-xl sm:text-2xl font-extrabold">TAB 사진첩 📷</span>
      <Swiper
        className="mt-5 rounded-3xl bg-[#F3F3F3]"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Array(16).fill(0).map((item, i) => (
          <SwiperSlide>
            <img alt={`TabAlbum_${i}`} className="h-96 object-contain" src={`TabAlbum/${i}.jpg`}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid bg-[#F3F3F3] rounded-3xl	 p-5 mt-5">
        <span className="sm:ml-3 text-xs sm:text-base">
          📌 TAB 학회원들과 잊지 못할 특별한 추억을 만들어가요!
        </span>
      </div>
    </div>
  );
}

export default TabPhoto;
