import { Image, Flex, Divider, Text, Heading } from '@chakra-ui/core'
import RouterLink from 'next/link'
import { formatDate, formatPath } from '../../utils/formatters'

export default function PostItem({
  publishedAt,
  title,
  url,
  image,
  excerpt,
  __resourcePath,
}) {
  let formattedPublishedAt = formatDate(publishedAt)
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
          <Text fontSize={['md', 'lg', 'xl', 'xl']}>
            {excerpt}

            <RouterLink href={formatPath(__resourcePath)} passHref>
              <Text as="a" ml="4" fontSize={['md', 'lg', 'xl', 'xl']}>
                read more...
              </Text>
            </RouterLink>
          </Text>
        </Flex>

        <Divider mt="30px" />
      </Flex>
    </Flex>
  )
}
