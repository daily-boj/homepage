use yew_router::prelude::*;

// TODO: Is there an way to specify router basepath?
#[derive(Switch, Debug, Clone, PartialEq)]
pub enum AppRoute {
    #[to = "/homepage/newbie"]
    Newbie,
    #[to = "/homepage"]
    Index,
}
