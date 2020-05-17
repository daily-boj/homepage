use wasm_bindgen::prelude::*;

mod app;
mod components;
mod pages;

#[wasm_bindgen]
pub fn run_app() {
    yew::start_app::<app::App>();
}
