import { React } from 'react';
import { Link } from 'react-router-dom';
import { SMILEY } from '../constants/IconUrls';

function Header() {
  return (
    <header>
      <Link to="/tests">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between h-16">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-12 w-auto"
                src={SMILEY}
                alt="NoName"
              />
              <div className="ml-3 text-2xl font-semibold text-gray-900">Seymour</div>
            </div>
            <div className="flex">
              <button className="text-sm font-medium text-sky-600 hover:text-sky-700">Docs</button>
            </div>
          </div>
        </div>
      </Link>
    </header>
  );
}

export default Header;
