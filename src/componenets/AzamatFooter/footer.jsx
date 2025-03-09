import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="foter">
        <div className="img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.336522500407!2d69.28418477561996!3d41.3667727972744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d2b7364ca3b%3A0x17ae9b1138235319!2sMARS%20IT%20school%20yunusobod!5e0!3m2!1sru!2s!4v1741503723065!5m2!1sru!2s"
            width="1485"
            height="450"
            style={{ border: "0px",  }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="footer">
            <div className="logo">
                <img src="/AzamatFooter/logo.png" alt="" />
            </div>
            <div className="text">
<div className="bir">
    <h1>Kаталог</h1>
    <p>Trade-in</p>
</div>
<div className="ikki">
    <h1>Для клиента</h1>
    <p>О нас</p>
</div>
<div className="uch">
    <h1>Контакты</h1>
    <p>+998938786748</p>
</div>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
