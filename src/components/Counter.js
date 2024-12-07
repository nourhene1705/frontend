import React, { useEffect, useState } from 'react'

const Counter =() =>{
    const [count,SetCount]=useState(0);
    useEffect (()=> {
        document.title =`count:${count}`;
    }, [count]);

    

  return (
    <div stayle={{textAlign:"center"}}>
        <h1>Counter</h1>
    <p>current count :{count} </p>
    <button onClick={()=> SetCount(count +1)}>Incerement</button>
    <button onClick={()=> SetCount(count -1)}>Decerement</button>

    </div>
  );
}

export default Counter