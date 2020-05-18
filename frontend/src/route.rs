use yew_router::prelude::*;

#[derive(Switch, Debug, Clone, PartialEq)]
pub enum AppRoute {
    #[to = "/newbie"]
    Newbie,
    #[to = "/"]
    Index,
}
