import axios from 'axios'
import React, { useState } from 'react'

const Login1 = () => {
    const [input,setInput]=new useState(
        {
            "email":"",
            "password":""
        
    }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") 
                {
                    alert("successfully Added")
                    setInput({
                        "email":"",
                        "password":""
                    
                    }


                    )
                    
                } else {
                    alert("something went wrong")
                    
                }
            }
        )

    }
  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">
                                Password
                            </label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Login</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href=''>New Users Click Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login1