import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div
        className={`footer text-white text-center p-5 ${styles["bg-footer"]}`}
      >
        <div className="container">
          <div className="row  ">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <ul className="list-unstyled d-flex justify-content-center align-items-center gap-3">
                <li className={`${styles['rounded-icon']}`}><FaFacebook fontSize={'25px'}></FaFacebook></li>
                <li className={`${styles['rounded-icon']}`}><FaFacebook fontSize={'25px'}></FaFacebook></li>
                <li className={`${styles['rounded-icon']}`}><FaFacebook fontSize={'25px'}></FaFacebook></li>
                <li className={`${styles['rounded-icon']}`}><FaFacebook fontSize={'25px'}></FaFacebook></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
         
        </div>
          
      </div>
     <div
            className={` ${styles["lower-footer"]} text-white text-center py-3  `}
          >
            <p>Copyright © Your Website 2021</p>
          </div>
    </>
  );
}
