import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
// import { Dropdown } from 'bootstrap'
import dropdown_icon from "../Assets/dropdown_icon.png"
import Item from './Item'

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='ShopCategory'>
      <img src={props.banner} alt="" />

      <div>
        <img src={dropdown_icon} alt="" />
      </div>
      <div>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>

    </div>
  )
}

export default ShopCategory