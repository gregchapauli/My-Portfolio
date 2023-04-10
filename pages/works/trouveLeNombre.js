import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="trouvelenombre">
    <Container>
      <Title>
        Trouve le nombre <Badge>2021</Badge>
      </Title>
      <P>
        TrouveLeNombre is a little funny pure javascript application. The better
        way to learn JS basics. In this game, you haves 6 chance to find the
        good number between 0 and 100. The color of the background change
        according to wether you are close or far from it. Good Luck!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/gregchapauli/Jeu-Trouve-le-nombre"
            target="_blank"
          >
            <span>Trouve le nombre</span>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, vanilla JS</span>
        </ListItem>
      </List>

      <Link href="https://jeu-trouve-le-nombre.vercel.app/" target="_blank">
        <WorkImage
          src="/images/works/TrouveLeNombre.png"
          alt="TrouveLeNombre"
        />
      </Link>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
