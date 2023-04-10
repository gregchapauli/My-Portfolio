import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="chatGPTclone">
    <Container>
      <Title>
        chatGPT-clone <Badge>2023</Badge>
      </Title>
      <P>
        This App is a made with ReactJS and openAI API. It offers different case
        of use Artificial Intelligence like grammar correction or code
        explaination !
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/gregchapauli/chatGPT-clone"
            target="_blank"
          >
            <span>chatGPT-clone</span>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs 16.8, Vercel</span>
        </ListItem>
      </List>

      <Link href="https://chat-gpt-clone-psi.vercel.app/" target="_blank">
        <WorkImage src="/images/works/ChatGPTclone.png" alt="chatGPTclone" />
      </Link>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
