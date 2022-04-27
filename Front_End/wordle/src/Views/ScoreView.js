import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";
import Card from "react-bootstrap/Card";
import BarChart from "../Components/scores/scoresBoiler";

function ScoreView() {
  const [scores, setScores] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/score");
        setScores(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const renderTables = (
    <Card
      bg="secondary"
      key="Secondary"
      text="white"
      style={{ width: "60rem" }}
      className="mb-2"
    >
      <Card.Header>
        <center>Top Scores</center>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <center>
            <BarChart data={scores} />
          </center>
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <div className="score">
      {scores ? <h1>{renderTables}</h1> : <h1>Nothing to show</h1>}
    </div>
  );
}

export default ScoreView;
