'use client'

import Link from "next/link"
import { FaLocationArrow } from "react-icons/fa"

const Error = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
                gap: 50,
            }}
        >
            <h1>An error has occurred! Sorry for that!</h1>
            <Link
                href="/"
                style={{ textDecoration: "none", fontSize: "20", marginTop: 8 }}
            >
                <h3 style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <FaLocationArrow /> Go Home
                </h3>
            </Link>
        </div>
    )
}

export default Error