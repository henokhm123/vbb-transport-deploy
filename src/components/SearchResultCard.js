function SearchResultCard(props){
  const {item} = props;
  return (
    <div className="CardContainer">
      <h2>{item.name}</h2>
    </div>
  )
}

export default SearchResultCard;