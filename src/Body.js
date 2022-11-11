import React from "react";
import Aapp from "./Main";
import Model from "./Model";
import "./style.css";
import "./index.css";
// import L_bar from "./L_bar";
// import R_bar from "./R_bar";




function Body(){
    
    return(<div className="body">
        <div className="content">
            <Aapp/>
            
        {/* <L_bar/>
        <R_bar/> */}
        </div>
    </div>);
}

export default Body;