import "./App.css";
import Header from "./componenets/abdulazizHeader/header";
import Input from "./componenets/AbdullohInput/input";
import Props from "./componenets/MuhammadAliSection/props";
import img1 from ".../../../public/images/img1.png"
import img2 from ".../../../public/images/img2.png"
import img3 from ".../../../public/images/img3.png"
import img4 from ".../../../public/images/img4.png"
import img5 from ".../../../public/images/img5.png"
import img6 from ".../../../public/images/img6.png"
import Footer from "./componenets/AzamatFooter/footer";
function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <section className="Props-sect">
        <h2>Трасса</h2>
          <div className="sect-p">
            <Props
            img={img1}
            h4={'14.02.2023'}
            p={'Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!'}
          />
          <Props
            img={img2}
            h4={'25.01.2023'}
            p={'BMC Kaius 01 идеальный гоночный гравийный велосипед'}
          />
          <Props
            img={img3}
            h4={'24.01.2023'}
            p={'Все новые гоночные велосипеды BMC Fourstroke XC оснащены волшебным подседельным штырем Autodrop.'}
          />
          <Props
            img={img4}
            h4={'24.01.2023'}
            p={'Велосипед Wilier Grantismo SLR для шоссейных гонок'}
          />
          <Props
            img={img5}
            h4={'24.01.2023'}
            p={'Первые поездки на новой гоночной ракете Wilier Urta SLR 100mm XC MTB, всего 9,8 кг!'}
          />
          <Props
            img={img6}
            h4={'24.01.2023'}
            p={'Велосипед Wilier Grantismo SLR для шоссейных гонок'}
          />
          </div>
          
        </section>
        <section className="sect2">
          <Input />
        </section>

      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
