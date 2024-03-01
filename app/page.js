"use client"

import { DocumentPlusIcon } from '@heroicons/react/20/solid'
import Drawer from "./components/drawer";
import Image from "next/image";
import NutritionalInfo from './components/nutritional-info'
import { useState } from "react";

export default function Home() {
	const [foodSearchText, setFoodSearchText] = useState("")
	const [foundFood, setFoundFood] = useState(null)
	const [foodsInRecipe, setFoodsInRecipe] = useState([])

	const nutritionalTotal = {
		nf_calories: 0,
		nf_total_fat: 0,
		nf_saturated_fat: 0,
		nf_cholesterol: 0,
		nf_sodium: 0,
		nf_total_carbohydrate: 0,
		nf_dietary_fiber: 0,
		nf_sugars: 0,
		nf_protein: 0,
		nf_potassium: 0,
	}

	for (var i = 0; i < foodsInRecipe.length; i += 1) {
		const currentFood = foodsInRecipe[i];
		nutritionalTotal.nf_calories = nutritionalTotal.nf_calories + (currentFood.nf_calories || 0)
		nutritionalTotal.nf_total_fat = nutritionalTotal.nf_total_fat + (currentFood.nf_total_fat || 0)
		nutritionalTotal.nf_saturated_fat = nutritionalTotal.nf_saturated_fat + (currentFood.nf_saturated_fat || 0)
		nutritionalTotal.nf_cholesterol = nutritionalTotal.nf_cholesterol + (currentFood.nf_cholesterol || 0)
		nutritionalTotal.nf_sodium = nutritionalTotal.nf_sodium + (currentFood.nf_sodium || 0)
		nutritionalTotal.nf_total_carbohydrate = nutritionalTotal.nf_total_carbohydrate + (currentFood.nf_total_carbohydrate || 0)
		nutritionalTotal.nf_dietary_fiber = nutritionalTotal.nf_dietary_fiber + (currentFood.nf_dietary_fiber || 0)
		nutritionalTotal.nf_sugars = nutritionalTotal.nf_sugars + (currentFood.nf_sugars || 0)
		nutritionalTotal.nf_protein = nutritionalTotal.nf_protein + (currentFood.nf_protein || 0)
		nutritionalTotal.nf_potassium = nutritionalTotal.nf_potassium + (currentFood.nf_potassium || 0)
	}

	async function searchForNutrient(foodToSearch) {
		const res = await fetch(`/api/nutrients`, {
			method: `POST`,
			body: JSON.stringify({ search: foodToSearch })
		})
		const { data } = await res.json();
		setFoundFood(data)
	}

	return (
		<div className="md:mt-20">
			<div className="flex flex-col md:flex-row w-full md:w-1/2 md:mx-auto md:mb-12">
				<input
					className="text-black rounded-md text-4xl mt-2 md:w-2/3"
					type="text"
					onChange={(e) => setFoodSearchText(e.target.value)}
				/>
				<button
					className="text-white text-2xl border-2 rounded-md mt-2 w-full md:w-1/3 mx-2"
					onClick={() => searchForNutrient(foodSearchText)}
				>
					Search
				</button>
			</div>
			<div className="flex flex-col md:flex-row md:w-2/3 mx-auto">
				<div className="mx-4 mt-4 rounded-md border-4 border-blue-500 p-4 bg-gray-700 md:w-1/2">
					{foundFood ? (
						<>
							<Image
								alt={foundFood.food_name}
								className="rounded-lg"
								src={foundFood.photo.highres}
								width={500}
								height={500}
							/>
							<h1 className="text-4xl text-blue-300 uppercase text-left mt-2">{foundFood.food_name}</h1>
							<NutritionalInfo food={foundFood} />
							<button
								className="w-full flex justify-between text-2xl text-blue-300 mt-4 border-2 rounded-md border-blue-300 p-2"
								onClick={() => setFoodsInRecipe(foodsInRecipe.concat([foundFood]))}
							>
								Add to Recipe
								<DocumentPlusIcon className="h-8 w-8 text-blue-300" />
							</button>
						</>
					) : (
						<div className="text-4xl text-white">
							No Food Found
						</div>
					)}
				</div>
				<div className="mt-8 w-full  md:w-1/2">
					<Drawer title="Recipe">
						<div className="grid grid-cols-1 divide-y divide-blue-500">
							<div className="mt-2">
								<div className="text-black text-xl font-bold">Ingredients:</div>
								<div className="text-black text-lg capitalize">
									{foodsInRecipe.map(food => food.food_name).join(", ")}
								</div>
							</div>
							<div className="text-black mt-2">
								<div className="text-xl mt-2 font-bold">Nutritional Info:</div>
								<NutritionalInfo food={nutritionalTotal} />
							</div>
						</div>
					</Drawer>
				</div>
			</div>
		</div>
	);
}
