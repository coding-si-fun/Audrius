import express from "express"
import path from "path"
import fs from "fs"
import cors from "cors"

// Get __dirname in ES modules
const __dirname = new URL(".", import.meta.url).pathname

const app = express()
app.use(cors()) // Allow cross-origin requests

// Serve static files (like images) from the 'public' directory
app.use("/public", express.static(path.join(__dirname, "public")))

// API endpoint to get image names from dynamic folder paths
app.get("/api/images/:category", (req, res) => {
	const category = req.params.category // Get the category (e.g., 'lauko-baldai')
	const directoryPath = path.join(__dirname, "public", "photos", category)

	fs.readdir(directoryPath, (err, files) => {
		if (err) {
			return res.status(500).send("Unable to scan directory")
		}

		// Filter only image files (optional)
		const imageFiles = files.filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/))

		// Return the full image paths
		const imagePaths = imageFiles.map((file) => `/public/photos/${category}/${file}`)
		res.json(imagePaths)
	})
})

// Start the server on port 3000
const port = 3000
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
