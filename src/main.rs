use axum::{
  routing::{get, put, get_service},
  Router,
};
use std::net::SocketAddr;
use tower_http::services::ServeDir;
use tokio::net::TcpListener;
use std::sync::{Arc, Mutex};

mod product;
mod routes;
mod cart;

use routes::{get_more_products, get_cart, add_to_cart, get_cart_total_items, get_home};
use cart::Cart;

#[tokio::main]
async fn main() {
  let cart = Arc::new(Mutex::new(Cart::new()));

  // Create the Axum router
  let router = Router::new()
      .route("/", get({
        let cart = Arc::clone(&cart);
        move || get_home(cart.clone())
      }))
      .route("/more-products/:start/:count", get(get_more_products))
      .route("/cart", get({
          let cart = Arc::clone(&cart);
          move || get_cart(cart.clone())
      }))
      .route("/cart", put({
          let cart = Arc::clone(&cart);
          move |query| add_to_cart(cart.clone(), query)
      }))
      .route("/cart/total-items", get({
          let cart = Arc::clone(&cart);
          move || get_cart_total_items(cart.clone())
      }))
      .nest_service("/static", get_service(ServeDir::new("./static")));

  // Define the address for the server
  let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
  println!("Listening on http://{}", addr);

  let tcp = TcpListener::bind(&addr).await.unwrap();
  axum::serve(tcp, router).await.unwrap();
}
