use axum::response::Html;
use serde::{Serialize, Deserialize};
use std::collections::HashMap;

#[derive(Serialize, Clone)]
pub struct CartItem {
  pub product_id: usize,
  pub quantity: usize,
}

#[derive(Serialize)]
pub struct Cart {
  pub items: HashMap<usize, CartItem>,
}

impl Cart {
  pub fn new() -> Self {
    Cart {
        items: HashMap::new(),
    }
  }

  pub fn add_item(&mut self, product_id: usize) {
    self.items.entry(product_id).and_modify(|item| {
        item.quantity += 1;
    }).or_insert(CartItem {
        product_id,
        quantity: 1,
    });
  }

  pub fn remove_item(&mut self, product_id: usize) {
    self.items.remove(&product_id);
  }

  pub fn total_items(&self) -> usize {
    self.items.values().map(|item| item.quantity).sum()
  }

  pub fn render(&self) -> Html<String> {
    Html(format!(
        r#"<div>
            <h2>Shopping Cart</h2>
            <ul>
              {}
            </ul>
            <p>Total items: {}</p>
        </div>"#,
        self.items.values().map(|item| format!(
            r#"<li>Product ID: {}, Quantity: {}</li>"#,
            item.product_id, item.quantity
        )).collect::<Vec<String>>().join(""),
        self.total_items()
    ))
  }

  pub fn render_total_items(&self) -> Html<String> {
    Html(format!("{}", self.total_items()))
  }
}
