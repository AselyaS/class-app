import React, {useState} from "react";

const Cell = (props) => {
    const [value, setValue] =useState(props.value);
    return (
        <td onClick={() => {
            console.log("Clicked on : ", value);
            if (value === undefined) {
                setValue("A")    
            } else if (value === "A") {
                setValue("B");
            } else {
                setValue(undefined);
            }
        }}
        className={props.className}
        >
            {value}
        </td>
    );
};

export default Cell;