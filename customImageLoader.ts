export default function githubPagesLoader({ src }: { src: string }) {
	return `${process.env.BASE_URL}${src}`
}
