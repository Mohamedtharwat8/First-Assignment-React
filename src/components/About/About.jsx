import React from 'react'
import SharedComponent from "../SharedComponent/SharedComponent";

export default function About() {
    return (
        <div className=' text-white py-5 my-5 vh-90 d-flex flex-column justify-content-center align-items-center text-center'>
            <h3 className=" text-uppercase text-center">About Component</h3>
        <SharedComponent bgColor={'#fff'} color={'#fff'}></SharedComponent>
            <div className="container my-3 ">
                <div className="row w-75 d-flex justify-content-center align-items-center mx-auto">
                    <div className="col-md-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                    <div className="col-md-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                </div>
            </div>
        </div>
    )
}
