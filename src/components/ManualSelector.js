import { Autocomplete, TextField } from "@mui/material";
import { useMemo, useState } from "react";


const ManualSelector = (props) => { 



  const data = useMemo(() => props.jsondata.map(value=>value.country), [])

    const saveHandler = (event, value) => {
        props.autocompleteHandler(event, value);
    } 

    return( 
 
        <div class="flex flex-row bg-gray-50 border-gray-500 border-2 p-4 rounded-xl items-center justify-around mt-8">
    <p className="mr-8">Select Manually: </p>
       <Autocomplete
  blurOnSelect
  onChange={saveHandler}
  options={data}
  sx={{ width: 150}}
  ListboxProps={{
    sx: { fontFamily: "Offside" },

  }}
  renderInput={(params) => <TextField {...params}  InputLabelProps={{sx:{fontFamily:"Offside"}, }} label="Country" />}
/>
       </div>



    )
} 

export default ManualSelector;