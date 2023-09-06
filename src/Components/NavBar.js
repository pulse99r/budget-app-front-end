import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/" className="ul-no">Budget App</Link>
      </h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/transactions">Transactions</Link>
      </button>
      <button>
        <Link to="/transactions/new">New Transactions</Link>
      </button>
      <button>
        <Link to="/transactions/edit">Edit Transactions</Link>
      </button>
      <button>
        <Link to="/transactions/edit">Remove Transactions</Link>
      </button>
    </nav>
  );
}