import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [serviceDetail, setServiceDetail] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setServiceDetail(data.find((item) => item.id == serviceId))
      );
  }, [ServiceDetail]);
  return (
    <div className="text-center py-5">
      <h1 className="text-primary fw-bold pb-2">{serviceDetail.name}</h1>
      <h5 className="pb-3 text-primary fw-light">
        {serviceDetail.description}
      </h5>
      <p className="w-75 mx-auto pb-4">
        It may take care of purely aesthetic concerns of the patient (teeth
        whitening, straightening; etc…). Also, it may involve fixing teeth that
        were mechanically damaged or chipped off. <br />
        <br />
        Sometimes it involves Dental Filling and Bonding, which are quite simple
        dental procedures. Usually, they do not require numbing or any kind of
        anesthesia applied. <br />
        <br />
        Just with the help of bonding and adhering materials, the damaged tooth
        area can be easily visually fixed. <br />
        <br />
        The same goes for other aesthetic and generally cosmetic dental
        procedures which we offer.
      </p>
      <img src={serviceDetail.img} alt="" className="w-75 pb-5" />
      <h4 className="text-primary pb-3">
        Service Cost : <span className="fw-bold">${serviceDetail.cost}</span>
      </h4>
      <h4 className="text-primary">
        Duration : <span className="fw-bold">{serviceDetail.duration}</span>
      </h4>
    </div>
  );
};

export default ServiceDetail;
