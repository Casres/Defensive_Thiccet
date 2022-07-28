import React from 'react';
import { Link } from 'react-router-dom';

const InventoryList = ({ items, title }) => {
    if (!items.length) {
      return <h3>No Inventory Yet</h3>;
    }
  
    return (
      <div>
        <h3>{title}</h3>
        {items &&
          items.map(item => (
            <div key={item._id} className="card mb-3">
              <p className="card-header">
                Item Name {item.createdAt}
              </p>
              <div className="card-body">
                <Link to={`/item/${item._id}`}>
                  <p>{item.itemText}</p>
                  <p className="mb-0">
                    Items: {item.itemCount} || Click to{' '}
                    {item.itemCount ? 'see' : 'start'} the stuff!
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  

export default InventoryList;