import { Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Textarea, toast, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { useRouter } from "next/router";

// sm: "320px",
// md: "768px",
// lg: "960px",
// xl: "1200px",

const UpdateBook = () => { 

    const { push } = useRouter();

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        price: "",
        summary: ""
    });

    const toast = useToast({
                    position: 'top',
                    containerStyle: {
                    width: '100px',
                    maxWidth: '100%',
                    },
        })

        
    const { title, author, price, summary } = newBook;
    
    const isErrorTitle = title === "";
    const isErrorAuthor = author === "";
    const isErrorPrice = price === "";
    const isErrorSummary = summary === "";


    const handleChange = (e) => { 
        const { name, value } = e.target;

        setNewBook({...newBook, [name]:value});
    }

    const validator = (e) => { 

        const { title, author, price, summary } = newBook;

        if (title.length < 1) {
            toast({
                title: 'title field cannot be empty',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }

        if (author.length < 1) {
            toast({
                title: 'author field cannot be empty',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }

        if (price.length < 1) {
            toast({
                title: 'price field cannot be empty',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }

        if (summary.length < 1) {
            toast({
                title: 'summary field cannot be empty',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
     };

    const handleNewBookSubmit = (e) => {
        e.preventDefault();
        // validator();

        console.log("book added");

        // push('/')
     };

    return (
    <Container maxW='container.md' p={0}>
            
            <VStack w='full' h={{ sm: '80vh' }} spacing={10} mt={4} borderRadius={{ sm : 0}} borderColor="gray.300" borderWidth={{ sm : 0}} my={{ sm : '15', lg : '0'}} p={{sm : 0 , md : 0, lg : 2}} >
        
            <Heading as='h1' fontSize={{ sm : '2xl'}} mt={{ sm : 10, md : 16, lg : 8}}>
                Update A Book        
            </Heading>

            <Box w='full' px={12}>
                <form onSubmit={handleNewBookSubmit}>
                    <VStack spacing={6}>
                            
                        <FormControl isInvalid={isErrorTitle}>
                            <Input id="title" name='title' onChange={handleChange} type='text' value={title} placeholder="Title" /> 
                            { !isErrorTitle ? (<FormHelperText> Title of the book </FormHelperText>) : ( <FormErrorMessage> Title name is required </FormErrorMessage>)}        
                            </FormControl>
                            
                        <FormControl isInvalid={isErrorAuthor}>
                            <Input id="author" name='author' onChange={handleChange} type='text' value={author} placeholder="author" /> 
                            { !isErrorTitle ? (<FormHelperText> Author name </FormHelperText>) : ( <FormErrorMessage> author name is required </FormErrorMessage>)}        
                        </FormControl>

                        <FormControl isInvalid={isErrorPrice}>
                            <Input id="price" name='price' onChange={handleChange} type='number' value={price} placeholder="price" /> 
                            { !isErrorTitle ? (<FormHelperText> Price </FormHelperText>) : ( <FormErrorMessage> Price is required </FormErrorMessage>)}        
                        </FormControl>    

                        <FormControl isInvalid={isErrorSummary}>
                            <Input id="summary" name='summary' onChange={handleChange} type='text' value={summary} placeholder="summary" /> 
                            { !isErrorTitle ? (<FormHelperText> summary must be between 100 and 200 characters </FormHelperText>) : ( <FormErrorMessage> Summary is required </FormErrorMessage>)}        
                        </FormControl>  
                        <Button type="submit" colorScheme='telegram' w='full'> Update A Book </Button>    
                    </VStack>
                </form>    
            </Box>    
        </VStack>        
    </Container>
    )
}

export default UpdateBook;