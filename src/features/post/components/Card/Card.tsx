import { Flex } from '@/features/common/utils/Flex'
import { Txt } from '@/features/common/components/Typography'
import dayjs from 'dayjs'
import Image from 'next/image'
import * as styles from './styles.css'
import { Icon } from '@/features/common/components/Icon'
import { Chip } from '@/features/common/components/Chip'
import Link from 'next/link'

export type CardProps = {
  title: string
  description: string
  image: string
  createdAt: Date | string
  tags: string[]
}

export const Card = ({ title, description, image, createdAt, tags }: CardProps) => {
  return (
    <Flex
      align='center'
      justify='between'
      className={styles.card}
      asChild>
      <Link href={`/posts/${title}`}>
        <Flex>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt={title}
              width={240}
              height={150}
              className={styles.image}
            />
          </div>
          <Flex
            className={styles.content}
            direction='column'
            gap={10}>
            <Txt
              className={styles.title}
              fontSize='h2'>
              {title}
            </Txt>
            <Flex
              direction='column'
              gap={5}>
              <Txt
                fontSize='body'
                color='secondary'>
                {description}
              </Txt>
              <Txt
                fontSize='caption'
                color='secondary'>
                {dayjs(createdAt).format('YYYY-MM-DD')}
              </Txt>
              <Flex gap={5}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    color='secondary'
                    size='medium'>
                    {tag}
                  </Chip>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Icon
          className={styles.icon}
          name='ArrowRight'
          size={24}
        />
      </Link>
    </Flex>
  )
}
