'use client'

import { useState } from 'react';
import i18next from "../../i18n";

export const ReviewsForm = ({ productId }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let commentModel = {
        name: name,
        surname: surname,
        rating: rating,
        comment: comment,
        productId: productId
      }
      
      const response = await fetch('http://localhost:8000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentModel),
      });

      if (!response.ok) {
        throw new Error('Review submission failed');
      }
      else{

      }

    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div>
 

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{i18next.t('newreview')}</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input className="form-control mb-2"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={i18next.t('name')} />

                <input className="form-control mb-2"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder={i18next.t('surname')} />

                <input className="form-control"
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder={i18next.t('rating')} />
                <div className="mb-3">
                  <label htmlFor="comment-text" className="col-form-label">{i18next.t('comment')}</label>
                  <textarea className="form-control"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    id="comment-text"></textarea>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{i18next.t('close')}</button>
                <button type="submit" className="btn btn-primary">{i18next.t('applyreview')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}