import { Flex } from '@chakra-ui/core'
import Container from '../components/common/container'
import PostItem from '../components/post/list-item'
import { frontMatter as posts } from './books/*'

let sortedPosts = posts.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
)

export default function Index() {
  return (
    <Container>
      <Flex as="main" direction="column">
        {sortedPosts.map(post => {
          return <PostItem {...post} key={post.__resourcePath} />
        })}
      </Flex>
    </Container>
  )
}
