import React from "react";

export default function SearchForm({handleChange, searchTerm}) {
 
  return (
    <section className="search-form">
    <label htmlFor='name'>Search: </label>
    <input id='name' type='text' name='name' placeholder='Find By Name' onChange={handleChange} value={searchTerm} />
    </section>
  );
}
