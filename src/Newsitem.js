import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageurl, url, author, date ,source} = this.props;
    const gmtDate = new Date(date).toGMTString();

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageurl ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnewspaper%2F&psig=AOvVaw1dEiVQrjxGHXcEv4EnCgZ7&ust=1721067613065000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCbrc-Sp4cDFQAAAAAdAAAAABAE" : imageurl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">By {author ? author : "unknown"} on {gmtDate}</small>
            </p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
