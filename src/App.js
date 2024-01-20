import { useState } from 'react';
import './App.css';

function App() {
	const [inputValue,setInputValue] = useState("");
	const [array,setArray] = useState([]);

	const handleClick=(e)=>{
		setInputValue(e.target.value);
	}
	const handleKey= (e)=>{
		if(e.key === 'Enter'){
			setToArray(inputValue);
			setInputValue("");
		}
	}
	const setToArray = (valueOf)=>{
		const newArr = [...array,{value:valueOf,id:array.length,done:false}];
		setArray(newArr);
		console.log("Heeey");
	}
	const deleteIt = (e)=>{
		const AnotherArray = array.filter((elem)=> elem !== e);
		// const newArray = myArray.filter((elem) => elem !== elementToDelete);
		setArray(AnotherArray);
		// console.log("Hhbjn");
	}

    return (
      	<div className="App">
			<input onKeyDown={handleKey} 
					value={inputValue} 
					onChange={handleClick} 
					className='inputEdits' 
					placeholder='Type something and enter'
					type='text'>
			</input>
			<div>
				{array.map((elem)=>(
					<h3 key={elem.id}>{elem.value} <input onClick={()=>deleteIt(elem)} type='checkbox'></input></h3>
				))}
			</div>
      	</div>
    );
}

export default App;
