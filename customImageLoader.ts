const basePath = process.env.IMAGE_SRC_URL

export default function githubPagesLoader({ src }: { src: string }) {
	return `${basePath}${src}`
}
