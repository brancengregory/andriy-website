use crate::cart::CartPage;
use crate::error_template::{AppError, ErrorTemplate};
use crate::product::{NoProduct, ProductProfile, Products};
use leptos::*;
use leptos_meta::*;
use leptos_router::*;

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context();

    view! { cx,
        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Stylesheet id="leptos" href="/pkg/andriy-store.css"/>

        // sets the document title
        <Title text="Welcome to Andriy's Store"/>

        // Add navbar component to all pages
        <Navbar/>

        // content for this welcome page
        <Router fallback=|| {
            let mut outside_errors = Errors::default();
            outside_errors.insert_with_default_key(AppError::NotFound);
            view! {
                <ErrorTemplate outside_errors/>
            }
            .into_view()
        }>
            <main class="p-8">
                <Routes>
                    <Route path="/" view=HomePage/>
                    <Route path="/cart" view=CartPage/>
                    <Route path="/products/:id" view=move |cx| {
                      let params = use_params();
                      view! { cx, <ProductProfile id={params.get("id")} /> }
                    }/>
                </Routes>
            </main>
        </Router>
    }
}

#[component]
fn Navbar() -> impl IntoView {
    view! {
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/">"Home"</a></li>
              <li>
                <a href="/products">"Products"</a>
                <ul class="p-2">
                  <li><a href="/products#caketoppers">"Cake Toppers"</a></li>
                  <li><a href="/products#ornaments">"Ornaments"</a></li>
                </ul>
              </li>
              <li><a href="/cart">"Cart"</a></li>
            </ul>
          </div>
          <a href="/" class="btn btn-ghost text-xl">"Andriy's Store"</a>
        </div>
        <div class="navbar-center hidden md:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/">"Home"</a></li>
            <li>
              <details>
                <summary>"Products"</summary>
                <ul class="p-2">
                  <li><a href="/products#caketoppers">"Cake Toppers"</a></li>
                  <li><a href="/products#ornaments">"Ornaments"</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/cart">"Cart"</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <a href="/cart" class="btn btn-primary btn-block">View cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
}

/// Renders the home page of your application.
#[component]
fn HomePage() -> impl IntoView {
    // Creates a reactive value to update the button
    let (count, set_count) = create_signal(0);
    let on_click = move |_| set_count.update(|count| *count += 1);

    view! {
      <h1>"Welcome to Leptos!"</h1>
      <button on:click=on_click class="btn">"Click Me: " {count}</button>
    }
}
