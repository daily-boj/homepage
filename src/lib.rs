#![recursion_limit = "512"]

use wasm_bindgen::prelude::*;

mod app;
mod components;
mod constants;
mod pages;
mod route;

#[wasm_bindgen]
pub fn run_app() {
    #[cfg(not(feature = "deploy"))]
    wasm_logger::init(wasm_logger::Config::default());
    yew::start_app::<app::App>();
}
