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
            <>
                <header class="navbar">
                    <RouterAnchor<AppRoute> classes="brand" route=AppRoute::Index>
                        <object class="logo" type="image/svg+xml" data="images/logo.svg">{"Daily BOJ Logo"}</object>
                        <span class="name">
                            <span class="daily">{"Daily"}</span>{" "}
                            <span class="boj">{"BOJ"}</span>
                        </span>
                    </RouterAnchor<AppRoute>>
                    <RouterAnchor<AppRoute> route=AppRoute::Newbie>
                        <nav id="nav-newbie" class="nav" data-is-selected={self.props.route == AppRoute::Newbie}>
                            {"신입 가이드"}
                        </nav>
                    </RouterAnchor<AppRoute>>
                </header>
                <div class="navbar-fake" />
            </>
        }
    }
}
