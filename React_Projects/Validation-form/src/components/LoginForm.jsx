import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    function handleSubmit(e){
        e.preventDefault();

        //!dummy validation
        // no need to setEmail and setpassword here becoz these done in form.
        // setEmail(email); //no need
        // setPassword(password) //no need
        // if(email && password){
        //     console.log(`user success login`)
        //     alert('suuces login') //better to use alert
        // } else{
        //      console.log(`invalid email and password`)
        // }


       //! validation
        let validationErrors = {};

        if(!email){
            validationErrors.email = "Email is required";
        } else if(!/\S+@\S+\.\S+/.test(email)){
            validationErrors.email = "Email is inavalid";
        }

        if(!password){
            validationErrors.password = "Password is required";
        }
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            alert(`Logged in with email : ${email}`);
        }

    }

  return (
    <>
    {/* ChatGPT said: In HTML, the action attribute of a <form> tag specifies where (which URL) the form data should be sent when the form is submitted. */}
        <form action="" onSubmit={handleSubmit}>
    {/* The htmlFor attribute in a <label> element is used to associate the label with a specific input element in HTML. 
        Improves accessibility (for screen readers).
        Provides better user experience (clicking label focuses input).
        It's a best practice in form building.
*/}
            <div>
                <label htmlFor="">Email</label>
                <input type="email" 
                value={email}
                // value get in async in onchamge while typing ,data get updated in email state variable.
                onChange={(e)=>{setEmail(e.target.value)}} /> 
                {errors.email && (
                    <div style={{color: "red"}}> {errors.email}</div>
                )}
            </div>
            
            <div>
                    <label htmlFor="">Password</label>
                    <input type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}} />
                    {errors.password && (
                        <div style={{color:"red"}}>{errors.password}</div>
                    )}
            </div>

            <button type='submit'>Login</button>
          
        </form>
    
    </>
  )
}

export default LoginForm