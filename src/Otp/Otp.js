import React, { useState,useEffect,useRef } from "react";
import pic from "../images/mitLogo.png"
import pic1 from "../images/lock.png"
import './otp.css'
import { useLocation } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import app from "../firebase";

export default function Otp(){
    const history = useNavigate();
    const location = useLocation();
    const[otp,setOtp] = useState(new Array(6).fill(""));
    function set_recaptchaVerifier(number) {
        const auth = getAuth();
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{'size':'invisible'}, auth);
        recaptchaVerifier.render();
        return   signInWithPhoneNumber(auth,number,recaptchaVerifier);
    }
    async function Recaptcha(){
        try{
            const appVerifier = await  set_recaptchaVerifier(location.state.mobile);
            window.obj=appVerifier;
        }
        catch(error){
                alert(error.message);
        }
        
}

    useEffect(() => {
        Recaptcha();
    },[]);

    
   
    const handleChange =(element,index) => {

        if(isNaN(element.value))
        {
            return false;
        }

        setOtp([...otp.map((d,idx)=>(idx===index)? element.value : d)]);

        if(element.nextSibling)
        {
            element.nextSibling.focus();
        }

    }

    const otp_validate = async (e) =>{

            e.preventDefault();
            let otp_etr = otp.join("");
            if(otp_etr==='')
            {
                alert("OTP Field cannot be empty");
                return;
            }
            try{
                await window.obj.confirm(otp_etr)
                console.log("otp verified");
                history("/user-details");
                
            }
            catch(error){
                alert("Please enter a valid otp");
            }

    }
    
    
    

    return(
        <>
        <div className="otp">
        <header>
            <nav>
                <div className="blue-box">
                    <div className="white-box">
                        <img class="logo" src={pic} alt="MIT Logo" />
                    </div>
                    <p class="logo-txt"><strong>MIT World Peace University</strong> | Pune</p>
                </div>
            </nav>
        </header>
        <body>
        <div class="container">
            <img className="lock-img" src={pic1} alt="" />
            <p>A One Time Password has been sent to registered mobile number and email
            Please enter the OTP below to verify.</p>
            <form onSubmit={otp_validate}>
            <div id='recaptcha-container'></div>
                <div className="userInput">
                    {
                        otp.map((data,index) => {
                            return <input type="text" 
                                        name='otp' 
                                        maxLength="1" 
                                        key = {index} 
                                        value= {data}
                                        onChange={e=>handleChange(e.target,index)}
                                        onFocus ={e => e.target.select()}
                                        />
                        })
                    }
                    
                </div>
                <div className="Verify">
                    <button>Verify</button>
                </div>
                
        </form>
        </div>
    </body>
    </div>
    </>
    )
}