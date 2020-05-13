const title = 'Rami Taibah - Just a Front-end Developer and UX guy'
const description = 'Fill in this later'

export const url = 'https://rtaibah.com'
const locale = 'en'
const twitterHandle = '@rtaibah'

const firstName = 'Rami'
const lastName = 'Taibah'
export const fullName = `${firstName} ${lastName}`

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale,
    url,
    site_name: fullName,
    title,
    description,
    profile: {
      firstName,
      lastName,
    },
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: 'summary_large_image',
  },
}
