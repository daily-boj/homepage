use crate::components::Navbar;
use yew::prelude::*;
use yew_router::prelude::*;

pub struct App {
    link: ComponentLink<Self>,
}

#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/"]
    Index,
}

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        App { link }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <>
                <Navbar />
                <Router<AppRoute, ()>
                    render = Router::render(|switch: AppRoute| {
                        match switch {
                            AppRoute::Index => html!{ "Hello" },
                        }
                    })
                />
            </>
        }
    }
}
