import React from 'react';
import { Link } from 'react-router-dom';

const InventoryList = ({ items, title }) => {

  
    // return (
    //   <div>
    //     <h3>{title}</h3>
    //     {items &&
    //       items.map(item => (
    //         <div key={item._id} className="card mb-3">
    //           <p className="card-header">
    //             item on {item.createdAt}
    //           </p>
    //           <div className="card-body">
    //             <Link to={`/item/${item._id}`}>
    //               <p>{item.itemText}</p>
    //               <p className="mb-0">
    //                 Items: {item.itemCount} || Click to{' '}
    //                 {item.itemCount ? 'see' : 'start'} the discussion!
    //               </p>
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //   </div>

return (
  <div>
    <h3>{title}</h3>
        <div key="{item._id}" className="card mb-3">
          <p className="card-header">
            Item Name
          </p>
          <div className="card-body">
          <div>Price:</div>
          <div>Quantity:</div>
          <div>Size:</div>
          <div>brand:</div>
          </div>
        </div>
  </div>
);
}
  
  
  

export default InventoryList;