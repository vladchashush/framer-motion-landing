export default function githubPagesLoader({ src }: { src: string }) {
	return `${process.env.NEXT_PUBLIC_BASE_URL}${src}`
}
