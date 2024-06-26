import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import { FaFileAlt, FaEnvelope } from 'react-icons/fa'; // Importez des icônes pour les liens
import { NavLink } from 'react-router-dom';




const Home = () => {
    return (
        <Container maxW="container.md" py={12} centerContent>
            <Heading as="h1" size="xl" color="blue.600" textAlign="center" mb={8}>
                Bienvenue sur mon site web
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NavLink
            to="/cv"
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
        >
            <FaFileAlt size={40} color="#3182CE" />
            <h2 className="text-2xl font-bold my-4 text-blue-600">My CV</h2>
            <p className="text-gray-700 text-center">Consultez mon CV détaillé</p>
        </NavLink>

                  <NavLink to="/formulaire" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                    <FaEnvelope size={40} color="#3182CE" />
                    <h2 className="text-2xl font-bold my-4 text-blue-600">Formulaire. </h2>
                    <p className="text-gray-700 text-center">Remplissez le formulaire</p>
                </NavLink>

               
            </div>
        </Container>
    );
};
export default Home;