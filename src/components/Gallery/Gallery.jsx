import React, { useEffect } from 'react'

export default function Gallery() {
    // useEffect(Function() {}, [])
    useEffect(() => {
        console.log("Hello from Gallery");
        
    })
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <h1>Gallery</h1>
                    <ul>
                        <li><Link to="Web">Web</Link></li>
                        <li><Link to="Mobile">Mobile</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

 
