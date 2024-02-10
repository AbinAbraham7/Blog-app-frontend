import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const [input,setInput]=new useState(
       { "name":"",
        "age":"",
        "phone":"",
        "address":"",
        "pincode":"",
        "email":"",
        "password":""
    }
       
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signup",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") 
                {
                    alert("successfully Added")
                    setInput({
                        "name":"",
                        "age":"",
                        "phone":"",
                        "address":"",
                        "pincode":"",
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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name='year' value={input.year} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                               <label htmlFor="" className="form-label">Address</label>
                               <input type="text" className="form-control" name='address' value={input.adress} onChange={inputHandler}/>
                               </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">pincode</label>
                            
                           
                       </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">email</label>
                               <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">password</label>
                               <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>
  )
}

export default Signup