import React from "react";
import { useState } from "react";
import Navbar from "../NewNav/Navbar";
import "./NewProductPage.css";
import ListComponent from "./Productpagecomponent/ListComponent";
import NewSurchBar from "./Productpagecomponent/NewSurchBar";
import SidPanel from "./Productpagecomponent/SidPanel";
const NewproductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectColor, setSelectColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([500, 5000]);
  const [list, setList] = useState([]);
  const [tages, setTages] = useState([
    {
      id: 1,
      checked: false,
      label: "acssasory",
    },
    {
      id: 2,
      checked: false,
      label: "matirial",
    },
    {
      id: 3,
      checked: false,
      label: "dark",
    },
    {
      id: 4,
      checked: false,
      label: "terget",
    },
  ]);

  const handelChangChecked = (id) => {
    const tagesStateList = tages;
    const changeCheckedTages = tagesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTages(changeCheckedTages);
  };
  const hndeChangePrice = (event, value) => setSelectedPrice(value);
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  const handelselectedColor = (event, value) =>
    !value ? null : setSelectColor(value);
  return (
    <div className="home">
      <Navbar/>
      <NewSurchBar />
      <div className="Home-PanelList-Wrpe">
        <div className="Home-Panel-Wrap">
          <SidPanel
            selectToggal={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectColor={handelselectedColor}
            selectedColor={selectColor}
            tages={tages}
            changeChecked={handelChangChecked}
            selectedPrice={selectedPrice}
            changedPrice={hndeChangePrice}
          />
        </div>
        <div className="Home-list-Wrap">
          <ListComponent list={list} />
        </div>
      </div>
    </div>
  );
};

export default NewproductPage;
