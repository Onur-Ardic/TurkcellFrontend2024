import Link from "next/link";
import styled from "./styled.module.css";
import Image from "next/image";
import error from "../../../../public/error.jpg";

const NotFound = () => {
  return (
    <div>
      <hr style={{ marginTop: "20px", marginBottom: 10 }} />
      <div className={`${styled.notFoundContainer}`}>
        <Image src={error} width={400} height={400} alt="Blog Card" />
        <h1 className={styled.notFound}>Blog doesn't exist</h1>
        <Link href="/" className="btn btn-dark mt-3 btn-lg">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
