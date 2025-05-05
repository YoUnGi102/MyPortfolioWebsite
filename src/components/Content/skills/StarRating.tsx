import './StarRating.css'; // Make sure this path is correct for your setup

const StarRating = ({ rating }: { rating: number }) => {
  const MAX_STARS = 5;

  return (
    <div className="star-container">
      {Array.from({ length: MAX_STARS }, (_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`star-icon ${filled ? 'filled' : 'unfilled'}`}
    viewBox="0 0 24 24">
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
  </svg>
);

export default StarRating;
