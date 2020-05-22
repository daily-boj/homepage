use yew::prelude::*;

pub struct StatTierPage {}

impl Component for StatTierPage {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        StatTierPage {}
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
                {"Have we solved Gold IV? wow"}
            </>
        }
    }
}
