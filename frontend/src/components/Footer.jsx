export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-2">E-SHOPEE</h5>
            <p className="small mb-0">Quality products, exceptional service</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="https://www.facebook.com/" className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/?lang=en" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://in.linkedin.com/" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-3" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              &copy; 2025 E-SHOPEE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
