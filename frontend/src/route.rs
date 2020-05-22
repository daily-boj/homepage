use yew_router::prelude::*;

// TODO: Is there an way to specify router basepath?
#[derive(Switch, Debug, Clone, PartialEq)]
pub enum AppRoute {
    #[to = "/homepage/newbie"]
    Newbie,
    #[to = "/homepage/member"]
    Member,
    #[to = "/homepage/calendar"]
    Calendar,
    #[to = "/homepage/stat/tier"]
    StatTier,
    #[to = "/homepage/stat/solve"]
    StatSolve,
    #[to = "/homepage/branding"]
    Branding,

    #[to = "/homepage"]
    Index,
}
