import React, { useState } from 'react';
import './tree.css';
import { TreeItem } from './tree-item/tree-item';

export const Tree = ({ treeData, canClose, label }) => {
  const [expanded, toggleState] = useState(true);
  const [selectedCount, selectItems] = useState([]);
  const toggle = () => {
    toggleState(!expanded);
  };

  const changeChild = (id, status) => {
    if(status) {
      selectItems(item => item.concat(id))
    } else {
      selectItems(item => item.filter((elem) => elem !== id));
    }

  }



  const parseTreeItems = itemList => {
    if (itemList && itemList.length > 0) {
      const parsedTree = itemList.map((item, index) => {
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
    {selectedCount.length > 0 ? <span className = 'count'>Выбрано элементов: {selectedCount.length}</span> : null}
    </header>
      <div className={expanded ? 'treeBody open' : 'treeBody close'}>
        <ul>{parseTreeItems(treeData)}</ul>
      </div>
    </div>
  );
};
