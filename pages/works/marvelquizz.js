import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="marvelquizz">
    <Container>
      <Title>
        Marvel-Quizz <Badge>2022</Badge>
      </Title>
      <P>
        Marvel-Quiz is a small React JS Web App using advanced skills like
        Hooks, React-Router and API. This app is builded with Firebase and uses
        Firestore cloud functions !
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/gregchapauli/marvel-quizz">
            <span>Marvel-Quizz</span>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs 16.8, Firestore</span>
        </ListItem>
      </List>

      <Link href="https://marvel-quizz-10c02.web.app/">
        <WorkImage
          src="/images/works/MarvelQuizzLanding.png"
          alt="MarvelQuizz"
        />
      </Link>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
