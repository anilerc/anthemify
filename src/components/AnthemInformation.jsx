import React from "react";

const AnthemInformation = props => {

    const {title, country, imgs} = props.data;


return(

    <React.Fragment>
    <h1 style={{color: props.color}} className="text-2xl font-light text-center">{country}</h1>
         <h2 className='text-xl mt-2 font-bold text-center'>{title}</h2>
<img loading="lazy" className="w-32 h-32 mt-8 mb-8 rounded-2xl drop-shadow-xl box-shadow-lg" src={imgs} alt="Country Flag" />
</React.Fragment>
)

}


export default React.memo(AnthemInformation);
