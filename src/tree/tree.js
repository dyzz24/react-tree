import React, { useState } from 'react';
import './tree.css';
import { TreeItem } from './tree-item/tree-item';

export const Tree = ({ treeData }) => {
  const [expanded, toggleState] = useState(true);
  const toggle = () => {
    console.log(treeData);
    toggleState(!expanded);
  };

  const parseTreeItems = itemList => {
    if (itemList && itemList.length > 0) {
      const parsedTree = itemList.map((item, index) => {
        if (
          item.children &&
          Array.isArray(item.children) &&
          item.children.length > 0
        ) {
          return (
            <div key={item.id || index} className = 'tree'>
              <header>
              <div className='toggleDiv' onClick={toggle}></div>
              <span>{item.label}</span>
              </header>
              <div className = {expanded ? 'treeBody open' : 'treeBody close'}>
              <Tree  treeData={item.children}></Tree>
              </div>
            </div>
          );
        } else {
          return <TreeItem  listData={item} key={item.id || index}></TreeItem>;
        }
      });

      return parsedTree;
    } else {
      return null;
    }
  };

  return (
   <> 
  <ul>{parseTreeItems(treeData)}</ul>
  </>
  );
};
