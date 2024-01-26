import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Popup = ({allData}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [data,setData] = useState([]);

  const openPopup = () => {
    setPopupOpen(true);
    setData([...allData]);
    
  };

  let closePopup = () => {
    setPopupOpen(false);
  };
  let totalAmount =0;
    data.map(item=>{
     item.total>0 && (totalAmount += item.total);
       return null;
     })

  return (
    <div>
      <FontAwesomeIcon className='Bucket' onClick={openPopup} icon={faCartShopping} />
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <p>Foods you selected to order are:</p>
            
            {data.map((item)=>{
              if(item.count > 0){

                return (
                  <div key={item.id}>
                    <p>{item.name}: {item.count}</p>
                  </div>
                )
              }
            })
            }
            <br></br>
          <h3>{totalAmount >0 ? "Total is: " + totalAmount:"No purchase yet"}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;