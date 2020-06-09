use crate::asset;
use yew::prelude::*;

pub struct Icon {
    props: IconProps,
}

#[derive(Clone, PartialEq)]
pub enum IconKind {
    SolvedAC,
    Boj,
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
                    {"Solved AC Icon"}
                </object>
            },
            IconKind::Boj => html! {
                <object class="icon boj" type="image/svg+xml" data=asset!("images/baekjoon-square.svg")>
                    {"Baekjoon Online Judge Icon"}
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
