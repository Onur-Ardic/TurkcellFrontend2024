"use client"
import { RotatingTriangles } from "react-loader-spinner";

export default function Loading() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <RotatingTriangles
                    visible={true}
                    height="200"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="rotating-triangles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </>
    )
}