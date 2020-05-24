use crate::asset;
use yew::prelude::*;

pub struct Icon {
    props: IconProps,
}

#[derive(Clone, PartialEq)]
pub enum IconKind {
    SolvedAC,
    AcmIcpc,
    Material(String),
    Devicons(char),
}

#[derive(Properties, Clone, PartialEq)]
pub struct IconProps {
    pub kind: IconKind,
}

impl Component for Icon {
    type Message = ();
    type Properties = IconProps;

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Icon { props }
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
        match &self.props.kind {
            IconKind::SolvedAC => html! {
                <object class="icon solvedac" type="image/svg+xml" data="https://static.solved.ac/logo.svg">
                    {"SolvedAC Icon"}
                </object>
            },
            IconKind::AcmIcpc => html! {
                <object class="icon solvedac" type="image/svg+xml" data=asset!("images/baekjoon-square.svg")>
                    {"SolvedAC Icon"}
                </object>
            },
            IconKind::Material(name) => html! {
                <span class="icon material">
                    {name}
                </span>
            },
            IconKind::Devicons(name) => html! {
                <span class="icon devicons">
                    {name}
                </span>
            },
        }
    }
}
