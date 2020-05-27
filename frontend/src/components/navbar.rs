use crate::asset;
use crate::components::link;
use crate::route::*;
use yew::prelude::*;

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

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
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
                    <link::Internal to=AppRoute::Index class="brand">
                        <object class="logo" type="image/svg+xml" data=asset!("images/logo.svg")>{"Daily BOJ Logo"}</object>
                        <span class="name">
                            <span class="daily">{"Daily"}</span>{"\u{00a0}"}
                            <span class="boj">{"BOJ"}</span>
                        </span>
                    </link::Internal>

                    <label for="collapse-button" class="toggler-view" aria-text="collapse button" />

                    <div class="collapse">
                        <link::Internal to=AppRoute::Newbie>
                            <nav id="nav-newbie" data-is-selected={self.props.route == AppRoute::Newbie}>
                                {"신입 가이드"}
                            </nav>
                        </link::Internal>
                        <link::Internal to=AppRoute::Member>
                            <nav id="nav-member" data-is-selected={self.props.route == AppRoute::Member}>
                                {"멤버"}
                            </nav>
                        </link::Internal>
                        <link::Internal to=AppRoute::Calendar>
                            <nav id="nav-calendar" data-is-selected={self.props.route == AppRoute::Calendar}>
                                {"달력"}
                            </nav>
                        </link::Internal>
                    </div>
                </header>
                <div class="navbar-fake" />
            </>
        }
    }
}
