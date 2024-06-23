use axum::{
  extract::{Path, Query},
  response::{Html, IntoResponse},
  http::StatusCode,
};
use std::sync::{Arc, Mutex};
use std::collections::HashMap;
use crate::product::{get_product_html, get_products};
use crate::cart::Cart;
use askama::Template;

#[derive(Template)]
#[template(path = "home.html")]
struct HomeTemplate<'a> {
  cart: &'a Cart,
}

pub async fn get_home(cart: Arc<Mutex<Cart>>) -> impl IntoResponse {
  let cart = cart.lock().unwrap();
  let template = HomeTemplate { cart: &cart };
  Html(template.render().unwrap())
}

pub async fn get_more_products(Path((start, count)): Path<(usize, usize)>) -> Result<Html<String>, StatusCode> {
  let products = get_products(start, count).await;
  let mut html = String::new();
  for product in products {
      html.push_str(&get_product_html(&product).await.0);
  }
  // Add a div for the next scroll trigger
  html.push_str(&format!(
      r#"<div hx-get="/more-products/{}/{}" hx-trigger="revealed" hx-swap="beforeend" class="scroll-watch"></div>"#,
      start + count,
      count
  ));
  Ok(Html(html))
}

pub async fn get_cart_total_items(cart: Arc<Mutex<Cart>>) -> Html<String> {
  let cart = cart.lock().unwrap();
  cart.render_total_items()
}

#[derive(Template)]
#[template(path = "cart.html")]
struct CartTemplate<'a> {
  cart: &'a Cart,
}

pub async fn get_cart(cart: Arc<Mutex<Cart>>) -> impl IntoResponse {
  let cart = cart.lock().unwrap();
  let template = CartTemplate { cart: &cart };
  Html(template.render().unwrap())
}

pub async fn add_to_cart(cart: Arc<Mutex<Cart>>, Query(params): Query<HashMap<String, String>>) -> impl IntoResponse {
  let product_id = params.get("product_id").and_then(|id| id.parse().ok()).unwrap_or(0);
  
  {
      let mut cart = cart.lock().unwrap();
      cart.add_item(product_id);
  }

  get_cart_total_items(cart).await
}
