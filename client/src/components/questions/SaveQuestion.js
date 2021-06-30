import React, {useState} from "react";



function SaveQuestion({handleAnswer, info}) {
    const handleClick =  () => {
        handleAnswer({info});
    }


  return (

           
          <div className="favorite" >
            <input type="checkbox" onClick={handleClick}></input>
          </div>           
          
           
    
  );
}

export default SaveQuestion;