use yew_router::prelude::*;

#[cfg(feature = "deploy")]
#[derive(Switch, Debug, Clone, PartialEq)]
#[to = "homepage{*}"]
pub struct BaseRoute(pub AppRoute);

#[cfg(not(feature = "deploy"))]
#[derive(Switch, Debug, Clone, PartialEq)]
#[to = "{*}"]
pub struct BaseRoute(pub AppRoute);

#[derive(Switch, Debug, Clone, PartialEq)]
pub enum AppRoute {
    #[to = "/newbie"]
    Newbie,
    #[to = "/member"]
    Member,
    #[to = "/calendar"]
    Calendar,
    #[to = "/stat/tier"]
    StatTier,
    #[to = "/stat/solve"]
    StatSolve,
    #[to = "/branding"]
    Branding,

    #[to = "/"]
    Index,
}
