import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLocation } from '../../../features/newtest/newtest';

function RegionCard({ region }) {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const handleRegionClick = () => {
    dispatch(toggleLocation(region.awsName));
    toggleSelected();
  };

  return (
    <button
      onClick={handleRegionClick}
      type="button"
      value={region.name}
    >
      <div className={`${selected ? 'bg-sky-200 hover:bg-sky-300' : 'bg-gray-100 hover:bg-gray-300'} grid justify-items-center rounded border text-label-card`}>
        <div className="flex items-center">
          <div className="w-8 ml-2 pr-2">
            <img src={region.flagUrl} alt={region.name} />
          </div>
          <div className="text-center">
            <div>{region.displayName}</div>
            <div className="text-sm">{region.awsName}</div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default RegionCard;
