import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/core'
import Container from '../components/common/container'
import PostItem from '../components/post/list-item'
import { frontMatter as posts } from './blog/*'
import Pagination from '../components/common/pagination'

let PER_PAGE = 20
let postCount = posts.length
let pageCount = postCount / PER_PAGE //decimal point?

let sortedPosts = posts.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
)

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const pageNumber = router.query.page || 0
    setCurrentPage(pageNumber)
  }, [])
  const pagginationHandler = page => {
    setCurrentPage(page.selected + 1)
    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page = page.selected + 1

    router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }

  return (
    <Container>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        pagginationHandler={pagginationHandler}
      />
      <Flex as="main" direction="column">
        {sortedPosts.slice(currentPage, +currentPage * PER_PAGE).map(post => {
          return <PostItem {...post} key={post.__resourcePath} />
        })}
      </Flex>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        pagginationHandler={pagginationHandler}
      />
    </Container>
  )
}

export default Home
