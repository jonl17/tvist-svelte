import Prismic from '@prismicio/client'

const apiEndpoint = `https://tvist.cdn.prismic.io/api/v2`
const Client = Prismic.client(apiEndpoint)

export { Client }
