import { Flex } from '@/utils/Flex'
import { Card } from '../post/components/Card/Card'

export const Container = () => {
  return (
    <Flex>
      <Card
        title='test'
        description='test'
        image='test'
        createdAt='test'
        tags={[]}
      />
    </Flex>
  )
}
