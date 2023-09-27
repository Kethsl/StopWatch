import React, { useState, useEffect } from "react";
 // We are importing these hooks that way we can use them
 import './Stop.css';


function Stopwatch() {

    const [time , setTime ] = useState(0) // in this line we created time, we set is to = to 0. This is , that way our clock will start off with 0 and will store time.

    const [isRunning, setIsRunning] = useState(false); // We created is running, And set a boolean in it to check if it is running or not.

    useEffect (() => {  //this goes along with line 32 , we are setting up the start and stop. 
     let intervalId; // we are setting an interval Id here 
     if (isRunning){ // 
        intervalId = setInterval (() => setTime (time + 1), 10); // this interval Id will hold setTime as well as time. The setInterval is a function that is used that calls in millisecinds.
     }
     return () => clearInterval (intervalId); 
    }, [isRunning,time]);

// In these lines we are creating variables using Math.Floor. The reason why we are using math.Floor is because it rounds down to the nearest intenegr. 

    const hours = Math.floor(time/360000);  // converts it to milliseonds
    const minutes = Math.floor((time%360000)/6000); // "%" this is used to find remaineder in the line above. and divide it 6000, to miniutes.

    const seconds = Math.floor((time%6000)/100); // Find remsindrt above. As well as diving that by 100, To get seconds

    const milliseconds = time % 100; // Find remainder of the variable time, which is what we have been using. We are diving it by 100

    // the way the code reads is for example "360000 in an hour and so on"

    const startAndStop = () => { // we are creating a function that to start and to Stop the function
        setIsRunning(!isRunning);
}

const reset = ()=> { // this is creating a variable 
    setTime(0);
}
// we are using lines 22-27 and converting them into strings.
// pad start links a string to another string. I used pad start that way all of the intervals show up on the screen
// A tenory operator is used on line 50 in 

    return (
      <>
      <div className="background">
        <div className="container"> 
          <p className="time">
  
            {hours}:{minutes.toString().padStart(2, "0")}: 
            {seconds.toString().padStart(2, "0")}: 
            {milliseconds.toString().padStart(2, "0")}
          </p>
            <button className="start"onClick={startAndStop}> 
              {isRunning ? "Stop" : "Start"} 
            </button>
            <button className="stop" onClick={reset}> Reset
              
            </button>
          </div>
          </div>
    </>
    )
}

export default Stopwatch
