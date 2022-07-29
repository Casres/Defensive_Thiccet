import React from "react";
import { QUERY_Product } from "../utils/queries";
import { useQuery } from "@apollo/client";

const InventoryList = ({ items, title }) => {
  const { loading, data } = useQuery(QUERY_Product);
  const productData = data?.product || [];
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
  console.log(data);

  return (
    <div>
      <h3>Category</h3>
      <div className="card-container">
        {productData.map((item) => (
          <div key={item._id} className="card mb-3">
            <p className="card-header">{item.productName}</p>
            <div className="card-body">
              <div>Price:{item.productPrice}</div>
              <div>Quantity:{item.productStock}</div>
              <div>Size:{item.productSize}</div>
              <div>brand:{item.brandName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
