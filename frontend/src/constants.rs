#[cfg(feature = "deploy")]
pub const PUBLIC_URL: &str = "https://daily-boj.github.io/homepage";

#[cfg(not(feature = "deploy"))]
pub const PUBLIC_URL: &str = "http://localhost:5000";

#[macro_export]
macro_rules! asset {
    ($name:literal) => {
        format!("{}/{}", crate::constants::PUBLIC_URL, $name)
    };
}
