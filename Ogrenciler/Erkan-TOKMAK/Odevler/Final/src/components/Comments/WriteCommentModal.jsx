"use client"
import { getUserToDB, postComment } from "@/api/server";
import useAuth from "@/lib/Hooks/useAuth";
import { Link } from "@/navigation";
import { ReviewButton } from "@/styles/CommentStyle";
import { Rating } from "@smastrom/react-rating"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react";


const WriteCommentModal = ({ data }) => {
    const t = useTranslations();
    const {currentUser} = useAuth();
    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const handleUserName = async (currentUser) => {
        const user = await getUserToDB(currentUser.uid);
        setUsername(user.username);
    }
    
    useEffect(()=> {
        if(currentUser) {
            handleUserName(currentUser);
        }

    })

    const reviewButton = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(data.id,rate,username,comment)
            const res = await postComment(data.id, rate, username, comment);
            if (res.status === 200) {
                alert('Comment added successfully')
            }
        } catch (error) {
            alert(error.message)
        }
        reviewButton.current.click();
    }


    return (
        <>
            <ReviewButton ref={reviewButton} type="button" data-bs-toggle="modal" data-bs-target="#reviewModal">{t('writeReview')}</ReviewButton>
            {/* <button type="button" data-bs-toggle="modal" data-bs-target="#reviewModal">{t('writeReview')}</button> */}

            <div className="modal fade"
                id="reviewModal"
                tabIndex="-1"
                aria-labelledby="reviewModal"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-black" id="reviewModal">{t('writeReview')}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {currentUser ? (<form onSubmit={handleSubmit}>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rate}
                                    onChange={setRate}
                                />
                                <textarea
                                    className="form-control mt-3"
                                    placeholder={t('writeReview')}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                                <ReviewButton type="submit" className="mt-2 w-100">{t('submit')}</ReviewButton>
                            </form>): <><p>{t('loginPls')}</p><Link href="/login"><ReviewButton type="button" data-bs-toggle="modal" data-bs-target="#reviewModal">{t('login')}</ReviewButton></Link> </>}
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('close')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WriteCommentModal