import tw from "tailwind-styled-components";
import React from "react";
import { Link } from "react-router-dom";

const P = tw.p`
ml-5
mt-3
font-bold
text-gray-600
`
function FAQ() {
  return (
    <div>
      <p className="text-xl sm:text-2xl font-extrabold">자주 묻는 질문</p>
      <p className="text-xs sm:text-base font-normal mt-3">
        궁금하신 점이 있다면 아래의 연락처 혹은 오픈카톡으로 문의내용 남겨주시면
        답변해드리겠습니다.<br /><br />
        <Link to="https://open.kakao.com/o/sjRaN8dg" className=" hover:text-white hover:bg-yellow-400 text-yellow-400 p-2 rounded-3xl border-2 border-yellow-400">오픈채팅으로 문의</Link>
        <p className="mt-5">회장 장예령 010-4412-6348</p>
      </p>
      <div className="mt-10 space-y-5 text-xs sm:text-base">
        <details>
          <summary> 컴퓨터공학부, 이중전공생 혹은 서울캠퍼스 재학생도 지원이 가능한가요?</summary>
          <P> 아쉽지만 지원 자격은 컴퓨터 공학부 24학번 신입생, 편입생 그리고 자전생에게만 주어지므로 이중 및 부전공, 2학년 이상 재학생, 서울캠퍼스 학생은 지원하실 수 없습니다. </P>
        </details>
        <details>
          <summary>
            개발에 대해 막연한 관심은 있으나,개발에 대한 실질적인 지식은 없는데
            들어갈 수 있나요?
          </summary>
          <P>
            다양한 주제의 세미나가 열려 공부할 기회와 환경이 지속적으로 주어지기 때문에 처음부터 컴퓨터를 잘 하실 필요는 없습니다! <br />전공 공부와 더불어 꾸준히 학회활동에 참여할 열정만 있다면 누구든지 환영합니다.🤲</P>
        </details>
        <details>
          <summary> 지원했는데 연락이 안와요. </summary>
          <P> 학회에서 별도로 지원 확인에 대한 연락은 하지 않습니다. 사전에 공지된 면접 일정 안내 날짜까지 기다려주시고, 안내 날짜에 연락을 받지 못했다면 홈페이지 하단 연락처로 학회장에게 문자 남겨주세요 ! </P>
        </details>
        <details>
          <summary> 선발 기준은 무엇인가요? </summary>
          <P> 코딩 실력과는 전혀 무관하게 컴퓨터 분야에 대한 관심도와, 꾸준히 함게 활동하며 성장 할 수 있는 사람인가를 판단하여 선발합니다. 내향적인 성격이라거나 전공 지식이 부족하다고해서 '절대' 부정적으로 평가하지 않으므로 걱정 말고 지원해주세요! </P>
        </details>
        <details>
          <summary>학회비가 있나요? </summary>
          <P> 학회비가 있습니다! 처음에 학회 들어오시면 학회기본운영비용으로 인당 3만원 있습니다. 굿즈 제작, 학회방 각종 비품 구매 등의 목적으로 사용될 예정이며, 사용 내역은 투명하게 모든 학회원에게 공개할 예정입니다. </P>
        </details>
        <details>
          <summary>선발 인원이 몇 명인가요? </summary>
          <P> 10명 내외 선발 예정입니다.  </P>
        </details>
        <details>
          <summary>학회에 들어가면 다른 동아리 활동이나 대외활동을 병행하기 힘들진 않을까 걱정돼요.</summary>
          <P> 물론 학회원으로서 성실하게 참여해야하는 활동들이 있지만 실제로 많은 학회원들이 TAB 뿐만 아니라 다른 동아리나 대외활동을 병행하고 있어요! 너무 공사다망하면 학회 참여가 어려울 수 있지만 학회 활동이 앞으로 여러분의 즐거운 학교생활과 다양한 대외활동에 방해될 정도로 부담이 되지는 결코 않으니 걱정마세요😊😊  </P>
        </details>
        <details>
          <summary>면접은 어떻게 준비해야하나요? </summary>
          <P> 면접은 일방적으로 지원자가 평가받는 자리가 아니라 면접관과 지원자가 정해진 시간 안에 서로가 어떤 사람인지에대해 대화하는 방식의 면접이 진행될 예정입니다. 물론 코딩 경험이나 전공지식의 정도에 대해서 형식적으로 질문받긴 하겠지만 부담 가지실 필요는 없습니다. 지원자 여러분은 나는 어떤 사람이고 학회에서 어떤 활동들을 기대하는지, 어떤 마음으로 함께 활동할지 정도에 대해서만 생각해오셔도 충분합니다. 또한 여러분이 학회에 대해 궁금한 점이 있다면 면접 때 질문하셔도 좋습니다!  </P>
        </details>
      </div>
      <div>

      </div>
    </div>
  );
}

export default FAQ;
