use crate::components::Navbar;
use crate::pages::*;
use crate::route::{AppRoute, BaseRoute};
use yew::prelude::*;
use yew_router::prelude::*;

pub struct App {}

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        App {}
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <Router<BaseRoute, ()>
                render = Router::render(|BaseRoute(switch): BaseRoute| html! {
                    <>
                        <Navbar route=switch.clone()/>
                        {
                            match switch {
                                AppRoute::Branding => html!{ <BrandingPage /> },
                                AppRoute::Calendar => html!{ <CalendarPage /> },
                                AppRoute::Member => html!{ <MemberPage /> },
                                AppRoute::Newbie => html!{ <NewbiePage /> },
                                AppRoute::StatSolve => html!{ <StatSolvePage /> },
                                AppRoute::StatTier => html!{ <StatTierPage /> },
                                AppRoute::Index => html!{ <IndexPage /> },
                            }
                        }
                    </>
                })
            />
        }
    }
}
