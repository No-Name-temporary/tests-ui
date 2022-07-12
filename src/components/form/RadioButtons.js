import React from 'react'

const RadioButtons = () => {
  const [frequency, setFrequency] = React.useState('1');

 const handleChange = (event) => {
    setFrequency(event.target.value)
  }

  return (
		<div>
      <h2>How frequently should the test run?</h2>
      <div>
        <input
          type="radio"
          value="1"
          checked={frequency === '1'}
          onChange={handleChange}
        /> 1 minute
      </div>
      <div>
        <input
          type="radio"
          value="10"
          checked={frequency === '10'}
          onChange={handleChange}
        /> 10 minutes
      </div>
      <div>
        <input
          type="radio"
          value="15"
          checked={frequency === '15'}
          onChange={handleChange}
        /> 15 minutes
      </div>
		</div>
  )
}

export default RadioButtons