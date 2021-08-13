import React from "react";

const List = ({ people , setPeople}) => {
  const removePerson = (id)=>{
   let newPeople = people.filter((person)=>person.id!==id)
   setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return <article key={id} className="person">
            <img src={image} alt={name}/>
          <div style={{display:"flex",justifyContent: "space-between",
    alignItems: "center"}}>
            <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            </div>
            <p style={{padding:"6px",backgroundColor:"#E83181",color:"white",textTransform:"capitalize",borderRadius:"5px",cursor:"pointer"}} onClick={()=>removePerson(id)}>remove</p>
          </div>
          
        </article>
      })}
    </>
  );
};

export default List;
