import React from 'react'
import Data from './Data';
import { useState } from 'react';
import Popup from './PopUp';

function Menu() {
    const [data,setData] = useState(Data);
    function AddOne(e){
        const changeItem = data.map(elem=>{
            if(elem.id == e.id){
                return {...elem,count:++elem.count,total:elem.total+elem.price};
            }
            
            return elem;
        });  
        setData(changeItem);  
        console.log(e.total);
    }
    function RemoveOne(e){
        const changeItem = data.map(elem=>{
            if(elem.id == e.id && e.count>0){
                return {...elem,count:--elem.count,total:elem.total-elem.price};
            }
            
            return elem;
        });  
        setData(changeItem);
        console.log(e.total);
    }
    const seeTheList = ()=>{
        console.log("Clicked");
    }

  return (
    <div>
        <section className='mainBlock'>
				<h1 className='title'>Fast Food Service24</h1>
                <p className='titlePoem'><i>We say, eat less fast food, whenever you do, choose us!</i></p>
                <Popup allData = {data}/>
                <div className="fragment" >
					{data.map((elem)=>(
							<div className='imageBlock' key={elem.id}>
								<img className='imageItself' src={elem.image}/>
							
                                <div className='textBlock'>
                                    <h3 className='NameOfIt'>{elem.name}</h3>
                                    <p><b>Price:</b>{elem.price}</p>
                                    <p><b>Total:</b>{elem.total}</p>
                                    <h3>{elem.count}</h3>
                                    
                                    <div className='buttonContainer'>
                                        <button className='button' onClick={()=>AddOne(elem)}>buy +</button>
                                        <button className='button' onClick={()=>RemoveOne(elem)}> -</button>
                                    </div>
                                </div>
                            </div>
					))}
                    </div>
			</section>
    </div>
  )
}
export default Menu;
