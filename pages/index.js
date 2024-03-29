import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoMailOutline, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a web developer based in Bordeaux!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Grégory C.
          </Heading>
          <p>Front-end JS developer (React/Redux/Next)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Gregory.jpg"
              alt="Profile image"
              borderRadius="full"
              width="120%"
              height="120%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I'm a french front-end developer based in Bordeaux. I learned code by
          myself on my free-time and I love that so much. Curious and motivated,
          I like to study new things every day and create. Soldier in my old
          life, I'm not afraid about new challenges and attached to values.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1980</BioYear>
          Born in North of France.
        </BioSection>
        <BioSection>
          <BioYear>2001</BioYear>
          After one year in University, I decided to join the army. I passed
          more than 20 years to travel all over the world and to live from my
          passion.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>I discover the code and never stop! What a
          fascinating world...
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Time for me to start a new life and become a professional developer.
          <br />
          Open to work...
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Diving, Music, Crypto,{' '}
          <Link href="https://500px.com/p/gregchapauli" target="_blank">
            Photography
          </Link>
          , casual evening
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/gregchapauli" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @gregchapauli
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/gr%C3%A9gory-c-a49b5b1aa/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Grégory C.
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:gregchapauli@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOutline />}
              >
                @gregchapauli@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              disabled
            >
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home

// //FOR SSR SITE
// export { getServerSideProps } from '../components/chakra'

//FOR SSG SITE
export { getStaticProps } from '../components/chakra'
