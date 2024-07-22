import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex flex-row flex-wrap">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "dark" : "light"}
          style={{ cursor: "pointer" }}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
