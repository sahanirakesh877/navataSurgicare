import React from "react";
import productdata from "../components/ProductData";

const Product = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="h3 text-center py-4 text-success ">
          Flash sale On Products
        </h3>
        <div className="row ">
          {productdata.map((item) => {
            return (
              <div className="col-md-4 col-sm-6  py-3" key={item.id}>
                <div className="product-grid4 card border-none">
                  <div className="product-image4 card-body ">
                    <a href="#">
                      <img className="pic-1 img-thumbnail " src={item.image1} />
                      <img className="pic-2" src={item.image2} />
                    </a>
                    <ul className="social">
                      <li>
                        <a href="#" data-tip="Quick View">
                          <i className="fa fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-tip="Add to Wishlist">
                          <i className="fa fa-shopping-bag" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-tip="Add to Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content card-header ">
                    <h3 className="title fs-5 fw-bold ">
                      <a href="#">{item.title}</a>
                    </h3>
                    <div className="price">
                      {item.price}
                      <span>$20.00</span>
                    </div>
                    <div className="d-flex justify-content-around ">
                      <a
                        className="add-to-cart bg-primary   text-white  rounded-pill"
                        href=""
                      >
                        ADD TO CART
                      </a>
                      <a
                        className="add-to-cart bg-success  text-white rounded-pill"
                        href="/contact"
                      >
                        LETS DEAL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
