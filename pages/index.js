import { useRouter } from "next/router";
import { MdOutlineModeEditOutline, MdOutlineVisibility } from "react-icons/md";
import NextLink from "next/link";
import { DeleteIcon } from "@chakra-ui/icons";

const { Container, Text, VStack, Heading, TableContainer, Table, Thead, Tbody, Tfoot, Button, HStack, VisuallyHidden, Center, IconButton, Link } = require("@chakra-ui/react")

const Home = ({ books }) => {

  const { push, query } = useRouter();

  const handleBookDelete = async (id) => { 

          try {
            await fetch(`http://localhost:3000/api/a_book/${id}`, {
                method: "DELETE",
        
            })
          }
          catch (err) {
                console.log(err);
          }
          
          push('/')
  };

  return (
    <Container maxW='container.xl' p={0}>
      <VStack w='full' h='100vh' spacing={10} mt={ 4}>

        <Heading> Book Shelf </Heading>

        <NextLink href={`/book/add_book`} passHref>
          <Link>
            <Button colorScheme='teal' onClick={() => push("/book/add_book")} > Add Book </Button>
          </Link>
        </NextLink>
        
        <TableContainer w={{ sm : 'full', md : '60vw', lg : '60vw', xl : '80vw'}} borderWidth={2} borderColor='gray.200'>
          <Table variant='striped'>
            <Thead>
              <tr>
                <th> <Center> Title </Center> </th>
                <th> <Center> Author </Center> </th>
                <th> <Center> Price </Center> </th>
                <th> <Center> Category </Center> </th>
                <th></th>
              </tr>
            </Thead>

            <Tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td> <Text> { book.title } </Text> </td>
                  <td> <Text> { book.author} </Text> </td>
                  <td> <Text> {book.price} </Text> </td>
                  <td> <Text textAlign='center'> { book.category } </Text></td>
                  <td> 
                    <HStack justifyContent='space-around' p={0}>
                      <NextLink href={`/book/add_book/${book._id}`} passHref>
                        <Link>
                          <IconButton variant='ghost' size='lg' ml={0} icon={< MdOutlineModeEditOutline/>} />
                        </Link>
                      </NextLink>

                      <NextLink href={`/book/view_book/${book._id}`} passHref>
                        <Link>
                          <IconButton variant='ghost' size='lg' m={0} icon={<MdOutlineVisibility  />} />
                        </Link>
                      </NextLink>
                      
                      <Button onClick={() => handleBookDelete(book._id)} variant='ghost'>
                        <DeleteIcon />
                      </Button>
                    </HStack>
                  </td>
                </tr>
              ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    </Container>
  )
}

export async function getServerSideProps() {
  
  const response = await fetch("http://localhost:3000/api/all_books/");
  const books = await response.json();
  return { 
    props: {
      books
    }
  }
}

export default Home;