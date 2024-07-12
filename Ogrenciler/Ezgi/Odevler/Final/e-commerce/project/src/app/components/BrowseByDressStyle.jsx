
import Image from "next/image";

const BrowseByStyle = async () => {

    return (
        <div className="container">
            <div className="bg-body-secondary rounded-5 p-5">
                <h2 className="fw-bold fs-2 text-center py-3">Browse By Style Dress</h2>
                <div className="row">
                    <div className="col-md-5">
                        <div className="position-relative">
                            <Image width={500} height={200} src={`/assets/images/casual.png`} alt="Casual" className="rounded-4" />
                            <p className="position-absolute top-0 end-0 ms-3 mt-3 fw-bold fs-4">Casual</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="position-relative">
                            <Image width={700} height={200} src={`/assets/images/formal.png`} alt="Formal" className="rounded-4" />
                            <p className="position-absolute top-0 end-0 ms-3 mt-3 fw-bold fs-4">Formal</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-7">
                        <div className="position-relative">
                            <Image width={700} height={200} src={`/assets/images/party.png`} alt="Party" className="rounded-4" />
                            <p className="position-absolute top-0 end-0 ms-3 mt-3 fw-bold fs-4">Party</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="position-relative">
                            <Image width={500} height={200} src={`/assets/images/gym.png`} alt="Gym" className="rounded-4" />
                            <p className="position-absolute top-0 end-0 ms-3 mt-3 fw-bold fs-4">Gym</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseByStyle;
