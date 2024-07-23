import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import star from "../assets/star.png";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image
          src={"https://online-shop-be-qwef.onrender.com" + device.img}
          style={{ width: 150, height: 150 }}
        />
        <div className="d-flex justify-content-between align-items-center mt-1">
          <div className="text-black-50">Samsung</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image
              src={star}
              style={{ width: 18, height: 18, marginLeft: 4 }}
            />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
