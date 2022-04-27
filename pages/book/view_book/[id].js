import { Box, Button, Container, Heading, HStack, Text, Image, Link, VStack, Divider, Stack, Flex } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { StarIcon } from "@chakra-ui/icons";

const ViewBook = ({ singleBook }) => { 

    return (
        <Container maxW='container.lg' p={0}>
            <VStack h='100vh' spacing={10}>
                <Box w='full'>
                    <NextLink href='/' passHref>
                        <Link >
                            <Button size='lg' variant='ghost' _hover={{ backgroundColor : 'none'}}> Home </Button>
                        </Link>
                    </NextLink>
                </Box>

                <Flex w='full' alignItems='flex-start' spacing={10} direction={{ base: "column-reverse", md: "row" }} >
                    <Box mt={4} alignSelf='center'>
                        <Image h="250px" maxW="450px" src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781593279509_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D" alt="Javascript ThirdEdition book" />
                    </Box>

                    <VStack w='full' px={{ base : 12}} alignItems='center' spacing={2}>
                        <Heading lineHeight={1.25} as='h1' fontSize='2xl' fontWeight='thin' fontFamily='Poynter,Georgia,serif' textAlign='center'> {singleBook.title} </Heading>
                        <Stack direction='row' spacing={3}>
                            <HStack spacing={3}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </HStack>
                            <Text> (5) </Text>
                        </Stack>
                        <Box> by <Text color='green' fontWeight='semibold' display='inline'> {singleBook.author} </Text> </Box>
                        <Box> Price: <Text fontWeight='semibold' display='inline'> ${singleBook.price}</Text>
                        </Box>

                        <Box> ISBN: <Text fontWeight='semibold' display='inline' fontSize='sm'> ${singleBook.isbn}</Text>
                        </Box>
                    </VStack>
                </Flex>
                <Divider borderWidth='1px' borderColor='gray.200' w={{ base : '90vw'}} />
                <VStack alignItems='flex-start' w='full' px={4}>
                    <Heading as='h2' fontFamily='Poynter,Georgia,serif' fontSize='2xl' fontWeight='normal'>
                        <i> Overview </i>
                    </Heading>

                    <Text>
                        { singleBook.summary }
                    </Text>
                </VStack>
            </VStack>
        </Container>
    )
}

export async function getServerSideProps({ query: {id} }) { 

    const response = await fetch(`/api/a_book/${id}`);
    const singleBook = await response.json();

    return {
        props: {
           singleBook
        }
    }
};

export default ViewBook;