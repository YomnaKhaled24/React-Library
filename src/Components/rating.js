import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  
  const renderStar = (index) => {
    if (index < filledStars) {
      return <span key={index}><svg xmlns="http://www.w3.org/2000/svg" fill="yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg></span>; // Filled star
    } else if (index === filledStars && halfStar) {
      return <span key={index}><svg xmlns="http://www.w3.org/2000/svg" fill="yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg></span>; // Half-filled star
    } else {
      return <span key={index}>
       <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="yellow" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg></span>; // Empty star
    }
  };

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => renderStar(index))}
    </div>
  );
};

export default StarRating;
