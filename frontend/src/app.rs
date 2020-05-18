use crate::components::Navbar;
use crate::pages::*;
use crate::route::AppRoute;
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
            <Router<AppRoute, ()>
                render = Router::render(|switch: AppRoute| html! {
                    <>
                        <Navbar route=switch.clone()/>
                        {
                            match switch {
                                AppRoute::Index => html!{ <IndexPage /> },
                                AppRoute::Newbie => html!{ <NewbiePage /> },
                            }
                        }
                    </>
                })
            />
        }
    }
}
