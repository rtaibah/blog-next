import { SimpleGrid } from '@chakra-ui/core'
import Container from '../components/common/container'
import PostItem from '../components/post/list-item'
import { frontMatter as posts } from './lifestream/*'

let sortedPosts = posts.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
)

export default function Index() {
  return (
    <Container>
      <SimpleGrid columns={3} spacing="8px">
        {sortedPosts.map(post => {
          return <PostItem {...post} key={post.__resourcePath} />
        })}
      </SimpleGrid>
    </Container>
  )
}
