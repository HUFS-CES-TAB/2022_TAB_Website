import { Link } from "react-router-dom"
import tw from "tailwind-styled-components"

const Item = tw.div`
    flex 
    flex-col
`

const ItemText = tw.div`
    bg-[#F3F3F3]
    p-5
    sm:p-7
    flex
    flex-col
    space-y-4
    rounded-3xl
    flex-1
    text-xs
    sm:text-base
`
const ItemDetail = tw.span`
    ml-6
`
export default function MainaAtivity() {
    return (
        <div>
            <span className="text-xl sm:text-2xl font-extrabold">TAB 주요 활동</span>
            <div className="sm:grid sm:grid-cols-2 justify-items-center space-y-20 sm:space-y-0 sm:gap-10 ">
                <Item className="flex flex-col">
                    <img alt="Study" className=" object-contain px-20" src="gif/Study.gif" />
                    <ItemText>
                        <span className="font-bold">✏️ 학회원들과 스터디</span>
                        <ItemDetail >학회원들끼리 관심있는 주제로 함께 공부하거나 프로젝트를 진행합니다.<br />
                            ex&#41; 기초프로그래밍, 웹 프론트, 안드로이드, iOS, 머신러닝, 보안, 서버
                        </ItemDetail>
                    </ItemText>
                </Item>
                <Item className="flex flex-col">
                    <img alt="Beer" className=" object-contain px-20" src="gif/Beer.gif" />
                    <ItemText>
                        <span className="font-bold">👥 올림픽공원 야유회</span>
                        <ItemDetail>서울 올림픽 공원에서 졸업한 학회 선배님들과 함께 네트워킹 할 수 있는 야유회를 개최합니다.</ItemDetail>
                    </ItemText>
                </Item>
                <Item>
                    <img alt="Semina" className=" object-contain px-20" src="gif/Semina.gif" />
                    <ItemText>
                        <span className="font-bold">🎙️  발표 및 세미나</span>
                        <ItemDetail>개인 혹은 팀으로 진행한 프로젝트, 개인이 공부한 주제를 선정해 학회원들을 대상으로 학기 중에 발표합니다.</ItemDetail>
                    </ItemText>
                </Item>
                <Item>
                    <img alt="MT" className=" object-contain px-20" src="gif/MT.gif" />
                    <ItemText>
                        <span className="font-bold">🥩  즐거운 MT</span>
                        <ItemDetail>학회원들과 MT를 진행하고, 친목을 다집니다.</ItemDetail>
                    </ItemText>
                </Item>
                <Item className="col-start-1 col-end-3 items-center">
                    <div className="px-20 sm:w-3/5 w-full">
                        <img alt="Hackathon" className=" object-contain  text-center" src="gif/Hackathon.gif" />
                    </div>

                    <ItemText className="sm:w-3/4 w-full">
                        <span className="font-bold">💻  (new!) GDSC X TAB 연합 해커톤</span>
                        <ItemDetail>GDSC와 함께 한국외국어대학교 Summer Hackathon 을 기획 및 운영합니다.</ItemDetail>
                    </ItemText>
                </Item>
            </div>
            <div className="hover:underline hover:cursor-pointer mt-10 text-xs sm:text-base"><Link to="/program">
                📌  자세한 전년도 학회 활동내용이 궁금하다면? &#40;클릭&#41; </Link></div>
        </div>
    )
}