import { Link } from "react-router-dom";

function StopDetails(props){
  const {stop} = props;
  return (
    <div >
      <p>Stop details for stop with Id {/*stop.id*/}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default StopDetails;