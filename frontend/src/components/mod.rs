mod external_link;
mod icon;
mod internal_link;
mod navbar;

pub use icon::{Icon, IconKind};
pub use navbar::Navbar;
pub mod link {
    use super::{external_link, internal_link};

    pub type External = external_link::ExternalLink;
    pub type Internal = internal_link::InternalLink;
}
