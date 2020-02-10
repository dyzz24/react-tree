import React from 'react';
import './tree-item.css';


export const TreeItem = (props) => {

  const {label, id} = props.listData;

const emitEvent = (id, event) => {
    props.changeChild(id, event.target.checked)
}

  return (
    <li>
    <label>{label}
    <input type = 'checkbox' onChange = {e => emitEvent(id, e)}></input>
    </label>
    </li>
  )
}

