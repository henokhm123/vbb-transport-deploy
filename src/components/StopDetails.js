import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function StopDetails(props){
  const [stopData, setStopData] = useState("Not loaded...");
  const { id } = useParams();

  useEffect(() => {
      let url = `https://v5.vbb.transport.rest/stops/${id}`;
      fetch(url).then(response => response.json())
                .then(data => setStopData(data));
      },
      [id]);
  

  return (
    <Card>
      <Card.Header>{stopData.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          Stop details for stop with Id {id}
        </Card.Text>
        <p>{JSON.stringify(stopData)}</p> 
        <Link to="/">
          <Button variant="primary">Back</Button>
        </Link>
      </Card.Body>
  </Card>
  )
}

export default StopDetails;