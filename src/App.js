import React, { Fragment } from 'react';
import { useState } from 'react';
import './App.css';
import Data from './Data';

function App() {
    return (
      	<div className="App">
			<section className='mainBlock'>
				<h1 className='title'>Fast Food Service24</h1>
					{Data.map((elem)=>(
						<div className="fragment" key={elem.id}>
							<div className='imageBlock'>
								<img className='imageItself' src={elem.image}/>
							</div>
							<div className='textBlock'>
								<h4>{elem.name}</h4>
								<p>{elem.price}</p>
							</div>
						</div>
					))}
			</section>
      	</div>
    );
}

export default App;
