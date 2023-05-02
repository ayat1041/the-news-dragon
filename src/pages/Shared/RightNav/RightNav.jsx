import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png"
const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <BsGithub className="me-2" />
        Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
