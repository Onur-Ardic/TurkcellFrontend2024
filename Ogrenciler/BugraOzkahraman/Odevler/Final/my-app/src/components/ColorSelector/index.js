"use client";
import { useState } from "react";
import { FaCircle, FaCheck } from "react-icons/fa";

const ColorSelector = () => {
  const colors = ["#4F4631", "#314F4A", "#31344F"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="productColors d-flex row">
      <hr />
      <div>
        <h6>Select Colors</h6>
      </div>
      <div className="d-flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setSelectedColor(color)}
            style={{ position: "relative", cursor: "pointer" }}>
            <FaCircle
              style={{
                color: color,
                fontSize: "30px",
              }}
            />
            {selectedColor === color && (
              <FaCheck
                style={{
                  color: "white",
                  position: "absolute",
                  top: "7px",
                  left: "7px",
                  fontSize: "15px",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ColorSelector;
