import React from "react";

import ItemCard from "./ItemsCard";
import Search from "./Search";

import "./styles/ItemsContainer.css";

class ItemsContainer extends React.Component {
  state = {
    data: "",
    images: [],
    page: "",
  };

  consultAPI = () => {
    const data = this.state.data;
    const page = this.state.page;
    const URL = `https://pixabay.com/api/?key=17657485-75d6e2fa382eb95fea4f789af&q=${data}&per_page=30&page=${page}`;
    // console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        this.setState({ images: results.hits });
        // console.log(this.state.images);
      });
  };

  searchData = (data) => {
    // console.log(data);
    this.setState(
      {
        data: data,
        page: 1,
      },
      () => {
        this.consultAPI();
      }
    );
  };

  lastPage = () => {
    // console.log("Last");
    let page = this.state.page;
    if (page === 1) return null;
    page -= 1;
    this.setState(
      {
        page,
      },
      () => {
        this.consultAPI();
        this.scroll();
      }
    );
    // console.log(page);
  };
  nextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState(
      {
        page,
      },
      () => {
        this.consultAPI();
        this.scroll();
      }
    );
    // console.log(page);
  };

  scroll = () => {
    const element = document.querySelector(".items_container");
    element.scrollIntoView("smooth", "start");
  };

  render() {
    return (
      <React.Fragment>
        <div className="items_container mt-5">
          <div className="item_search">
            <Search searchData={this.searchData} />
          </div>
          <ItemCard
            images={this.state.images}
            lastPage={this.lastPage}
            nextPage={this.nextPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ItemsContainer;
