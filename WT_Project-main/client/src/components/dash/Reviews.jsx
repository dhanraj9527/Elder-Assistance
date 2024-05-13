import React, { useState } from 'react';

function Reviews() {
  const [review, setReview] = useState('');
  const [reviewList, setReviewList] = useState([]);

  const postReview = () => {
    if (review.trim() !== '') {
      setReviewList([...reviewList, review]);
      setReview('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <h1>Elder Assistant</h1>
        <p>Your Trusted Companion for Elder Care</p>
        
      </header>

      <main>
        <section id="reviews" style={{ padding: '40px', textAlign: 'center' }}>
          <h2 style={{color:'yellow'}}>Customer Reviews</h2>

          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <label htmlFor="review" style={{color:'yellow'}}>Write a Review:</label>
            <textarea
              id="review"
              name="review"
              rows="4"
              placeholder="Share your experience..."
              style={{ width: '100%', padding: '10px', marginBottom: '15px', resize: 'none' }}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <button
              type="button"
              style={{ padding: '10px 15px', backgroundColor: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}
              onClick={postReview}
            >
              Post Review
            </button>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
            {reviewList.map((reviewItem, index) => (
              <li key={index} style={{ borderBottom: '1px solid #ddd', padding: '15px 0' }}>{reviewItem}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer style={{ textAlign: 'center' }}>
        <p style={{color:'yellow'}}>&copy; 2024 Elder Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Reviews;
