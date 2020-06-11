import React from "react";

function Acadmey (props) {
    return(
        <div>
        <h1>We are offering {props.courseName}</h1>
        <h1>we are also offering {props.onlineCourse}</h1>
        </div>
    )
}
export default Acadmey;