use leptos::*;
use leptos_router::*;

struct Product {
  id: i32,
  name: String,
  description: String
}

#[component]
pub fn Products() -> impl IntoView {
  view! {
    "Product Page muh'fuckah"
  }
}

#[component]
pub fn ProductProfile() -> impl IntoView {
  view! {
    "Product Details Page"
  }
}

#[component]
pub fn NoProduct() -> impl IntoView {
  view! {
    "No products :'("
  }
}