import React from "react";
import welcomeimg from "../../img/welcome.jpg";

const Welcome = () => {
  return (
    <div>
      <div className="d-lg-flex mx-lg-5 justify-content-evenly align-items-center my-5">
        <img src={welcomeimg} width="100%" alt="" />
        <div className="px-5 pt-3">
          <h3 className="text-primary fw-bold">Welcome to MediPlus</h3>
          <br />
          <p>
            We’re glad you hand your dental health concerns to our skilled
            hands. We’ll make sure to deliver the best possible healthcare to
            all our patients! Of course, we always complement our main services
            with a customer service oriented approach. <br />
            <br />
            We sincerely believe that visiting a dentist shouldn’t be a
            frightening or stressful experience! We provide an equally
            comfortable experience of relaxation for all our young and adult
            customers! Also we implement a lot of pain management and anesthesia
            options.Everything we do is aimed at making you feel comfortable,
            while we take care of your oral healthcare! <br />
            <br />
            It includes both local anesthesia for mouth-numbing as well as a
            sedative anesthesia. Altogether, this helps relief any pain which
            might occur in the process of treatment. All in all, we’ve got it
            all under control at our MediPlus dental health clinic. <br />
            <br />
            We invite you to explore the information about our dental office on
            our website! Feel free to read our terms and conditions and all the
            additional info we have posted here. Once our customer, you will be
            leaving our dental clinic with a bright, wide smile!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
