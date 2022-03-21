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
        </>
        
    )
}

export default Accounts;