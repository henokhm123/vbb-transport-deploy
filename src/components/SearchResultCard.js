import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function SearchResultCard(props){
  const {item} = props;
  return (
    // <div className="CardContainer">
    //   <h2>{item.name}</h2>
    // </div>
    <Card>
      <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Link to={`/stop_details/${item.id}`}>
            <Button variant="primary">Stop Details</Button>
          </Link>
        </Card.Body>
    </Card>
  )
}

export default SearchResultCard;