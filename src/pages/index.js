import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import Router, { withRouter } from 'next/router'
import { Flex } from '@chakra-ui/core'
import Container from '../components/common/container'
import PostItem from '../components/post/list-item'
import { frontMatter as posts } from './blog/*'

let PER_PAGE = 20
let postCount = posts.length
let pageCount = postCount / PER_PAGE
let currentPage = 1

let sortedPosts = posts.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
)

const Home = props => {
  const [isLoading, setLoading] = useState(false) //State for the loading indicator
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  /*
*           Posts fetching happens after page navigation, 
*                     so we need to switch Loading state on Router events.
*
*/

  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)

    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  const pagginationHandler = page => {
    const currentPath = props.router.pathname
    const currentQuery = props.router.query
    currentQuery.page = page.selected + 1
    currentPage = page.selected * PER_PAGE

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }

  return (
    <Container>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pagginationHandler}
      />

      <Flex as="main" direction="column">
        {sortedPosts.slice(currentPage, currentPage + PER_PAGE).map(post => {
          return <PostItem {...post} key={post.__resourcePath} />
        })}
      </Flex>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pagginationHandler}
      />
    </Container>
  )
}

export default withRouter(Home)
