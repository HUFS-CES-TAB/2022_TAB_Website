import { Link, useLocation } from "react-router-dom";

export default function Bar() {
    const { pathname } = useLocation();
    const onClick = () => {

    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    return (
        <div className="">
            <div className="bg-[#D9D9D9] pt-3 items-center pb-32">
                <div className="font-bold pb-3 flex justify-center">
                    DEVELOPED BY Dawon SEO, JUHUI CHO<br />
                    DESIGNED BY Dawon SEO<br />
                    PROGRAMMED BY REACT LIBRARY
                </div>

            </div>

            <div className="fixed bottom-0 w-full space-y-2  sm:space-y-4 z-10">
                <div className="cursor-pointer flex justify-center">
                    <Link to="https://forms.gle/FrmGVJqcHpxSpAwH6" className=" btn border-none bg-[#865DFF] py-3 rounded-2xl text-center hover:bg-white group w-4/5 lg:w-[1024px] shadow-xl " onClick={onClick}>
                        <span className=" text-white font-bold group-hover:text-[#865DFF]">지원하러 가기!</span>
                    </Link>

                </div>
                <div className="bg-white flex justify-center space-x-24 sm:space-x-32 h-16 text-md sm:text-lg font-extrabold items-center">
                    <div className="pr-2" onClick={scrollToTop}>
                        <Link to="/program" className={pathname === "/program" ? "text-[#865DFF] " : "hover:text-[#865DFF]"}>

                            프로그램
                        </Link>

                    </div>
                    <div className="pr-5 sm:pr-10" onClick={scrollToTop}>
                        <Link to="/" className={pathname === "/" ? "text-[#865DFF] " : "hover:text-[#865DFF]"}>
                            TAB
                        </Link>
                    </div>
                    <div onClick={scrollToTop}>
                        <Link to="/member" className={pathname === "/member" ? "text-[#865DFF] " : "hover:text-[#865DFF]"}>
                            멤버
                        </Link>

                    </div>
                </div>

            </div>
        </div>)
}