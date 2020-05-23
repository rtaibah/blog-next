import { Image, Flex, Divider, Text, Heading } from '@chakra-ui/core'
import RouterLink from 'next/link'
import { formatDate, formatPath } from '../../utils/formatters'
import ReadingTime from './reading-time'

export default function PostItem({
  publishedAt,
  title,
  url,
  image,
  excerpt,
  readingTime,
  __resourcePath,
}) {
  let formattedPublishedAt = formatDate(publishedAt)
  let minutes = parseInt(readingTime.minutes)
  return (
    <Flex
      as="article"
      direction="column"
      dir="ltr"
      mt="30px"
      p="3"
      alignSelf="flext-start"
    >
      <Flex direction={['column', 'column', 'row', 'row']}>
        {image ? (
          <Image
            src={'/assets/images/content/' + url + '/' + image}
            alt={title}
            size={['150px', '150px', '250px']}
            objectFit="cover"
          />
        ) : (
          <Image
            src={'https://via.placeholder.com/150'}
            alt={title}
            size={['250px', '250px', '250px']}
            objectFit="cover"
          />
        )}
        <Flex direction={'column'} marginLeft="40px">
          <RouterLink href={formatPath(__resourcePath)} passHref>
            <Heading as="a" lineHeight="1.8" fontSize={['md', '2xl', '2xl']}>
              {title}
            </Heading>
          </RouterLink>
          <Text ml="4" fontSize={['md', 'lg', 'xl', 'xl']}>
            {formattedPublishedAt}
          </Text>
          <Text fontSize={['md', 'lg', 'xl', 'xl']}>{excerpt}</Text>
        </Flex>

        <Divider mt="30px" />
      </Flex>
    </Flex>
  )
}
