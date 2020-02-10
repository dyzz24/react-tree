import React, { useState, useContext } from 'react';
import './tree.css';
import { TreeItem } from './tree-item/tree-item';
import {ContextApp} from "../context/context.js";

export const Tree = ({ treeData, canClose, label, root }) => {
  const [expanded, toggleState] = useState(true);
  const [selectedCount, selectItems] = useState([]);
  const toggle = () => {
    toggleState(!expanded);
  };

  const {state, dispatch} = useContext(ContextApp);
  const changeChild = (id, status) => {
    if(status) {
      selectItems(item => item.concat(id))
      dispatch({type: 'child-add'})
    } else {
      selectItems(item => item.filter((elem) => elem !== id));
      dispatch({type: 'child-remove'})
    }



  }




  const parseTreeItems = itemList => {
    if (itemList && itemList.length > 0) {
      const parsedTree = itemList.map((item, index) => {
        if(item.root) {
          return (
            <Tree key={item.id || index}
                treeData={item.children}
                canClose={true}
                label={item.label}
                root = {true}></Tree>
          )
        }
        if (
          item.children &&
          Array.isArray(item.children) &&
          item.children.length > 0
        ) {
          return (
              <Tree key={item.id || index}
                treeData={item.children}
                canClose={true}
                label={item.label}
              ></Tree>
          );
        } else {
          return <TreeItem changeChild = {changeChild} listData={item} key={item.id || index}></TreeItem>;
        }
      });

      return parsedTree;
    } else {
      return null;
    }
  };

  return (
    <div className = 'tree'>
    <header>
    {canClose && <div className={expanded ? 'toggleDiv' : 'toggleDiv close'} onClick={toggle}></div>}
    {label && <span onClick={toggle}>{label}</span>}
    {root ? <span className = 'maincount'>Всего элементов выбрано: {state.selectedItems} </span>: ''}
    {selectedCount.length > 0 ? <span className = 'count'>Выбрано элементов в группе {label} : {selectedCount.length}</span> : null}
    </header>
      <div className={expanded ? 'treeBody open' : 'treeBody close'}>
        <ul>{parseTreeItems(treeData)}</ul>
      </div>
    </div>
  );
};
