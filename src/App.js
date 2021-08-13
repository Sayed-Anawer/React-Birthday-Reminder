import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  const [text,setText] = useState("clear all")
  const toogleBtn = ()=>{
    if(people===data && text =="clear all"){
      setPeople([])
      setText("back to home")
    }
    else if(people.length==0){
      setPeople(data)
      setText("clear all")
    }
  }
  return (
    <main>
      <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people = {people} setPeople={setPeople}></List>
      <button onClick={toogleBtn}>{text}</button>
      </section>
    </main>
  )
}

export default App;
