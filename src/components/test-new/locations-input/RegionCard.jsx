import React from 'react';

function RegionCard({ region, locations, setLocations }) {
  const selected = () => locations.includes(region.awsName);

  const handleRegionClick = () => {
    let locationsCopy = [...locations];
    if (locationsCopy.includes(region.awsName)) {
      locationsCopy = locationsCopy.filter((location) => location !== region.awsName);
    } else {
      locationsCopy.push(region.awsName);
    }
    setLocations(locationsCopy);
  };

  return (
    <button
      onClick={handleRegionClick}
      type="button"
      value={region.name}
    >
      <div className={`${selected() ? 'bg-secondary-700 hover:bg-secondary-700' : 'bg-slate-100 hover:bg-slate-200'} grid justify-items-center rounded border text-label-card`}>
        <div className="flex items-center">
          <div className="w-8 ml-2 pr-2">
            <img src={region.flagUrl} alt={region.name} />
          </div>
          <div className="text-center text-heading-h4">
            <div>{region.displayName}</div>
            <div className="text-sm">{region.awsName}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default RegionCard;
