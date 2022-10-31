import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Trip = (props) => {
  const {
    city, 
    country, 
    id,
    image,
    owner,
    updated_at,
    tripPage,
    profile_image,
    profile_id,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/trips/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/trips/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && tripPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/trips/${id}`}>
        <Card.Img src={image} alt={country} />
      </Link>
      <Card.Body>
        {country && <Card.Title className="text-center">{country}</Card.Title>}
        {city && <Card.Text>{city}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Trip;