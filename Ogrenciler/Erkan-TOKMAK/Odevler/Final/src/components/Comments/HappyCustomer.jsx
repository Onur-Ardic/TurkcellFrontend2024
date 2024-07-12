"use client";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SectionTitle } from "@/styles/ComponentStyle";
import { useTranslations } from "next-intl";
import { getCustomerComments } from "@/api/server";

const HappyCustomer = () => {
    const t = useTranslations();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        const data = await getCustomerComments();
        setCustomers(data);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? customers.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === customers.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <SectionTitle>
                    {t('ourHappyCustomersTitle')}
                </SectionTitle>
                <div className="d-flex gap-3">
                    <button className="border-0 bg-white rounded-pill" onClick={handlePrev}>
                        <FaArrowLeft />
                    </button>
                    <button className="border-0 bg-white rounded-pill" onClick={handleNext}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="position-relative overflow-hidden">
                <div
                    className="d-flex d-md-none transition-transform gap-3"
                    style={{
                        transform: `translateX(-${(currentIndex * 315) / (customers.length - 2)
                            }%)`,
                        transition: "transform 0.5s",
                    }}
                >
                    {customers.map((customer) => (
                        <div className="col-12">
                            <Comment key={customer.id} customer={customer} />
                        </div>
                    ))}
                </div>
                <div
                    className="d-none d-md-flex transition-transform gap-3"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / (customers.length - 2)
                            }%)`,
                        transition: "transform 0.5s",
                    }}
                >
                    {customers.map((customer) => (
                        <div className="col-4">
                            <Comment key={customer.id} customer={customer} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HappyCustomer;