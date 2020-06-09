use yew::prelude::*;

pub struct IndexPage {}

impl Component for IndexPage {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        IndexPage {}
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <>
                <div id="landing">
                    <div class="introduction">
                        {"데일리 백준은 알고리즘 문제 풀이를 하는 소모임입니다."}
                        <br />
                        <br />
                        {"매일매일 참가자들끼리 토론으로 문제를 선정하고, "}
                        {"문제를 푸는 데에 어려움이 있다면 서로 질문을 나눕니다. "}
                        {"코드를 보고 반례를 찾아주기도 하며, "}
                        {"문제를 푸는 데에 필요한 알고리즘을 같이 배우기도 합니다."}
                        <br />
                        <br />
                        {"본 모임은 알고리즘 실력을 진일보시키는 것에 목적을 두고 있습니다. "}
                        {"또한, 알고리즘 관련 자료를 공개해 지식을 나누는 데에도 뜻을 두고 있습니다. "}
                        <br />
                        <br />
                        {"이 모임에서 지켜야 하는 규칙은 아주 간단합니다. "}
                        {"매일 한 문제를 푸는 것뿐입니다. "}
                    </div>
                    <div class="catchphrase">
                        <span class="line">
                            {"데일리\u{00a0}백준으로"}
                            {" "}
                            <span class="highlight">
                                {"하루에"}
                            </span>
                        </span>
                        <br />
                        <span class="line">
                            {"적어도"}
                            {" "}
                            <span class="highlight">
                                {"한\u{00a0}문제"}
                            </span>
                            {"는 풀어봅시다"}
                        </span>
                    </div>
                </div>
            </>
        }
    }
}
