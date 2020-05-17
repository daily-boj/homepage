use yew::prelude::*;

pub struct Navbar {
    link: ComponentLink<Self>,
}

impl Component for Navbar {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Navbar { link }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <header class=("navbar")>
                <object class=("logo") type="image/svg+xml" data="logo.svg">{"Logo SVG"}</object>
                <span class=("name")>
                    <span class=("daily")>{"Daily"}</span>{" "}
                    <span class=("boj")>{"BOJ"}</span>
                </span>
            </header>
        }
    }
}
