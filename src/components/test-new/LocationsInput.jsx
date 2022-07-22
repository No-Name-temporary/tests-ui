import { React } from 'react';
import { useSelector } from 'react-redux';
import RegionCard from './RegionCard';

function LocationsInput() {
  const regions = useSelector((state) => state.sideloads.regions);

  if (regions) {
    return (
      <div>
        <h2>Locations</h2>
        <div className="grid grid-cols-4 gap-4">
          { regions.map((region) => <RegionCard key={region.id} region={region} />)}
        </div>
      </div>
    );
  }
}

export default LocationsInput;
