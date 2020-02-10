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
        {
          id: 1,
          label: 'Звук',
          children: [
            { id: 1, label: 'Основной звук' },
            { id: 2, label: 'Звук модального окна' }
          ]
        },
        {
          id: 2,
          label: 'Система',
          children: [
            { id: 1, label: 'Глобальные настройки системы' },
            { id: 2, label: 'Локальные настройки системы' }
          ]
        },
        {
          id: 3,
          label: 'Прочие установки',
          children: [
            { id: 1, label: 'Программа 1' },
            { id: 2, label: 'Программа 2' },
            { id: 33, label: 'Программа 3' },
            {
              id: 4,
              label: 'Программа 4',
              children: [
                { id: 1, label: 'Подпрограмма 4-1' },
                {
                  id: 2,
                  label: 'Подпрограмма 4-2',
                  children: [
                    {
                      id: 1,
                      label: 'Звук',
                      children: [
                        { id: 1, label: 'Основной звук' },
                        { id: 2, label: 'Звук модального окна' }
                      ]
                    },
                    {
                      id: 2,
                      label: 'Система',
                      children: [
                        { id: 1, label: 'Глобальные настройки системы' },
                        { id: 2, label: 'Локальные настройки системы' }
                      ]
                    },
                    {
                      id: 3,
                      label: 'Прочие установки',
                      children: [
                        {
                          id: 1,
                          label: 'Программа 1',
                          children: [
                            {
                              id: 1,
                              label: 'Звук',
                              children: [
                                { id: 1, label: 'Основной звук' },
                                { id: 2, label: 'Звук модального окна' }
                              ]
                            },
                            {
                              id: 2,
                              label: 'Система',
                              children: [
                                {
                                  id: 1,
                                  label: 'Глобальные настройки системы'
                                },
                                { id: 2, label: 'Локальные настройки системы' }
                              ]
                            },
                            {
                              id: 3,
                              label: 'Прочие установки',
                              children: [
                                { id: 1, label: 'Программа 1' },
                                { id: 2, label: 'Программа 2' },
                                { id: 33, label: 'Программа 3' },
                                {
                                  id: 4,
                                  label: 'Программа 4',
                                  children: [
                                    { id: 1, label: 'Подпрограмма 4-1' },
                                    { id: 2, label: 'Подпрограмма 4-2' }
                                  ]
                                }
                              ]
                            },
                          ]
                        },
                        { id: 2, label: 'Программа 2' },
                        { id: 33, label: 'Программа 3' },
                        {
                          id: 4,
                          label: 'Программа 4',
                          children: [
                            { id: 1, label: 'Подпрограмма 4-1' },
                            { id: 2, label: 'Подпрограмма 4-2' }
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            }
          ]
        },
      ]
    }
  ];

  return (
    <div className='App'>
      <Tree treeData={treeData}></Tree>
    </div>
  );
}

export default App;
