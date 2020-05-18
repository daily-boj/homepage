use crate::route::AppRoute;
use yew::prelude::*;
use yew_router::prelude::*;

pub struct Navbar {
    props: NavbarProps,
}

#[derive(Properties, Clone, PartialEq)]
pub struct NavbarProps {
    pub route: AppRoute,
}

impl Component for Navbar {
    type Message = ();
    type Properties = NavbarProps;

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Navbar { props }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, props: Self::Properties) -> ShouldRender {
        if self.props != props {
            self.props = props;
            true
        } else {
            false
        }
    }

    fn view(&self) -> Html {
        html! {
            <header class=("navbar")>
                <RouterAnchor<AppRoute> route=AppRoute::Index>
                    <object class="logo" type="image/svg+xml" data="logo.svg">{"Logo SVG"}</object>
                    <span class="name">
                        <span class="daily">{"Daily"}</span>{" "}
                        <span class="boj">{"BOJ"}</span>
                    </span>
                </RouterAnchor<AppRoute>>
                <span class="spacing" />
                <RouterAnchor<AppRoute> route=AppRoute::Newbie>
                    <span id="menu-newbie" class="menu" data-is-selected={self.props.route == AppRoute::Newbie}>{"신입 가이드"}</span>
                </RouterAnchor<AppRoute>>
            </header>
        }
    }
}
