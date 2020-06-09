use crate::asset;
use crate::components::link;
use crate::route::*;
use yew::prelude::*;

pub struct Navbar {
    props: NavbarProps,
    link: ComponentLink<Navbar>,
    expanded: bool,
}

#[derive(Properties, Clone, PartialEq)]
pub struct NavbarProps {
    pub route: AppRoute,
}

pub enum NavbarMsg {
    Check,
    Uncheck,
}

impl Component for Navbar {
    type Message = NavbarMsg;
    type Properties = NavbarProps;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Navbar { 
            props,
            link,
            expanded: false,
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            NavbarMsg::Check => {
                self.expanded = false;
            }
            NavbarMsg::Uncheck => {
                self.expanded = true;
            }
        }
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
        let oninput = self.link.callback(|e: InputData| {
            #[cfg(not(feature = "deploy"))]
            log::debug!("{}", e.value);
            match e.value.as_ref() {
                "on" => NavbarMsg::Check,
                _ => NavbarMsg::Uncheck,
            }
        });
        html! {
            <>
                <input type="checkbox" id="collapse-button" checked=!self.expanded oninput=oninput/>
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
