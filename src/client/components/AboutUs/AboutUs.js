import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutus">
      <h3>About Us : </h3>
      <p>
        Our food is characterized by Chinese and Indian cuisine, but despite the
        country's gigantic neighbors, the food culture of Nepal possesses its
        own unique expression with its distinctive spices and cooking methods.
        With us you can e.g. enjoy authentic Mo: mo (Nepalese dumplings), unique
        curries and juicy pieces of meat from the grill.
      </p>
      <div className="images">
        <img
          src="https://nepalibhancha.dk/frederiksberg/wp-content/uploads/sites/2/2018/11/takeaway.jpg"
          width="300px"
          height="200px"
          alt="momo"
        />
        <img
          src="https://www.wallpapertip.com/wmimgs/54-549498_high-resolution-wallpaper-food.jpg"
          width="300px"
          height="200px"
          alt="momo"
        />
        <img
          src="https://nepalibhancha.dk/frederiksberg/wp-content/uploads/sites/2/2018/11/takeaway.jpg"
          width="300px"
          height="200px"
          alt="momo"
        />
      </div>
      <p>
        We are in the center of Copenhagen, and in December 2018 we started our new department here in
        Copenhagen, after a great success of Ishøj department where we
        have spoiled our guests with tasty and well-prepared dishes from Nepal
        since 2015. Our food is characterized by Chinese and Indian cuisine, but
        despite the country giant neighbors, then the food culture of Nepal
        possesses its own unique expression with its distinctive spices and
        cooking methods. With us you can e.g. enjoy authentic Mo: mo (Nepalese
        dumplings), unique curries and juicy pieces of meat from the grill. The
        atmosphere with us is pleasant and relaxed, and it is supported by our
        cozy decor and always friendly staff. With us, we place great focus on
        ecology and therefore use as far as possible exclusively organic raw
        materials. You can therefore suitably quench your thirst with an organic
        beer (from Nørrebro Bryghus) or with a cup of organic tea or coffee.
        Look past Nepali Bhancha and pamper the senses with an amazing taste
        explosion from the small country in the mountains.
      </p>
      <div className="opening_hours">
        <h3>Opening Hours:</h3>
        <p>
          Monday to Friday: 14:00 to 22:00 <br />
          Saturday Nd Sunday: 12:00 to 22:00
        </p>
      </div>
    </div>
  );
}
