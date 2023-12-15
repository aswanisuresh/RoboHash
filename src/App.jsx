import React, { Component } from 'react'

import './App.css';
export class App extends Component {
  constructor(){
    super();
    this.state={
      people:[],
      searchData:""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then((response) => response.json())
    .then((result) =>this.setState(()=>{
      return{people: result};
    })
    );
  }
  render() {
    const filteredData=this.state.people.filter((people)=>{
      return people.name.toLocaleLowerCase().includes(this.state.searchData);
    });
    return (
      <>
      <h1>ROBOHASH</h1>
      <div >
      <input type="search"
       placeholder='Search' onChange={(event)=>{
        const searchData=event.target.value.toLocaleLowerCase();
        this.setState(()=>{
          return {searchData:searchData};
        });
        }}/>
        </div>
        {
          filteredData.map((people)=>(
            <div className='img1'><div><h2>{people.name}</h2>
            <img alt='robots' src={`https://robohash.org/${people.id}?set=set3`}/>       
               </div>            
                           
            </div>
          )
          )
        }
      </>
    )
  }
}

export default App