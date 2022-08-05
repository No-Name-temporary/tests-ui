import { React } from 'react';
import { Link } from 'react-router-dom';
import SeymoreLogo from '../assets/images/logos/seymour_drkblue_logoPNG.png';

function Header() {
  return (
    <header>
      <Link to="/tests">
        <div className="max-w-7xl mx-auto px-8 py-4 mt-4">
          <div className="flex justify-between h-16">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-14 w-auto"
                src={SeymoreLogo}
                alt="NoName"
              />
            </div>
            <div className="flex">
              <button className="text-sm font-medium text-primary-900 hover:text-secondary-700">Home</button>
              <button className="ml-4 text-sm font-medium text-primary-900 hover:text-secondary-700">Docs</button>
            </div>
          </div>
        </div>
      </Link>
    </header>
  );
}

export default Header;
