import React, { useState } from 'react'

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    function handleSubmit(e){
        e.preventDefault();
        //! Dummy Validation
        // no need to setEmail and setpassword here becoz these done in form.
        // if(email && password === confirmPassword){
        //     console.log('user signup succees')
                // alert('suuces login') //better to use alert
        // } else{
        //     console.log(`invalid credential`)
        // }
        const validationErrors = {};

        if(!email){
            validationErrors.email = "Email is required";
        } else if(!/\S+@\S+\.\S+/.test(email)){
            validationErrors.email = 'Email is invalid'
        }

        if (!password) validationErrors.password = "Password is required";
    if (!confirmPassword)
      validationErrors.confirmPassword = "Please confirm your password";

    if (password && confirmPassword && password !== confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";
    

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
        alert(`Signed Up with email : ${email}`)
    }
    }

  return (
   <>
   <form action="" onSubmit={handleSubmit}>
   <div>
        <label htmlFor="">Email</label>
        <input type="email" 
        value={email}
        // jo email input box me dale hai vo target value hai or vo email state variable me store hoga using setEmail.
        onChange={(e)=>{setEmail(e.target.value)}}/>
        {/* error show */}
        {errors.email && (
            <div style={{color: "red"}}>{errors.email}</div>
        )}
    </div>

    <div>
        <label htmlFor="">Password</label>
        <input type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}} />

         {/* error show */}
        {errors.password && (
            <div style={{color: "red"}}>{errors.password}</div>
        )}
    </div>

    <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password"
        value={confirmPassword}
        onChange={(e)=>{setConfirmPassword(e.target.value)}} />

         {/* error show */}
        {errors.confirmPassword && (
            <div style={{color: "red"}}>{errors.confirmPassword}</div>
        )}
    </div>

    <button type='submit'>Sign Up</button>
   </form>
   
   </>
  )
}

export default SignUpForm