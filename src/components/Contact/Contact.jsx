import React from 'react'
import SharedComponent from "../SharedComponent/SharedComponent";

export default function Contact() {
    return (
        <div className=' min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
                  <h3 className=" text-uppercase text-start">Contact Component</h3>
              <SharedComponent bgColor={'#2c3e50'} color={'#2c3e50'}></SharedComponent>
                  <div className="container my-3 "> 
                <form className="w-75 mx-auto d-flex flex-column justify-content-start align-items-start">
                    <input type="text" id='uname' placeholder='User name' name='uname' className='form-control  form-control-lg border-top-0  border-start-0 border-end-0 mb-5' />
                    <input type="number" id='uage' placeholder='User name' name='uage' className='form-control  form-control-lg border-top-0  border-start-0 border-end-0 mb-5' />
                    <input type="email" id='uemail' placeholder='User name' name='uemail' className='form-control  form-control-lg border-top-0   border-start-0 border-end-0 mb-5' />
                    <input type="password" id='upass' placeholder='User name' name='upass' className='form-control  form-control-lg border-top-0  border-start-0 border-end-0 mb-5' />
                    <button className="btn btn-outline bg-sec"> send Message</button>
                     </form>
                  </div>
              </div>
    )
}
