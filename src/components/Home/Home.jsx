import React from "react";
import avatarImg from '../../assets/images/avataaars.svg'
import SharedComponent from "../SharedComponent/SharedComponent";

export default function Home() {
  return (
    <section className="bg-sec  min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <img src={avatarImg} width={250} alt="avataaars" />
      <div className="text-white fs-5 text-capitalize my-3">
        <h3 className=" text-uppercase">Start Framework</h3>
        <SharedComponent bgColor={'#fff'} color={'#fff'}></SharedComponent>
        <p>graphic artist - web designer - illustrator</p>
      </div>
    </section>
  );
}
 