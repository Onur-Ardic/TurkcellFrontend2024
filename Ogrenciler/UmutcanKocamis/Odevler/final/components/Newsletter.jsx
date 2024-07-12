import { IoIosMail } from "react-icons/io";
const NewsLetter = () => {
  return (
    <div className="container mt-5 ">
      <div className="bg-black d-flex  flex-column rounded-4 py-4">
        <div className="container d-flex flex-column gap-3"><h1 className="bold text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="d-flex flex-column gap-2">
          <div className="bg-white d-flex align-items-center border-0 py-2 rounded-pill bg-white">
            <IoIosMail className="text-black-50 ms-3 fs-4" />
            <input
              type="text"
              placeholder="Enter your email adress"
              className="rounded border-0 ms-2 "
            />
          </div>
            <button className="py-2 rounded-pill bg-white fw-bold border-0">Subscribe to Newsletter</button>
        </div></div>
        
      </div>
    </div>
  );
};

export default NewsLetter;
