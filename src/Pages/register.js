import { useEffect, useState } from "react";
import MyTitle from "../Components/mytitle.js";
import { validEmail, validPassword, validUsername } from '../Components/rejex.js';
import { useHistory, useLocation, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min.js";

function RegisterDetails(){

    // const location = useLocation();   // We can also out props in function argument and  use it to get location and so on
    const history = useHistory();
    // const match = useRouteMatch();   //Routes send rhis data in props or in hooks like we made

     const storedData = JSON.parse(localStorage.getItem('data'));
     const [data, setData] = useState(storedData);

     useEffect(()=>{

        localStorage.setItem('data', JSON.stringify(data));

     } ,[data])

     const [userData , setuserData ] = useState({
        name:"",
        email:"",
        userName:"",
        pass:"",
        confirmPass:""
    })

    const [errors, setErrors] = useState({
        nameError:"",
        emailError: "",
        userNameError:"", 
        passError: "",
        confirmPassError:""
    })

    

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
        else if(e.target.name === "name")
        {
            setuserData({
                ...userData,
                name:e.target.value
            })

            setErrors({
                ...errors, 
                nameError:  e.target.value.length < 3 && "Name must have at least 3 charechters"
            })

        }
        else if(e.target.name === "userName")
        {
            setuserData({
                ...userData,
                userName:e.target.value
            })

            if(! validUsername.test(e.target.value) )
            {
                setErrors({
                    ...errors,
                    
                    userNameError: "The UserName can have at least 3 charachters and not have spaces"
                })

            }
            else
            {
                setErrors({
                    ...errors,
                    userNameError:""
                    
                })

            }

        }
        else if(e.target.name === "confirmPass")
        {
            setuserData({
                ...userData,
                confirmPass:e.target.value
            })

            if(e.target.value !== userData.pass)
            {
                setErrors({
                    ...errors, 
                    confirmPassError: "Confirmed Password does not match the Password"
                })

            }
            else
            {
                setErrors({
                    ...errors, 
                    confirmPassError: ""
                })

            }
            

        }
    }

    const submitData = (e) => {
        e.preventDefault();
        alert('You have Signed Up Succefully');
        history.push("/login");
        console.log("Data is Submited")
    }

    // const [id, setId] = useState(1);
    const saveData = () =>{

        setData({...data,
             userData});

        //   setId(id+1);   

    }



    return( <>

    <section className="container mt-5 w-50">

    <MyTitle color="dark" content="User Registration"/>

    <form onSubmit={(e) => submitData(e)}>

               <div className="mb-3">

                <label htmlFor="exampleInputName" className="form-label fw-bolder">Name </label>
                <input required
                type="text" 
                className={`form-control `}
                value={userData.name}
                onChange={(e) => changeData(e)}
                name= "name"
                />

                <p className="text-danger"> {errors.nameError} </p>
               </div>
               
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

                    <label htmlFor="exampleInputUserName" className="form-label fw-bolder">Username</label>
                    <input type="text"
                    required
                    className={`form-control ${errors.userNameError ? "border-danger" : "border-success"}`}
                    onChange={(e) => changeData(e)} 
                    value={userData.userName} 
                    name="userName"/>

                    <p className="text-danger"> {errors.userNameError} </p>

                    
                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputPassword1" className="form-label fw-bolder">Password</label>
                    <input type="password"
                    required
                    className={`form-control ${errors.passError ? "border-danger" : "border-success"}`}
                    onChange={(e) => changeData(e)} 
                    value={userData.pass} 
                    name="pass"/>

                    <p className="text-danger"> {errors.passError} </p>

                    
                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputPassword2" className="form-label fw-bolder">Confirm Password</label>
                    <input type="password"
                    required
                    className={`form-control ${errors.confirmPassError ? "border-danger" : "border-success"}`}
                    onChange={(e) => changeData(e)} 
                    value={userData.confirmPass} 
                    name="confirmPass"/>

                    <p className="text-danger"> {errors.confirmPassError} </p>

                    
                </div>
                
                
                
                <br />
                <br />
                
                <div className="d-flex justify-content-center justify-content-evenly">
                     <button disabled={errors.emailError || errors.passError || errors.nameError ||
                    errors.confirmPassError || errors.userNameError} type="submit" onClick={saveData}
                    className="btn btn-dark mb-3">Register</button>

                    
                </div>

                
                 
            </form>


    </section>
    
    </>
    )


}

export default RegisterDetails;