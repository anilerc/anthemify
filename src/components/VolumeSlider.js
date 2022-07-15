import { Slider } from "@mui/material";
import React from "react";

const VolumeSlider = (props) => {

    

    const saveVolume = (event, nbr) => {
        props.volumeHandler(event, nbr);
    }


    return ( 

<div className="w-60 text-center p-4 hidden md:block">
<div className="flex flex-row justify-center items-center"> 
<i onClick={props.muteHandler} className="fas fa-volume-mute pr-2"></i>
<Slider size="small" sx={{width: 100, color:props.color}} value={props.volume} min={0} max={1} step={0.01} onChange={saveVolume}></Slider>
<i className="fas fa-volume-up pl-2"></i>
</div>
</div>

    )
}



export default VolumeSlider;