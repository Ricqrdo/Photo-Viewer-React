import React from "react";

const Item = (props) => {
  const { largeImageURL, likes, tags, views, previewURL } = props.image;
  return (
    <div className="card__container">
      <div className="card-image">
        <img src={previewURL} alt={tags} />
      </div>
      <div className="card-desc">
        <p>
          <span className="font-weight-bold">Views: </span>
          {views}
        </p>

        <p>
          <span className="font-weight-bold">Likes: </span>
          {likes}
        </p>

        <p>
          <span className="font-weight-bold">Tags: </span>
          {tags}
        </p>
        <a
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-block mb-1 text-white"
          style={{ backgroundColor: "#ff5833" }}
        >
          View Image
        </a>
      </div>
    </div>
  );
};

export default Item;
