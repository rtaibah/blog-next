import { bgColor, color } from '../../../config/theme'
import ReactPaginate from 'react-paginate'
import style from './styles.module.scss'

export default function Pagination({ currentPage, pageCount, pagginationHandler }) {
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      activeClassName={'active'}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      initialPage={0}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={pagginationHandler}
    />
  )
}
