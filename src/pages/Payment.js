import Navbar from "./components/Navbar";
import './Payment.css'
import visa from "./images/vis.png"

export default function Payment(){
    return(
        <>
        <nav>
        <Navbar username="anc"/>
        </nav>
        <body>
           <div className="container" > 
           <div className="grid-container">
        
            <div className="grid-item-1" >
        
                <div className="grid-item-1-top"> 
                    <div className="inner-left-text">
                         Receipt for <br/> MIT-WPU University <br/> <hr/>
                    </div>
                    <div className="inner-left-text">
                         Amount : Rs 1000 <hr/> 
                    </div>
                    <div className="inner-left-text" >
                        Date : May 20 , 2022 <hr/> 
                    </div>
                    <div >                                    </div>
            
                </div>
            
                <div className="grid-item-1-bottom" >
                         <div className="inner-right-text">Cancel your payment</div> 
                </div>
                
            </div>
        
            <div className="grid-item-2"> 
                <div className="box-1"> 
                    <div> 
                        <div className="payment-text"> Payments </div> 
                        <div className="inner-right-text"> Pay with Credit card </div>  
                    </div> 
                    <div className="img"><img src={visa} ></img> </div>
                </div> 
        
                <div className="box-2"> 
                    <div className="input-1">
                        <div className="inner-right-text"> Credit card number </div>  
                        <input className="text-box" type="number"/>  
                    </div>
                    <div className="input-2">
                        <div className="input-2-1">
                            <div className="inner-right-text"> Expiration </div>      
                            <select className="text-box" >
                                <option value="" disabled selected hidden>Select month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>    
                        </div> 
                        <div className="input-2-2">
                            <div></div>
                            <input className="text-box" type="number"/>  
                        </div>
                    </div>
                    <div className="input-3">
                        <div className="input-3-1">
                            <div className="inner-right-text"> CVV </div>
                            <input className="text-box" type="number"/>  
                        </div>
                        <div className="input-3-2">
                            <div></div>
                            <button className="pay-btn">
                                    <p className="pay-text">Pay Now</p>
                            </button>
                            
                        </div>
                    </div>
                    </div> 
        
                <div className="box-3"> 
                    <p>or select other payment option</p>
                </div> 
                
            </div>
          </div>
         
        </div>  
        </body>
        </>
    )
}