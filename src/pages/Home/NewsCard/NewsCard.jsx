import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small> {moment(author?.published_date).format("yyy-mm-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating
          style={{maxWidth:100}}
          readOnly
          value={Math.round(rating?.number || 0)}
          />
          <span>{rating.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;