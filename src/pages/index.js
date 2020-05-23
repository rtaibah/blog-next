import { useState } from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/core'
import Container from '../components/common/container'
import PostItem from '../components/post/list-item'
import { frontMatter as posts } from './blog/*'
import Pagination from '../components/common/pagination'

let PER_PAGE = 20
let totalPosts = posts.length
let totalPages = Math.ceil(totalPosts / PER_PAGE)

let sortedPosts = posts.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
)

export default function Home() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(() =>
    router.query.page ? Number(router.query.page) : 1
  )

  function pagginationHandler({ selected }) {
    let nextPage = selected + 1
    setCurrentPage(nextPage)

    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page = nextPage

    router.push(
      {
        pathname: currentPath,
        query: currentQuery,
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Container>
      <Pagination
        pageCount={totalPages}
        pagginationHandler={pagginationHandler}
        currentPage={currentPage}
      />
      <Flex as="main" direction="column">
        {sortedPosts
          .slice(
            (currentPage - 1) * PER_PAGE,
            (currentPage - 1) * PER_PAGE + PER_PAGE
          )
          .map(post => {
            return <PostItem {...post} key={post.__resourcePath} />
          })}
      </Flex>
    </Container>
  )
}

// Required to be able to read the page number from the query param.
export async function getServerSideProps({ query }) {
  return { props: {} }
}
