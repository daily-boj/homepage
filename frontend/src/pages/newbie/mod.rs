use yew::prelude::*;

pub struct NewbiePage {}

impl Component for NewbiePage {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        NewbiePage {}
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
                {"Hello newbie! We are newbie too!"}
            </>
        }
    }
}
