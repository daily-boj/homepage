use crate::route::*;
use yew::prelude::*;
use yew_router::prelude::*;

pub struct InternalLink {
    props: InternalLinkProps,
}

#[derive(Properties, Clone, PartialEq)]
pub struct InternalLinkProps {
    #[prop_or_default]
    pub class: String,
    pub to: AppRoute,
    pub children: Children,
}

impl Component for InternalLink {
    type Message = ();
    type Properties = InternalLinkProps;

    fn create(props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        InternalLink { props }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
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
            <RouterAnchor<BaseRoute> classes=format!("{} {}", "link internal", self.props.class) route=self.props.to.clone().to_base_route()>
                {self.props.children.render()}
            </RouterAnchor<BaseRoute>>
        }
    }
}
