import { Link } from "react-router-dom";
import "./cards.css";

export default function HomeComponent({ title, description, imageUrl, link }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link} className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
}
    