import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box marginTop="30px" align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()}{' '}
      <a href="https://www.craftz.dog/">All Right Reserved</a>
    </Box>
  )
}

export default Footer
