import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMarvelquizz from '../public/images/works/MarvelQuizzLanding.png'
import thumbTrouveLeNombre from '../public/images/works/TrouveLeNombre.png'
import thumbChatGPTclone from '../public/images/works/ChatGPTclone.png'
import thumbAnimatedLandingPage from '../public/images/works/AnimatedLandingPage.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={1} gap={6}>
        <Section>
          <WorkGridItem
            id="chatGPTclone"
            title="chatGPTclone"
            thumbnail={thumbChatGPTclone}
          >
            A react App with OpenAI API ,
            <br />
            Enjoy with the different tools!
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="marvelquizz"
            title="Marvelquizz"
            thumbnail={thumbMarvelquizz}
          >
            Quizz for Marvel addict!
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="animatedlandingpage"
            title="Animatedlandingpage"
            thumbnail={thumbAnimatedLandingPage}
          >
            A beautifull landing page
            <br />
            With great and modern animations
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="trouvelenombre"
            title="TrouveLeNombre"
            thumbnail={thumbTrouveLeNombre}
          >
            The famous game "hot or cold",
            <br />
            Find the right number if you can!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
