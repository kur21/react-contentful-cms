import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
	space: 'c1yb1gjbvks8',
	environment: 'master', // defaults to 'master' if not set
	accessToken: import.meta.env.VITE_API_KEY
})

export const useFetchProjects = () => {
	const [loading, setLoading] = useState(false)
	const [projects, setProjects] = useState([])

	const getData = async () => {
		setLoading(true)
		try {
			const res = await client.getEntries({ content_type: 'allReactProjects' })
			const data = res.items.map((item) => {
				const { title, url, image } = item.fields
				const id = item.sys.id
				const img = image?.fields?.file?.url
				return { title, url, id, img }
			})
			setProjects(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return { loading, projects }
}
