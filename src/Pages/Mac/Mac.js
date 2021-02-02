import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Mac() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/mac.json")
      .then((res) => res.json())
      .then((products) => {
        setProducts(() => products.products);
      });
  }, []);

  console.log(products);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">
                Which Mac notebook is right for you?
              </div>
              {/* <div className="brief-description">
                The best for the brightest.
              </div> */}
            </div>
          </div>
          {products.map((product) => {
            let alert = product.Alert;
            let id = product.url;
            let title = product.Title;
            let img = product.img;
            let Brief = product.Brief;

            let PriceRange = product.PriceRange;
            let productPage = "/iphone/" + id;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{alert}</div>
                  <div className="product-brief">{PriceRange}</div>

                  <div className="monthly-price">{title}</div>
                  <div className="monthly-price">{Brief}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Mac;
