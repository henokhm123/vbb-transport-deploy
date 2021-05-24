function StopDetails(props){
  const {stop} = props;
  return (
    <div >
      <p>Stop details for stop with Id {stop.id}</p>
      <button>Back</button>
    </div>
  )
}

export default StopDetails;