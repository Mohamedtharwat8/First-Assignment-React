import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div
        className={`footer ${styles["bg-footer"]} text-white text-center py-3`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Location</h4>
              
                          <ul className="list-unstyled d-flex justify-content-center gap-3">
                              <li className="rounded-icon"><FaFacebook fontSize={'20px'}></FaFacebook></li>
                          </ul>
            </div>
            <div className="col-md-4">
              <h4>Location</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-4">
              <h4>Location</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
                  </div>
          <div className={` ${styles["lower-footer"]} text-white text-center py-3  `}>
              <p>copyright</p>
          </div>
        </div>
          </div>
        
    </>
  );
}
