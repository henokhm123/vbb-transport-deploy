import { Link, useHistory, useParams } from "react-router-dom";


function StopDetails(props){
  const { id } = useParams()

  return (
    <div >
      <p>Stop details for stop with Id {id}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default StopDetails;