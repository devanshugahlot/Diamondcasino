import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div>
      <Link to={`/Product/${props.id}`}>
        <img
          // onClick={ window.scrollTo( 0, 0 ) }
          src={ props.image } alt={ props.name } />
        <p>{props.name}</p>
        <div>{props.new_price}</div>
        <div>{props.old_price}</div>
      </Link>
    </div>
  );
};

export default Item;
