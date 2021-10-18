import React from "react";
import booking from "../../img/png/001-booking.png";
import experience from "../../img/png/002-experience.png";
import event from "../../img/png/003-event.png";
import price from "../../img/png/004-best-price.png";

const WhyChoose = () => {
  return (
    <div className="bg-primary text-white text-center p-5">
      <h2 className="fw-bold py-4">Why choose the MediPlus clinic?</h2>
      <div className="row row-cols-lg-4 py-3">
        <div>
          <img
            src={booking}
            width="100px"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "15px",
            }}
            alt=""
          />
          <h3>Easy booking</h3>
          <p>
            Booking an appointment at our dental clinic is as easy as doing 2
            clicks!
          </p>
        </div>
        <div>
          <img
            src={experience}
            width="100px"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "15px",
            }}
            alt=""
          />
          <h3>Experience</h3>
          <p>
            Combined, our 5 dentists have over half a century of practical
            experience. They are ready to put it to action for you!
          </p>
        </div>
        <div>
          <img
            src={event}
            width="100px"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "15px",
            }}
            alt=""
          />
          <h3>Flexible schedule</h3>
          <p>
            We work during all state holidays, besides working till late during
            the regular days. In case of emergencies we accept weekend bookings.
          </p>
        </div>
        <div>
          <img
            src={price}
            width="100px"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "15px",
            }}
            alt=""
          />
          <h3>Best price guarantee</h3>
          <p>
            Our reasonable prices made thousands of people smile with a new,
            beautiful smile, as never before!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
