import React from "react";
import Carousel from "react-bootstrap/Carousel";

// image imports
import car1 from "../assets/images/newCar1.jpg";
import car2 from "../assets/images/newCar2.jpg";
import car3 from "../assets/images/newCar3.jpg";
import car4 from "../assets/images/newCar4.jpg";
import new1 from "../assets/images/newDel1.png";
import newAr from "../assets/images/newArr1.png";
import newAr1 from "../assets/images/newArr2.png";
import newAr2 from "../assets/images/newArr4.png";

const NewArrivalsPage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Carousel Section */}
      <Carousel fade className="mt-3">
        {[car1, car2, car3, car4].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* New Arrival Banner */}
      <div className="text-center my-5 px-3">
        <img
          src={new1}
          alt="New arrivals banner"
          className="img-fluid rounded shadow-sm mb-4"
        />
        <h1 className="fw-bold">Welcome to New Arrivals – Coming Soon!</h1>
        <p className="text-muted">
          Discover the latest additions to our collection. Stylish, durable, and made just for you.
        </p>
      </div>

      {/* Sections */}
      <div className="container my-5">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-12 text-center text-lg-start mb-3 mb-lg-0">
            <h2 className="fw-semibold">DIY Made Easy</h2>
            <p className="text-muted">Tools, accessories, and kits for your home projects.</p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img src={newAr} alt="DIY section" className="img-fluid rounded shadow-sm" />
          </div>
        </div>

        <div className="row align-items-center mb-5 flex-lg-row-reverse">
          <div className="col-lg-6 col-12 text-center text-lg-start mb-3 mb-lg-0">
            <h2 className="fw-semibold">For a Safer Home</h2>
            <p className="text-muted">Top safety products to keep your family protected.</p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img src={newAr1} alt="Safe home section" className="img-fluid rounded shadow-sm" />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-12 text-center text-lg-start mb-3 mb-lg-0">
            <h2 className="fw-semibold">Shop by Brand</h2>
            <p className="text-muted">
              Explore top-quality brands trusted by thousands of customers.
            </p>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img src={newAr2} alt="Brand section" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;
