use crate::asset;
use crate::route::*;
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
                <input type="checkbox" id="collapse-button" />
                <header class="navbar">
                    <RouterAnchor<BaseRoute> classes="brand" route=AppRoute::Index.to_base_route()>
                        <object class="logo" type="image/svg+xml" data=asset!("images/logo.svg")>{"Daily BOJ Logo"}</object>
                        <span class="name">
                            <span class="daily">{"Daily"}</span>{" "}
                            <span class="boj">{"BOJ"}</span>
                        </span>
                    </RouterAnchor<BaseRoute>>

                    <label for="collapse-button" class="toggler-view" aria-text="collapse button" />

                    <div class="collapse">
                        <RouterAnchor<BaseRoute> route=AppRoute::Newbie.to_base_route()>
                            <nav id="nav-newbie" data-is-selected={self.props.route == AppRoute::Newbie}>
                                {"신입 가이드"}
                            </nav>
                        </RouterAnchor<BaseRoute>>
                        <RouterAnchor<BaseRoute> route=AppRoute::Member.to_base_route()>
                            <nav id="nav-member" data-is-selected={self.props.route == AppRoute::Member}>
                                {"멤버"}
                            </nav>
                        </RouterAnchor<BaseRoute>>
                        <RouterAnchor<BaseRoute> route=AppRoute::Calendar.to_base_route()>
                            <nav id="nav-calendar" data-is-selected={self.props.route == AppRoute::Calendar}>
                                {"달력"}
                            </nav>
                        </RouterAnchor<BaseRoute>>
                    </div>
                </header>
                <div class="navbar-fake" />
            </>
        }
    }
}
