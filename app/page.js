"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [foodSearchText, setFoodSearchText] = useState("")
	const [foundFood, setFoundFood] = useState(null)

	async function searchForNutrient(foodToSearch) {
		const res = await fetch(`/api/nutrients`, {
			method: `POST`,
			body: JSON.stringify({ search: foodToSearch })
		})
		const { data } = await res.json();
		setFoundFood(data)
	}

	return (
		<div>
			<input
				className="text-black text-4xl"
				type="text"
				onChange={(e) => setFoodSearchText(e.target.value)}
			/>
			<button
				className="text-white text-2xl border-2 rounded-md"
				onClick={() => searchForNutrient(foodSearchText)}
			>
				Search
			</button>
			{foundFood ? (
				<div>
					{foundFood.food_name}
					<Image alt={foundFood.food_name} src={foundFood.photo.highres} width={500} height={500} />
				</div>
			) : (null)}
		</div>
	);
}
