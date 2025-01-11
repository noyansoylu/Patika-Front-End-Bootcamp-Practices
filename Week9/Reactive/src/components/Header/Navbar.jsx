import JoinButton from './JoinButton';

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#our-classes">Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trainers">Trainer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#review">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <JoinButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
