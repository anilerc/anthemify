import React from "react";

const ControlButtons = (props) => {

  console.log("control buttons rerender")


    return ( 


        <div className="flex flex-row justify-center m-4">
       <button style={{color: props.color}} className="drop-shadow-2xl border-black px-4 rounded-sm border-r-2" onClick={props.backwardHandler}><i class="fas fa-backward"></i></button>
       <button style={{color: props.color}} onClick={props.pausePlay} className="drop-shadow-2xl border-black rounded-sm px-4">
         {!props.isPlaying ? <i class="fas fa-play">
           </i> : <i class="fas fa-pause"></i>}
         </button>
 <button style={{color: props.color}} className="px-4 py-4 drop-shadow-2xl rounded-sm border-l-2 border-black" onClick={props.forwardHandler}><i class="fas fa-forward"></i></button>
 </div>
    )
}

export default React.memo(ControlButtons);