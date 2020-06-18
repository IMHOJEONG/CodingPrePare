import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost'; 
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const GET_MOVIE = gql`
	query getMovie($id: Int!){ 
		
			movie(id: $id){
                title
                medium_cover_image
                language
                rating
                description_intro
				
			}
		
	}
`;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    color:white;
`;

const Column = styled.div`
    margin-left:10px;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size:28px;
`;

const Poster = styled.div`
    width:25%;
    background-color:transparent;
    height: 50%;
`;


export default () => {
    const { id } = useParams();
	const { loading, data } = useQuery(GET_MOVIE, {
        variables : { id : parseInt(id) } 
    });
    // if(loading){
    //     return "loading";
    // }
    // if(data && data.movie){
    //     return data.movie.title;
    // }
	// console.log(loading, data);
	// return "Detail";
    return ( 
        <Container>
            <Column>
                <Title>Name</Title>
                <Subtitle>English Test</Subtitle>
                <Description>!!!!!!</Description>
            </Column>
            <Poster></Poster>
        </Container>
    );
};