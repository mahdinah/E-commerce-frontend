import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="ct-container" data-columns-divider="md">
        <div data-column="widget-area-1">
          <div
            className="ct-widget widget_block widget_media_image"
            id="block-7"
          >

          </div>
          <div className="ct-widget widget_block" id="block-9">
            <div className="wp-block-group is-layout-flow">
              <p>
                Phone: (+63) 555 1212
                <br />
                Fax: (+63) 555 0100
              </p>
              <p>Email: info@mail.com</p>
              <p>
                Address: 304 North Cardinal St.
                <br />
                Dorchester Center, MA 02124
              </p>
            </div>
          </div>
        </div>
        <div data-column="widget-area-2">
          <div className="ct-widget widget_block" id="block-12">
            <div className="wp-block-group is-layout-flow">
              <h4 className="has-medium-font-size wp-block-heading">
                Main Menu
              </h4>
              <p>
                <a href="#">Home</a>
                <br />
                <a href="#">Products</a>
                <br />
                <a href="#">About us</a>
                <br />
                <a href="#">Blog</a>
                <br />
                <a href="#">Contact</a>
                <br />
                <a href="#">Hot Offers</a>
                <br />
                <a href="#">Terms &amp; Conditions</a>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div data-column="widget-area-3">
          <div className="ct-widget widget_block" id="block-13">
            <div className="wp-block-group is-layout-flow">
              <h4 className="has-medium-font-size wp-block-heading">Account</h4>
              <p>
                <a href="#">My Account</a>
                <br />
                <a href="#">My Wishlist</a>
                <br />
                <a href="#">My Cart</a>
                <br />
                <a href="#">Sign In</a>
                <br />
                <a href="https://demo.creativethemes.com/blocksy/floreo/?page_id=13#">
                  Specials
                </a>
                <br />
                <a href="#">Check Out</a>
                <br />
                <a href="https://demo.creativethemes.com/blocksy/floreo/wp-admin/widgets.php#">
                  Support Center
                </a>
              </p>
            </div>
          </div>
        </div>
        <div data-column="widget-area-4">
          <div className="ct-widget widget_block" id="block-14">
            <div className="wp-block-group is-layout-flow">
              <h4 className="has-medium-font-size wp-block-heading">
                Shipping and Payments
              </h4>
              <p>
                <a href="#">Best Sellers</a>
                <br />
                <a href="#">Manufacturers</a>
                <br />
                <a href="#">Suppliers</a>
              </p>
            </div>
          </div>
          <div className="ct-widget widget_block" id="block-16">
            <div className="wp-block-group is-layout-flow">
              <h4 className="has-medium-font-size wp-block-heading">
                Payment Methods
              </h4>

            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
