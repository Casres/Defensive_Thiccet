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
                <Link
                  to={`/profile/${item.username}`}
                  style={{ fontWeight: 700 }}
                  className="text-light"
                >
                  {item.username}
                </Link>{' '}
                item on {item.createdAt}
              </p>
              <div className="card-body">
                <Link to={`/item/${item._id}`}>
                  <p>{item.itemText}</p>
                  <p className="mb-0">
                    Reactions: {item.reactionCount} || Click to{' '}
                    {item.reactionCount ? 'see' : 'start'} the discussion!
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
  };
  
  

export default InventoryList;