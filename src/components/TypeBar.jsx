import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          className="list-group-item p-3"
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
