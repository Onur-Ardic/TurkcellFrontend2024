'use client'

import { useState } from "react";
import i18next from "../../i18n";

  const Reviews = ({reviews}) => {
    const [id, setId] = useState('');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
  
      try {
        const response = await fetch('http://localhost:3000/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, surname, rating, comment }),
        });
  
        if (!response.ok) {
          throw new Error('Review submission failed');
        }
  
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    };
  return (
   
    <section className="container-xxl pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">

    <ul className="nav nav-underline justify-content-around  flex-nowrap border-bottom" role="tablist">
      <li className="nav-item me-md-1" role="presentation">
        <button type="button" className="nav-link" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-tab-pane" role="tab" aria-controls="description-tab-pane" aria-selected="false" tabindex="-1">
        {i18next.t('productDetail')}
        </button>
      </li>
      <li className="nav-item me-md-1" role="presentation">
        <button type="button" className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" tabindex="-1">
        {i18next.t('ratingRevies')}
        </button>
      </li>
      <li className="nav-item me-md-1" role="presentation">
        <button type="button" className="nav-link" id="delivery-tab" data-bs-toggle="tab" data-bs-target="#delivery-tab-pane" role="tab" aria-controls="delivery-tab-pane" aria-selected="false" tabindex="-1">
        {i18next.t('faqs')}
        </button>
      </li>
    </ul>
    
    <div className="tab-content pt-4 mt-sm-1 mt-md-3">
      
   
      <div className="tab-pane fade active show" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab">
    
        <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
          <div className="mb-3 me-sm-3">
            <h2 className="h5 pb-2 mb-1">{i18next.t('reviews')}</h2><span>{reviews.length} </span>
           
          </div>
        
         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">{i18next.t('leavereview')}</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{i18next.t('newreview')}</h1>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>

        <input className="form-control hidden mb-2" 
        type="id" 
        value={id}
        onChange={(e) => setId(e.target.value)}/>

        <input className="form-control mb-2" 
        type="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={i18next.t('name')}/>

        <input className="form-control mb-2" 
        type="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder={i18next.t('surname')}/>

        <input className="form-control"
         type="number" 
         value={rating}
         onChange={(e) => setRating(e.target.value)}
         placeholder={i18next.t('rating')}/>
          <div className="mb-3">
          <label for="comment-text" className="col-form-label">{i18next.t('comment')}</label>
          <textarea className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
           id="comment-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{i18next.t('close')}</button>
        <button type="submit" className="btn btn-primary">{i18next.t('applyreview')}</button>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="mt-3 d-flex flex-wrap justify-content-around" >
        {reviews.map((review, index) => (
        <div className="col-5 border p-2 rounded"  key={index}>
          <div className="text-warning">
                    <small>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </small>
                    <span className="text-muted small">4.5</span>
              </div>
              <h4>{review.name}</h4>
            <p>{review.comment}</p>
            <p>{review.date}</p>
          </div>
      ))}
        </div>
      
        {/* <nav className="mt-3 pt-2 pt-md-3" aria-label="Reviews pagination">
          <ul className="pagination">
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                1
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">4</a>
            </li>
            <li className="page-item">
              <span className="page-link pe-none">...</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">6</a>
            </li>
          </ul>
        </nav> */}
      </div>
    
    </div>
    </section>
  )
}

export default Reviews