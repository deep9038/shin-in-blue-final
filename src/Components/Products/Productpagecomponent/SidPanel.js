import React from "react";
import FilterListToggle from "../filterlisttoggal";
import { categoryList, colorList } from "../constant/index";
import "../filterlisttoggal/style.css";
import ChakeBoxPoton from "../Chakebox";
import Sliderpoton from "../slider";
const SidPanel = ({
  selectedCategory,
  selectToggal,
  selectedColor,
  selectColor,
  tages,
  changeChecked,
  selectedPrice,
  changedPrice
}) => {
  return (
    <div>
      {/* color */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggal}
        />
      </div>
      {/* price */}
      <div className="input-group">
        <p className="label-rang">Price</p>
        <Sliderpoton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/* tages */}
      <div className="input-group">
        <p className="label">Tages</p>
        {tages.map((tag) => (
          <ChakeBoxPoton
            key={tag.id}
            tages={tag}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* hight and weigh t */}
      <div className="input-group">
        <p className="label">color</p>
        <FilterListToggle
          options={colorList}
          value={selectedColor}
          selectToggle={selectColor}
        />
      </div>
    </div>
  );
};

export default SidPanel;
