import SearchResultCard from "./SearchResultCard";

function SearchResults(props){
  const {results} = props;
  if(results.length === 0){
    return (<p>Nothing to show...</p>);
  }
  else {
    return (
      <>
        {results.map(item => {
          return (
            <SearchResultCard item={item} key={item.id}/>
          )
        })}
      </>
    );
  }
}

export default SearchResults;