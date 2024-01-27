import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${input}`);

    // todo: fill up endpoint, store data (search result) in useState
    const searchEndpoint = `http:localhost3000/news/${input}`;

    fetch(searchEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    })
      .then((response) => response.json())
      .then((data) => console.log(input))
      .catch((error) => console.log(error));
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex max-w-md mx-auto p-4 ">
      <input
        className="flex w-full border p-2 rounded-md text-xl"
        type="text"
        placeholder="Search for new news..."
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
