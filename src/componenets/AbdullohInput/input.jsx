import React from "react";
import "./input.css";
import sariqBola from  "../AbdullohInput/sariq bola.png"
function Input() {
  return (
    <>
      <div className="inputs">
        <div className="inp-left">
          <h2>СВЯЖИТЕСЬ С НАМИ ПО ЛЮБЫМ ВОПРОСАМ</h2>
          <div className="inps">
            <div className="inp1">
              <input type="text" placeholder="Имя" />
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="inp2">
              <input type="number" placeholder="Телефон" />
              <input type="text" placeholder="Компания" />
            </div>
            <div className="inp3">
              <textarea cols="50" rows="10" placeholder="Сообщение"></textarea>
            </div>
            <div className="inp4">
              <button>Задать вопрос</button>
            </div>
          </div>
        </div>
        <div className="inp-right">
          <img src={sariqBola} alt="" />
        </div>
      </div>
    </>
  );
}

export default Input;
