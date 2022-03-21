import React from "react";
import "./Accounts.css"

//importing material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

const Accounts = () =>{

    return(
        <>
            <div className="frame"></div>
        <div className="account">Accounts</div>
        <div className="box1"></div>
        <div> <ArrowBackIosIcon className="arrow-back"/> </div>
        <div className="box1"></div>
        <div className="pro-box"></div>
        <div className="pro">PRO</div>
        <div className="upgrade">Upgrade your account</div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="addnow">Add Now</div>
        <div className="box2"></div>
        <div className="main-wallet"> Main wallet</div>
        <div className="num1">$2049.95</div>
        <div className="prog"></div>
        <div className="per">+32%</div>
        <div className="prog1"></div>
        <div className="box3"></div>
        <div className="saving-wallet"> Saving Wallet</div>
        <div className="num2">$65.14 </div>
        <div className="per1">-0.4%</div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="box4"></div>
        <div className="summer-wallet">Summer Wallet</div>
        <div className="per3">$547.56</div>
        <div className="per2">+2.6%</div>
        <div className="line5"></div>
        <div className="line6"></div>
        </>
        
    )
}

export default Accounts;