import React from "react";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import SharedComponent from "../SharedComponent/SharedComponent";
import Card from "../Card/Card";

export default function Portfolio() {
  const imageList = [
    { id: 'img1', src: img1 },
    { id: 'img2', src: img2 },
    { id: 'img3', src: img3 },
    { id: 'img4', src: img1 },
    { id: 'img5', src: img2 },
    { id: 'img6' , src: img3 },
  ];

  return (
    <div className="   min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className=" text-uppercase">Portfolio Component</h1>
      <SharedComponent bgColor={"#2c3e50"} color={"#2c3e50"}></SharedComponent>
      <div className="container">
        <div className="row g-3 my-5">
          {imageList.map((img) => (
            <Card key={img.id} img={img} />
          ))}
          {imageList.map((img) => (
            <>
                  <div
                      key={img.id}
                class="modal fade "
                id={img.id}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                     
                    <div class="modal-body p-0 rounded overflow-hidden"><img className="w-100 d-block" src={img.src} alt="" /></div>
                   
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
