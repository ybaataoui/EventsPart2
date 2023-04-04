import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";

const API_KEY = import.meta.env.CLIENT_ID;



const eventDetails = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState([]);
    const [eventVenue, setVenue] = useState([])
    const [eventPerformers, setPerformers] = useState([])
    const [eventStats, setStats] = useState([])

    console.log(fullDetails)
    //console.log(eventVenue)

    useEffect(() => {
        const getEventDetail = async () => {
            const details = await fetch(`https://api.seatgeek.com/2/events?id=${params.id}&client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy`);
            const detailsJson = await details.json()
            setFullDetails(detailsJson.events[0])
            setVenue(detailsJson.events[0].venue)
            setPerformers(detailsJson.events[0].performers[0])
            setStats(detailsJson.events[0].stats)
        }

        getEventDetail().catch(console.error);
    }, [])

    return (
     <div className="container">
        <NavBar />
        <h1>{fullDetails.title}</h1>
        <br />
        <div> 
            <img src={eventPerformers.image} alt="" />
        </div>
        <br></br>
        <table className="table">
            <tbody>
                <tr className="text-start">
                <th >Title </th>
                <td>{fullDetails.title}</td>
                </tr> 
                <tr className="text-start">
                <th>Announce Date </th>
                <td>{fullDetails.announce_date} </td>
                </tr>
                <tr className="text-start">
                <th>Type </th>
                <td>{fullDetails.type}</td>
                </tr>
                <tr className="text-start">
                <th>Status </th>
                <td>{fullDetails.status}</td>
                </tr>
                <tr className="text-start">
                <th>Performer Name</th>
                <td>{eventPerformers.name}</td>
                </tr>
                <tr className="text-start">
                <th>Address </th>
                <td>{eventVenue.address} {eventVenue.extended_address}</td>
                </tr>
                <tr className="text-start">
                <th>Venue Capacity </th>
                <td>{eventVenue.capacity}</td>
                </tr>
                <tr className="text-start">
                <th>Buy Tickets</th>
                <td><a href={eventVenue.url}>{eventVenue.url}</a></td>
                </tr>
                <tr className="text-start">
                <th>Ticket Price Start From : </th>
                <td>${eventStats.lowest_price} </td>
                </tr>
                
            </tbody>
        </table>

     </div>
    );
  };
  
  export default eventDetails;