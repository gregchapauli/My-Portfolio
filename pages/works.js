import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMarvelquizz from '../public/images/works/MarvelQuizzLanding.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={1} gap={6}>
        <Section>
          <WorkGridItem
            id="marvelquizz"
            title="marvelquizz"
            thumbnail={thumbMarvelquizz}
          >
            Quizz for Marvel addict!
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem
            id=""
            title=""
            thumbnail={}
          >
            New work
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Section for Other kind of Work
        </Heading>
      </Section> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
