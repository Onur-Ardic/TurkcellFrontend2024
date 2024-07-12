import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaStar,FaCheckCircle  } from "react-icons/fa";

const OurHappyCustomers = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <h1 className="bold">Our Happy Customers</h1>
        <div className="d-flex gap-3">
          <FaArrowLeft className="fs-1" />
          <FaArrowRight className="fs-1" />
        </div>
        </div>
        <div className="py-4 border border-2 container rounded-4">
            <div className="text-warning d-flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <div>
                <div className="d-flex align-items-center gap-2 mt-2">
                <h4 className="m-0 fw-bold">Sarah M.</h4>
                <FaCheckCircle className="text-success" />
            </div>
            <p>
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurHappyCustomers;
