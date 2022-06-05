import React from 'react';

const SearchBar = ({
    query,
    isloading,
    handelSubmit,
    setQuery
}) => {
  return (
    <form onSubmit={handelSubmit}>
      <input
      value={query} 
      disabled={isloading}
      name="query"
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search Recipes"
      className="form-control"
      />
      <input 
      disabled={ isloading || !query }
      type="submit"
      className='btn'
      value="Search"
       />
    </form>
  )
}

export default SearchBar;