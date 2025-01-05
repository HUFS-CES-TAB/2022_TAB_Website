
export default function TabRecruit() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <div className="md:w-3/4">
          <div className="chat chat-start animate-[bottom-sheet-up_200ms_ease-in-out]">
            <div className="chat-bubble">코린이 탈출하고 싶다. <br />코딩은 처음인데 어떡하지?😢</div>
          </div>
          <div className="chat chat-end animate-[bottom-sheet-up_400ms_ease-in-out]">
            <div className="chat-bubble">
              내 관심분야에 대해서 알아가고, 다른 사람들과 공부해보고싶어! <br />
              프로젝트도 해볼 수 있으면 좋을 텐데...🧑‍💻
            </div>
          </div>
          <div className="chat chat-start animate-[bottom-sheet-up_600ms_ease-in-out]">
            <div className="chat-bubble">
              과 선배들이랑 교류해보고싶다!
              <br />
              함께 성장할 사람들 어디없나?</div>
          </div>

        </div>
      </div>

      <div className="mt-20 mb-5">
        <span className="text-xl sm:text-2xl font-extrabold">
          위에 해당하는 컴퓨터공학부 학생이라면 주목📢
        </span>
      </div>
      <div className="grid bg-[#F3F3F3] rounded-3xl p-3 text-xs sm:text-base">
        <span className="mb-3">📌 TAB은 어떤 곳인가요?</span>
        <span className="ml-5 sm:ml-7">
          TAB은 키보드의 Tab키와 'Teamwork, Ambition, Brilliance'의 약자로 '프로그래밍 개발 지식
          공유'라는 의미를 두고 있는 1985년에 설립된 컴퓨터공학부 소속
          학회입니다. <br />
          함께 프로그래밍 지식에 대한 대화를 나누고, 자신이 관심있는 분야를 함께
          공부하며 전공 수업 이외의 부분들을 함께 공유하여 학회원들의 실력
          향상을 도모하고 있습니다. <br />
          저희는 보다 한 분야에 국한되지 않아 다양한 공부를 접할 수 있는 기회를
          제공합니다. <br />
          또한, 선후배간의 친목을 도모하고, 재학생들 뿐만 아니라 졸업생들과의
          네트워킹할 수 있는 다양한 활동들을 진행하고 있습니다.
        </span>
      </div>
    </div>
  );
}
