import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <img alt="banner" width="100%" height="400px" src="/images/banner.jpg" />
      <div className="banner-layout">
        <div className="text-center primary-text-color">
          <h1>Welcome to my portfolio</h1>
          <p>Build your application by me</p>
        </div>
      </div>
    </div>
  );
}
