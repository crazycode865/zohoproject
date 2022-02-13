import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = ()=>{
    const [inputvalue,setinputvalue] = useState("");
    const [allEntry,setallEntry] = useState([]);

    const submitform = (e) =>{
        e.preventDefault();
        const newEntry = {inputvalue:inputvalue};

        setallEntry([...allEntry,newEntry]);
        
    }

    return (
        <>
        <form onSubmit={submitform}>
        <h3>what would you like to share with world?</h3>
            <textarea  type='text ' id="area" name="inputvalue" value={inputvalue} onChange={(e)=> setinputvalue(e.target.value)} cols='80' rows='8' autoComplete='off'></textarea>
            <br></br>
            <button className='btn btn-success a1'>Submit</button>
            </form>
            <div>
                {
                    allEntry.map((ele)=>{
                        return(
                            <div>
                            <p>{ele.inputvalue}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}
export default Home;