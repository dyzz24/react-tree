import React from 'react';
import './App.css';
import { Tree } from './tree/tree';

function App() {
  const treeData = [
    {
      root: true,
      id: 1,
      label: 'Корневая папка',
      children: [
        { id: 11, label: 'Звук',
        children: [
          { id: 111, label: 'Основной звук' },
          { id: 1111, label: 'Звук модального окна' }
        ]
      },
        {
          id: 12,
          label: 'Система',
          children: [
            { id: 111, label: 'part1' },
            { id: 122, label: 'part2' }
          ]
        },
        { id: 2, label: 'other', children: [
          { id: 101, label: 'rootChild' },
          {
            id: 102,
            label: 'shadowRoot',
            children: [
              { id: 1101, label: 'part1' },
              { id: 1202, label: 'part2' }
            ]
          },
          { id: 20, label: 'other' },
          { id: 30, label: 'partOne'}
        ] },
        { id: 300, label: 'partOne'}
      ]
    },
  ];

  return (
    <div className='App'>
      <Tree treeData={treeData}></Tree>
    </div>
  );
}

export default App;
