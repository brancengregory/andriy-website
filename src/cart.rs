use leptos::{component, view, IntoView};

struct CartItem {
  id: String,
  name: String,
  description: String,
  options: Vec<String>
}

struct Cart {
  id: String,
  cart_items: Vec<CartItem>,
  total_price: f32
}

#[component]
pub fn CartPage() -> impl IntoView {
  view! {
    "Sup, Cart"
  }
}