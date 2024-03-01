export default function NutritionalInfo({ food }) {
	return (
		<div className="grid grid-cols-2 gap-x-4 mt-2">
			<div className="flex justify-between">
				<p className="font-bold">
					Calories:
				</p>
				{food.nf_calories.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Total Fat:
				</p>
				{food.nf_total_fat.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Sat. Fat:
				</p>
				{food.nf_saturated_fat.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Cholesterol:
				</p>
				{food.nf_cholesterol.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Sodium:
				</p>
				{food.nf_sodium.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Total Carb:
				</p>
				{food.nf_total_carbohydrate.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Dietary Fiber:
				</p>
				{food.nf_dietary_fiber.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Sugars:
				</p>
				{food.nf_sugars.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Protein:
				</p>
				{food.nf_protein.toFixed(2)}
			</div>
			<div className="flex justify-between">
				<p className="font-bold">
					Potassium:
				</p>
				{food.nf_potassium.toFixed(2)}
			</div>
		</div>
	)
}