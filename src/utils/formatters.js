import dayjs from 'dayjs'

export function formatDate(date) {
  return dayjs(date).format('YYYY, MMMM D')
}

export function formatPath(p) {
  let [path] = p.match(/\/pages\/.*\.mdx$/)
  path = path.replace(/\/pages/, '')
  return path.replace(/\.mdx$/, '')
}
