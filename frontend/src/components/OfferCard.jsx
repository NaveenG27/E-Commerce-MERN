import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function OfferCard({ offer }) {

    // Calculate the number of filled stars
  const rating = offer.ratings || 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <Card className="h-100 shadow-sm border-0">
        {/* Image Container */}
        <div 
          className="card-img-container position-relative"
          style={{ 
            height: '250px', 
            overflow: 'hidden',
            backgroundColor: '#f8f9fa'
          }}
        >
          <img
            src={offer.images[0].image}
            alt={offer.name}
            className="w-100 h-100"
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              padding: '15px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        </div>
        
        <Card.Body className="d-flex flex-column p-3">
          <Card.Title className="fs-6 mb-2 line-clamp-2" style={{ minHeight: '48px' }}>
            <Link to={"/offer/" + offer._id} className="text-decoration-none text-dark">
              {offer.name}
            </Link>
          </Card.Title>
          
          {/* Star Ratings */}
          <div className="ratings mb-2">
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`${
                    star <= fullStars
                      ? 'fas fa-star'
                      : star === fullStars + 1 && hasHalfStar
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star'
                  } ${star <= fullStars || (star === fullStars + 1 && hasHalfStar) ? 'text-warning' : 'text-muted'}`}
                ></i>
              ))}
              <span className="rating-text small text-muted ms-2">
                ({rating})
              </span>
            </div>
          </div>
          
          {/* Price */}
          <div className="mt-auto" >
            <Card.Text className="text-success">
            <strong>Offers: {offer.offers}</strong>
            </Card.Text>
            <Card.Text className="fw-bold text-danger h5 mb-3" style={{textDecoration:"line-through"}}>
              ${offer.price}
            </Card.Text>
            
            <Button 
              as={Link} 
              to={"/offer/" + offer._id} 
              className="w-100 amazon-product-btn"
            >
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>

}