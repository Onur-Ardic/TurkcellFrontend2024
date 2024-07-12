import { Modal, Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { GiSettingsKnobs } from "react-icons/gi";
import { useState, useEffect } from 'react';

const ProductDetailComments = ({ product }) => {
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [productComments, setProductComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleShowReviewModal = () => setShowReviewModal(true);
    const handleCloseReviewModal = () => setShowReviewModal(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${product.id}/comments`);
                if (!response.ok) {
                    throw new Error('');
                }
                const data = await response.json();
                setProductComments(data.comments || []);
            } catch (error) {
                console.error('Error fetching comments:', error);
                setError(error.message);
            }
        };
        fetchComments();
    }, [product.id]);

    const handleReviewSubmit = async () => {
        const newComment = {
            username: customerName,
            rating: rating,
            comment: reviewText,
            date: new Date().toISOString()
        };

        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:3000/products/${product.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comments: [...productComments, newComment]
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add comment');
            }

            const updatedProduct = await response.json();
            setProductComments(updatedProduct.comments);
            setCustomerName('');
            setRating(0);
            setReviewText('');
            handleCloseReviewModal();
        } catch (error) {
            console.error('Error adding comment:', error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='my-5'>
            <div className="row my-4">
                <div className="col-md-4 text-center">
                    <span className='text-secondary'>Product Details</span>
                </div>
                <div className="col-md-4 text-center">
                    <span className='text-black fw-semibold'>Rating Reviews</span>
                </div>
                <div className="col-md-4 text-center">
                    <span className='text-secondary'>FAQS</span>
                </div>
                <hr className='mt-3' />
            </div>
            <div className="d-flex align-items-baseline justify-content-between">
                <span className='text-black fw-semibold fs-5'>All Reviews</span>
                <div className='d-flex align-items-baseline gap-2'>
                    <button className='bg-body-secondary border-0 p-3 rounded-5'><GiSettingsKnobs className='fw-bold' size={20} /></button>
                    <button className='bg-black text-white border-0 p-3 rounded-5' onClick={handleShowReviewModal}>Write a Review</button>
                    <Modal show={showReviewModal} onHide={handleCloseReviewModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Write a Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="customerName" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="customerName"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rating" className="form-label">Rating</label>
                                    <ReactStars
                                        count={5}
                                        value={rating}
                                        onChange={(newRating) => setRating(newRating)}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="reviewText" className="form-label">Review</label>
                                    <textarea
                                        className="form-control"
                                        id="reviewText"
                                        rows="3"
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                    ></textarea>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseReviewModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleReviewSubmit} disabled={isLoading}>
                                {isLoading ? 'Submitting...' : 'Submit Review'}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className="row">
                {error && <p className='text-danger text-center'>{error}</p>}
                {productComments && productComments.length > 0 ? (
                    productComments.map((comment, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="border border-1 rounded-5 p-3 my-4">
                                <ReactStars
                                    count={5}
                                    value={comment.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    edit={false}
                                />
                                <div>
                                    <span className='text-black fw-semibold fs-5'>{comment.username}</span>
                                </div>
                                <div>
                                    <span className='text-secondary'>"{comment.comment}"</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center'>No comments found.</p>
                )}
            </div>
        </div>
    )
}

export default ProductDetailComments;
