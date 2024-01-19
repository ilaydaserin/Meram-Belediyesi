import React from "react";
import "./Home.css";
import News from "../components/News";
import Acitivities from "../components/Acitivities";

function Home() {
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.meram.bel.tr/upload/medya/MRM_2455.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Mükemmel Güzellik, Meram</h3>
              <p>Meram'ın eşsiz manzarası ile buluşun.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/A847A8769_1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Doğanın Kalbinde Huzur</h3>
              <p>Meram'ın yeşil vadilerinde sakin bir mola verin.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/42197-2-kopru.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Tarihi Köprüler ve Modern Yaşam</h3>
              <p>Meram, geçmişin izlerini günümüzle buluşturuyor.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/37623-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Kültür ve Sanatın Buluşma Noktası</h3>
              <p>Meram, zengin kültürel etkinlikleriyle sizi bekliyor.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="president">
        <div className="container">
          <div className="row">
            <div className="col-md-6 img-go">
              <img src="/img/mustafakavus3.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="info">
                <h1>Birlikte Yönetiyoruz</h1>
                <hr />
                <div className="info-text">
                  <p>
                    Seçim çalışmalarımızda bir söz verdik ve seçimlerden sonra
                    da sürekli hemşehrilerimizin arasında olacağımızı, onların
                    görüş ve önerileri doğrultusunda Meram’ı birlikte yönetmek
                    istediğimizi söylemiştik. Şimdi yine onların arasındayız ve
                    beraber olmaya devam edeceğiz.
                  </p>
                  <br />
                  <br />
                  <div className="namep">
                    <p>Meram Belediye Başkanı</p>
                    <p>Mustafa Kavuş</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <News />
      </section>

      <section className="stat-bar">
        <Acitivities />
      </section>
    </div>
  );
}

export default Home;
