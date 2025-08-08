import React from "react";

export default function Card(props) {
  let { img } = props;

  return (
    <div className="port-img col-md-6 col-lg-4">
      <div
        data-bs-toggle="modal" 
        data-bs-target={`#${img.id}`}  
        className="inner position-relative rounded overflow-auto"
        style={{ cursor: "pointer" }}
      >
        <img src={img.src} alt="Portfolio Item" className="w-100 rounded" />
        <div className="bg-sec overlay position-absolute top-0 start-0 end-0 bottom-0 text-white align-content-center">
          <i className="fa-solid fa-plus fs-1 position-absolute top-50 start-50 translate-middle text-white"></i>
        </div>
      </div>
    </div>
  );
}