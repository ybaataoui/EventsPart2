import React, { Component, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label
} from "recharts";


const EventChart = () => {
    const [performersData, setPerformersData] = useState(null);
    const [list, setList] = useState(null)
    console.log(list)

    useEffect(() => {
        const getPerformerScore = async () => {
            const response = await fetch(
              "https://api.seatgeek.com/2/performers?client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy"
            );
            const json = await response.json();
            setPerformersData(json.performers);

            const response1 = await fetch("https://api.seatgeek.com/2/events?client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy")
            const json1 = await response1.json()
            setList(json1.events)
        
        };
        getPerformerScore().catch(console.error);

      }, []);

      return (
        <div>
          <br></br>
          <div>
            <h2>Score Per Event </h2>
            <LineChart
              width={1200}
              height={300}
              data={performersData}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <Line
                type="monotone"
                dataKey="score"
                stroke="#8884d8"
                activeDot="Unspecified"
              />
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" >
                <Label value="Names" offset={-10} position="insideBottom" />
              </XAxis>

              <YAxis
                label={{
                  value: "score",
                  angle: -90,
                  position: "insideLeft",
                  textAnchor: "middle",
                }}
              />
              <Tooltip />
            </LineChart>
          </div>
          <div>
          <h2> Event Popularity by Type</h2>
            <LineChart
              width={1200}
              height={300}
              data={list}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              <Line
                type="monotone"
                dataKey="score"
                stroke="#8884d8"
                activeDot="Unspecified"
              />
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="type" >
                <Label value="Event Type" offset={-10} position="insideBottom" />
              </XAxis>

              <YAxis
                label={{
                  value: "Popularity",
                  angle: -90,
                  position: "insideLeft",
                  textAnchor: "middle",
                }}
              />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      );
    
  };

export default EventChart;