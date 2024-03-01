
const BASE_URL = `https://trackapi.nutritionix.com/v2`

export async function POST(request) {
	const { search } = await request.json();

	const res = await fetch(`${BASE_URL}/natural/nutrients`, {
		method: `POST`,
		body: JSON.stringify({ query: search }),
		headers: {
			'Content-Type': 'application/json',
			'x-app-id': process.env.APP_ID,
			'x-app-key': process.env.APP_KEY
		},
	})

	const data = await res.json()
	return Response.json({ data: data?.foods[0] })
}