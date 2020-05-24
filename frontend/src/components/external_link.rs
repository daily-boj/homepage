use crate::components::{Icon, IconKind};
use url::Url;
use yew::prelude::*;

pub struct ExternalLink {
    props: ExternalLinkProps,
}

#[derive(Properties, Clone, PartialEq)]
pub struct ExternalLinkProps {
    #[prop_or_default]
    pub class: String,
    pub to: String,
    pub children: Children,
}

impl Component for ExternalLink {
    type Message = ();
    type Properties = ExternalLinkProps;

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        ExternalLink { props }
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
        let parsed = Url::parse(&self.props.to);
        let icon = match parsed {
            Ok(url) => url.domain().and_then(|domain| match domain {
                "solved.ac" => Some(html! { <Icon kind=IconKind::SolvedAC /> }),
                "acmicpc.net" | "www.acmicpc.net" => {
                    Some(html! { <Icon kind=IconKind::AcmIcpc /> })
                }
                "github.com" => Some(html! { <Icon kind=IconKind::Devicons('\u{e609}') /> }),
                _ => None,
            }),
            _ => None,
        }
        .unwrap_or_else(|| html! { <Icon kind=IconKind::Material("launch".into()) /> });
        html! {
            <a class=("link", "external", self.props.class.clone()) href=self.props.to.clone()>
                {icon}
                {self.props.children.render()}
            </a>
        }
    }
}
