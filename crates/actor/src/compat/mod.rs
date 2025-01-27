pub mod wasi;
pub mod wasmcloud;

pub mod http;
pub use http::Handler as HttpHandler;
// TODO: Reexport structs once `wasi-http` integrated and top-level definitions removed
//pub use http::{Handler as HttpHandler, Request as HttpRequest, Response as HttpResponse};

pub use wasmcloud_compat::{
    keyvalue, logging, messaging, numbergen, HttpClientRequest, HttpResponse, HttpServerRequest,
};

pub trait Handler<T: ?Sized> {
    type Error: ToString;

    fn handle(&self, operation: &str, payload: Vec<u8>) -> Option<Result<Vec<u8>, Self::Error>>;
}
