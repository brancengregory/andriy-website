use askama::Template;
use axum::response::Html;
use serde::Serialize;

#[derive(Serialize, Template)]
#[template(source = r##"
<div class="card w-96 bg-base-100 shadow-xl m-4">
  <figure><img src="{{ image_url }}" alt="{{ name }}"></figure>
  <div class="card-body">
    <h2 class="card-title">{{ name }}</h2>
    <p>${{ price }}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary add-to-cart-button" 
        hx-put="/cart?product_id={{ id }}" 
        hx-swap="innerHTML" 
        hx-target="#cart-indicator"
        _="on click 
          send me to '/cart?product_id={{ id }}' with PUT
          then swap #cart-indicator's innerHTML from '/cart/total-items'">
        Add to Cart
      </button>
    </div>
  </div>
</div>
"##, ext = "html")]
pub struct Product {
    pub id: usize,
    pub name: String,
    pub price: f64,
    pub image_url: String,
}

pub async fn get_product_html(product: &Product) -> Html<String> {
    Html(product.render().unwrap())
}

pub async fn get_product_by_id(id: usize) -> Product {
    // Mock function to get a product by id; in a real application, this would query the database.
    Product {
        id,
        name: format!("Product {}", id),
        price: 10.0 + (id as f64),
        image_url: "https://via.placeholder.com/300".to_string(),
    }
}

pub async fn get_products(start: usize, count: usize) -> Vec<Product> {
    // Mock function to get products; in a real application, this would query the database.
    (start..start + count).map(|id| Product {
        id,
        name: format!("Product {}", id),
        price: 10.0 + (id as f64),
        image_url: "https://via.placeholder.com/300".to_string(),
    }).collect()
}
