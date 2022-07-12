import React from 'react'

const Dropdown = ({ label, value, options, onChange }) => {
	return (
		<div>
			<label>
			<dt>{label}</dt>
			<dd>
				<select value={value} onChange={onChange}>
					{options.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			</dd>
    </label>
		</div>
	)
}

export default Dropdown