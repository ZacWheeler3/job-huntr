import { useLocation, useNavigate } from 'react-router-dom';
import { GiOpenChest, Gi3DStairs } from 'react-icons/gi'
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Job Huntr{' '}
          <GiOpenChest/>
          <Gi3DStairs/>
          {' '}
          2023.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
