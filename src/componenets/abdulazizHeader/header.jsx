import React from "react";
import './header.css'
import { MdOutlineSegment } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import image from "../abdulazizHeader/Wb.png";
function Header() {
  return (
    <div className="Wb">
      <div className="header">
      <img src={image} alt="" />
      <div className="pla">
        <p className="p1">Trade In</p>
        <p className="p1">Велосипеды</p>
        <p className="p1">Запчасти</p>
        <p className="p1">Экипировка</p>
      </div>
      <div className="icons">
        <FaRegHeart />
        <IoCartOutline />
        <MdOutlineSegment />
      </div>
      </div>
      <div className="header2">
      <h1 className="h11">Электро велосипеды</h1>
      <p className="pca">
        Cento10 Hybrid — это гоночный велосипед с помогающим <br />
        педалированию электроприводом, который устанавливает новый,<br />
        очень высокий стандарт для данной категории
      </p>
      <button className="buton">Подробнее</button>
      </div>
    </div>
  );
}

export default Header;
