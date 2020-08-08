import React from "react";

class Search extends React.Component {
  searchRef = React.createRef();

  handleSearch = (e) => {
    // console.log(this.searchRef.current.value);
    const data = this.searchRef.current.value;
    this.props.searchData(data);
  };

  render() {
    return (
      <div>
        <input
          ref={this.searchRef}
          className="header-input"
          type="text"
          placeholder="Coffe, dogs, futbol, etc..."
        />
        <button
          onClick={this.handleSearch}
          className="header-btn"
          type="button"
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
