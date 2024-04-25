import { useState } from "react";
import MyTitle from "../Components/mytitle.js";
import { validEmail, validPassword } from '../Components/rejex.js';
import { useHistory, useLocation, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min.js";

function LoginDetails(props){

    const location = useLocation();   // We can also out props in function argument and  use it to get location and so on
    const history = useHistory();
    const match = useRouteMatch();   //Routes send rhis data in props or in hooks like we made

    const [userData , setuserData ] = useState({

        email:"",
        pass:""
    })

    const [errors, setErrors] = useState({
        emailError: "", 
        passError: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeData(e)
    {
        if(e.target.name === "email")
        {
            setuserData({
                ...userData,
                email:e.target.value
            })

            if(! validEmail.test(e.target.value) )
            {
                setErrors({
                    ...errors,
                    
                    emailError: "This Email does not match the pattern of email"
                })

            }
            else
            {
                setErrors({
                    ...errors,
                    emailError:""
                    
                })

            }
            

        }
        else if(e.target.name === "pass")
        {
            setuserData({
                ...userData,
                pass:e.target.value
            })

            if(! validPassword.test(e.target.value) )
            {
                setErrors({
                    ...errors,
                    
                    passError: "The password must have small and capital charachters and numbers"
                })

            }
            else
            {
                setErrors({
                    ...errors,
                    passError:""
                    
                })

            }

        }
    }

    const submitData = (e) => {
        e.preventDefault();
        const signStatus = JSON.parse(localStorage.getItem('signed'));
        if(signStatus === 'true')
        {
            history.push("/");
        }
        else
        {
            history.push("/login");
        }
        
        // console.log("Data is Submited")
    }

    const checkData = () => {
        const storedData = JSON.parse(localStorage.getItem('data'));
        const signStatus = JSON.parse(localStorage.getItem('signed'));
        if(signStatus === 'true')
        {
            alert('You are already signed in');
            history.push("/");
        }
        else
        {
            if((userData.email === storedData.userData.email) && (userData.pass === storedData.userData.pass))
            {
                localStorage.setItem('signed', JSON.stringify('true'));
                window.dispatchEvent(new Event('storage'))
                alert('User Signed in Succfully')

            }
            else
            {
                localStorage.setItem('signed', JSON.stringify('false'));
                alert('Failed Login Process')
            }

        }
        
        // console.log(userData.email )
        // console.log(storedData.userData.email)	
    
    }



    return( <>

    <section className="container mt-5 w-50">

    <MyTitle color="dark" content="User Login"/>

    <form onSubmit={(e) => submitData(e)}>
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">Email </label>
                    <input required
                    type="email" 
                    className={`form-control ${errors.emailError ? "border-danger" : "border-success"}`}
                    value={userData.email}
                    onChange={(e) => changeData(e)}
                    name= "email"
                    />
                    <p className="text-danger"> {errors.emailError} </p>
                   
                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label fw-bolder">Password</label>
                    <input type={
                        showPassword ? "text" : "password"
                    } 
                    required
                    className={`form-control ${errors.passError ? "border-danger" : "border-success"}`}
                    onChange={(e) => changeData(e)} 
                    value={userData.pass} 
                    name="pass"/>

                    <p className="text-danger"> {errors.passError} </p>

                    
                </div>
                
                
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange= {() =>
                        setShowPassword((prev) => !prev)
                    }
                />
                <label htmlFor="check" className="ms-1 fw-bold">Show Password</label>
                <br />
                <br />
                
                <div className="d-flex justify-content-center">
                     <button disabled={errors.emailError || errors.passError} type="submit" onClick={checkData}
                     className="btn btn-dark mb-3">Login</button>
                </div>

                {/* <button disabled = {errors.emailError || errors.passError}
                 type="submit" className="btn btn-primary  " >Login</button> */}
                 
            </form>


    </section>
    
    </>
    )

}

export default LoginDetails;