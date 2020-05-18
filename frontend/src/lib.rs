#![recursion_limit = "256"]

use wasm_bindgen::prelude::*;

mod app;
mod components;
mod pages;
mod route;

#[wasm_bindgen]
pub fn run_app() {
    yew::start_app::<app::App>();
}
