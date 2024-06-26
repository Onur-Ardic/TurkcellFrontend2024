import Link from "next/link";
import styled from "./styled.module.css";

const NotFound = () => {
  return (
    <div>
      <hr style={{ marginTop: "20px", marginBottom: 10 }} />
      <div className={`${styled.notFoundContainer}`}>
        <h1 className={styled.notFound}>Blog doesn't exist</h1>
        <Link href="/" className="btn btn-dark mt-3">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
