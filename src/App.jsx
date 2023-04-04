import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Components/Event';
import NavBar from './Components/NavBar';
import EventChart from './Components/eventChart';

const API_KEY = import.meta.env.CLIENT_ID;

function App() {
  const [list, setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("")
  
  
  
  //console.log(list)
  
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("https://api.seatgeek.com/2/events?client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy")
      const json = await response.json()
      setList(json.events)
      
    }
    fetchEvents().catch(console.error)
    
  }, [])

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((item) => 
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  };

  const filterItems = filterValue => {
    setFilterInput(filterInput)
    if(filterValue !== "") {
      const filteredData = list.filter((item) => 
      Object.values(item)
          .join("")
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  }

  //console.log(filteredResults)
  return (
    <div className="container-fluid">
      <div className='row '>
        <div className='col'>
          <NavBar />
        </div>
        <div className='col '>
          <div className='row p-4 '>
            <div className="col">
              <input 
                className="form-control w-50 p-2"
                type="text"
                placeholder='Search by Name, Title, City, or ID' 
                aria-label="default input example"
                
                onChange={(inputString) => searchItems(inputString.target.value)}
            />
            </div>
            <div class="col">
              <select className='form-select w-25 p-2' name="" id="cities" onSelect={(inputString) => filterItems(inputString.target.value)}>
              {list.map((event) => 
                <option value="event.venue.city" key={event.id}>{event.venue.city}</option>
                
              )}
            </select>
            </div> 
          </div>

          <div className='container'>
            <div className='row'>
              {searchInput.length > 0 
                ? filteredResults.map((event) =>
                  <div className="col-sm-3 p-3">
                    <Event 
                    image = {event.performers[0].image}
                    title = {event.performers[0].name}
                    date = {event.datetime_utc}
                    place = {event.venue.city}
                    id = {event.id}
                    key={event.id}
                    /> 
                  </div>
                )
                : list && Object.entries(list).map(([event]) => 
                  <div className='col-sm-3 p-3'>
                  <Event 
                    image = {list[event].performers[0].image}
                    title = {list[event].performers[0].name}
                    id = {list[event].id}
                    place = {list[event].venue.city}
                    date = {event.datetime_utc}
                  />
                  </div>
                )  
                }
            </div>  
          </div>
          <div className='container-fluid'>
            <EventChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
