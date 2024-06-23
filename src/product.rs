use std::fmt::{Display, Formatter, Result};

use leptos::*;
use leptos_router::*;

pub struct Price(f64);

impl Price {
  pub fn new(value: f64) -> Self {
    Price(value)
  }
}

impl Display for Price {
  fn fmt(&self, f: &mut Formatter) -> Result {
    write!(f, "{:.2}", self.0)
  }
}

struct Product {
    id: String,
    name: String,
    description: String,
    image: String,
    price: Price,
}

fn get_product_by_id(id: String) -> Option<Product> {
  let products = vec![
    Product {
      id: "1".to_string(),
      name: "".to_string(),
      description: "".to_string(),
      image: "public/assets/christmas-ornament.jpg".to_string(),
      price: Price::new(49.99),
    }
  ];

  products.into_iter().find(|p| p.id == id)
}

#[component]
pub fn Products() -> impl IntoView {
    view! {
      "Product Page muh'fuckah"
    }
}

#[component]
pub fn ProductProfile(id: String) -> impl IntoView {
  if let Some(product) = get_product_by_id(id) {
    view! {
      <div>
        <img src={product.image.clone()} alt={product.name.clone()} />
        <h2>{product.name.clone()}</h2>
        <p>{product.description.clone()}</p>
        <p>{format!("${:.2}", product.price)}</p>
      </div>
    }
  } else {
    view! {
      <div class="product-not-found">
        <p>"Product not found."</p>
      </div>
    }
  }
}

#[component]
pub fn NoProduct() -> impl IntoView {
    view! {
      "No products :'("
    }
}
