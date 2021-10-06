export interface PageInterface {
	uid: string
	tags: string[]
	title: string
	body: any[]
}
export const pageResolver = (node: any): PageInterface => ({
	uid: node.uid,
	tags: node.tags,
	title: node.data.title,
	body: node.data.body
})
