import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';


function App() {

  const tabList = [
    {
      label: 'Tab 1',
      content: 'Content for tab 1 would go here'
    },
    {
      label: 'Tab 2',
      content: 'Alternative content for tab 2 would go here'
    },
    {
      label: 'Tab 3',
      content: 'Important content for tab 3 would go here'
    }
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="App">
      <Tabs tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Display tabContent={tabList[activeTab].content} />

    </div>
  );
}

export default App;
