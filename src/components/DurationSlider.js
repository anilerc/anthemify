import { Slider } from "@mui/material";

const DurationSlider = (props) => {
    console.log("Duration slider rerendered")

const saveDuration = (event, nbr) => {
    console.log(nbr)
    if(isFinite(nbr)){
    props.durationChangeHandler(event, nbr);
    }
}

    return(

<Slider sx={{width: 200, color:props.color}} value={props.cTime} min={0} max={1} step={0.01}
onChange={saveDuration} ></Slider>

    )
}

export default DurationSlider;