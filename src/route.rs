use yew_router::prelude::*;

#[cfg(feature = "deploy")]
#[derive(Switch, Debug, Clone, PartialEq)]
#[to = "/homepage{*}"]
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

impl AppRoute {
    pub fn to_base_route(self) -> BaseRoute {
        BaseRoute(self)
    }
    pub fn id(&self) -> &'static str {
        match self {
            AppRoute::Newbie => "newbie",
            AppRoute::Member => "member",
            AppRoute::Calendar => "calendar",
            AppRoute::StatTier => "stat-tier",
            AppRoute::StatSolve => "stat-solve",
            AppRoute::Branding => "branding",
            AppRoute::Index => "index",
        }
    }
}

impl Into<BaseRoute> for AppRoute {
    fn into(self) -> BaseRoute {
        self.to_base_route()
    }
}
