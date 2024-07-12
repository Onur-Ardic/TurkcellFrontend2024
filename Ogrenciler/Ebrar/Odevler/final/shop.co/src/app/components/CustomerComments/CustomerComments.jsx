"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import {
  StyledComment,
  PrevButton,
  NextButton,
  Buttons,
  SectionTitle,
  CustomersTitleTop,
  CommentCard,
  CommentAuthor,
  CommentContent,
  Comments,
} from "./CustomerComments.style";

const CustomerComments = () => {
  const [comments, setComments] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const numVisibleComments = 3;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:3000/comments"); 
       
        const data = await response.json();
        setComments(data);
      } catch (error) {
        
      }
    };

    fetchComments();
  }, []);

  const handleNext = () => {
    if (startIndex + numVisibleComments < comments.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    } else {
      setStartIndex(comments.length - numVisibleComments);
    }
  };
  return (
    <StyledComment>
      <CustomersTitleTop className="d-flex justify-content-evenly">
        <SectionTitle className="text-uppercase">
          Our Happy Customers
        </SectionTitle>
        <Buttons>
          <PrevButton onClick={handlePrev}>
            <FaArrowLeft />
          </PrevButton>
          <NextButton onClick={handleNext}>
            <FaArrowRight />
          </NextButton>
        </Buttons>
      </CustomersTitleTop>

      <Comments>
        {comments
          .slice(startIndex, startIndex + numVisibleComments)
          .map((comment, index) => (
            <CommentCard key={index}>
              <div className="comment-content">
                <img src="https://r.resimlink.com/riTFE1wI7amP.png" alt="" />
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentContent>{comment.content}</CommentContent>
              </div>
            </CommentCard>
          ))}
      </Comments>
    </StyledComment>
  );
};

export default CustomerComments;
