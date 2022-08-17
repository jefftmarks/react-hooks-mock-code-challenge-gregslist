import React, { useState } from "react";

const intializedForm = {
	description: "",
	image: "",
	location: "",
}

function Form({ onAddItem }) {
	const [formData, setFormData] = useState(intializedForm)

	function handleChange(event) {
		const { name, value} = event.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetch("http://localhost:6001/listings", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(res => res.json())
			.then(newItem => {
				onAddItem(newItem)
				setFormData(intializedForm)
			})
	}

	return (
		<div>
			<h3>Submit New Item</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="description">Description: </label>
				<input
					type="text"
					name="description"
					id="description"
					placeholder="Enter Description"
					style={{marginRight: "10px"}}
					onChange={handleChange}
					value={formData.description}
				/>
				<label htmlFor="image">Image: </label>
				<input
					type="text"
					name="image"
					id="image"
					placeholder="Enter Image"
					style={{marginRight: "10px"}}
					onChange={handleChange}
					value={formData.image}
				/>
				<label htmlFor="location">Location: </label>
				<input
					type="text"
					name="location"
					id="location"
					placeholder="Enter Location"
					style={{marginRight: "10px"}}
					onChange={handleChange}
					value={formData.location}
				/>
				<button type="submit" value="Submit">Submit</button>
		</form>  
		</div> 
	)
}

export default Form;