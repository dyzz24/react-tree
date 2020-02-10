import React from 'react';
import './tree-item.css';


export const TreeItem = (props) => {

  const {label} = props.listData;


// console.log(props);
  return (
    <li>
    <label>{label}
    <input type = 'checkbox'></input>
    </label>
    </li>
  )
}

