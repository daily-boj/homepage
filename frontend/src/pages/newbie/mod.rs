use crate::route::AppRoute;
use yew::prelude::*;
use yew_router::prelude::*;

pub struct NewbiePage {}

impl Component for NewbiePage {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        NewbiePage {}
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <ul>
                <li>
                    <RouterAnchor<AppRoute> route=AppRoute::Member>
                        {"관리자"}
                    </RouterAnchor<AppRoute>>
                    {"에게 그룹 초대를 요청해주세요."}
                    <ul>
                        <li>{"Baekjoon Online Judge"}</li>
                        <li>{"GitHub"}</li>
                    </ul>
                </li>
                <li>
                    {"매일 자정, 난이도 순으로 A, B, C라는 이름이 붙은 문제가 3개 나와요."}
                </li>
                <li>
                    {"어느 문제를 풀든 자유지만, "}
                    <b>{"매일 최소 한 문제"}</b>
                    {"는 풀어주세요."}
                </li>
                <li>
                    {"매일 23시에 뒷풀이 시간을 가져요. 뒷풀이 시간엔 이런 일을 해요."}
                    <ul>
                        <li>{"내일 문제 정하기"}</li>
                        <li>{"내가 푼 문제 풀이 공유하기"}</li>
                        <li>{"못 푼 문제 풀이 물어보기"}</li>
                    </ul>
                </li>
                <li>
                    <a href="https://solved.ac">
                        {"solved.ac 확장"}
                    </a>
                    {"을 설치하면 문제 레벨이 보여서 도움이 돼요."}
                </li>
                <li>
                    {"GitHub에는 자기 닉네임으로 저장소를 만들어서 이런 일을 해요."}
                    <ul>
                        <li>
                            <code>{"P(문제번호).(확장자)"}</code>
                            {" 의 형태로 풀이 코드를 올려요."}
                        </li>
                        <li>
                            {"문제의 접근 방식, 해설 등을 작성해요."}
                        </li>
                    </ul>
                </li>
            </ul>
        }
    }
}
