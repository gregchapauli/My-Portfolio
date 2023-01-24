import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="animatedlandingpage">
    <Container>
      <Title>
        Animated landing page <Badge>2023</Badge>
      </Title>
      <P>
        This landing page is made with simple HTML/CSS/JS and offers modern and
        styled animations
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/gregchapauli/Animated-Landing-Page/">
            <span>Animated Landing Page</span>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Vercel</span>
        </ListItem>
      </List>

      <Link href="https://animated-landing-page-xi.vercel.app/">
        <WorkImage
          src="/images/works/AnimatedLandingPage.png"
          alt="AnimatedLandingPage"
        />
      </Link>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
