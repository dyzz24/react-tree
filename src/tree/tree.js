import React, { useState } from 'react';
import './tree.css';
import { TreeItem } from './tree-item/tree-item';

export const Tree = ({ treeData, canClose, label }) => {
  const [expanded, toggleState] = useState(true);
  console.log(treeData, canClose);
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
              <Tree key={item.id || index}
                treeData={item.children}
                canClose={true}
                label={item.label}
              ></Tree>
          );
        } else {
          return <TreeItem listData={item} key={item.id || index}></TreeItem>;
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
    {canClose && <div className='toggleDiv' onClick={toggle}></div>}
    {label && <span>{label}</span>}
    </header>
      <div className={expanded ? 'treeBody open' : 'treeBody close'}>
        <ul>{parseTreeItems(treeData)}</ul>
      </div>
    </div>
  );
};
