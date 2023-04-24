import React from "react";
import "../styles/Card.css";

const ServiceCardOne = () => {
  return (
    <div className="card">
      <div className="card-icon">
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div className="card-title">Online Store</div>
      <div className="card-price">$9.99/month</div>
      <div className="card-description">
        Our online store service allows you to easily sell your products
        online. You can manage your inventory, process orders, and accept
        payments all in one place.
      </div>
    </div>
  );
};

const ServiceCardTwo = () => {
  return (
    <div className="card">
      <div className="card-icon">
        <i className="fas fa-cog"></i>
      </div>
      <div className="card-title">Technical Support</div>
      <div className="card-price">$19.99/month</div>
      <div className="card-description">
        Our technical support service provides 24/7 assistance with any issues
        you may have with your website or online store. Our team of experts is
        always available to help you.
      </div>
    </div>
  );
};

const ServiceCardThree = () => {
  return (
    <div className="card">
      <div className="card-icon">
        <i className="fas fa-chart-line"></i>
      </div>
      <div className="card-title">Analytics</div>
      <div className="card-price">$29.99/month</div>
      <div className="card-description">
        Our analytics service provides detailed insights into your website and
        online store traffic. You can track visitor behavior, monitor sales,
        and optimize your site for better performance.
      </div>
    </div>
  );
};

export { ServiceCardOne, ServiceCardTwo, ServiceCardThree };
