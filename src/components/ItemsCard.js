import React from "react";

import Item from "./Item";
import PageSwitch from "./PageSwitch";

import "./styles/ItemCard.css";

class ItemCard extends React.Component {
  showImages = () => {
    const images = this.props.images;
    if (images.length === 0) {
      return null;
    }
    // console.log(images);
    return (
      <React.Fragment>
        {images.map((image) => (
          <Item key={image.id} image={image} />
        ))}
        <PageSwitch
          lastPage={this.props.lastPage}
          nextPage={this.props.nextPage}
        />
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.showImages()}</React.Fragment>;
  }
}

export default ItemCard;
