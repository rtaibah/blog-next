import ReactPaginate from 'react-paginate'
import style from './styles.module.scss'

export default function Pagination({
  pageCount,
  currentPage,
  pagginationHandler,
}) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      activeClassName={'active'}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      onPageChange={pagginationHandler}
      forcePage={currentPage - 1}
    />
  )
}
