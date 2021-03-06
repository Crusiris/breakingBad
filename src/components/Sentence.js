import React from 'react';
import styled from '@emotion/styled';

const ContainerSentence = styled.div`
padding:1rem;
border-radius:.5rem;
background-color:#fff;
max-width:800px;
    @media (min-width:772px){
        margin-top:18rem;
    }

    h1{
        font-family:Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding-left:4rem;

        &::before{
            content:open-quote;
            font-size:10rem;
            color:black;
            position:absolute;
            left:-1rem;
            top:-2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size:1.6rem;
        text-align:right;
        color: #666;
        font-weight:bold;
        margin-top:2rem;
    }
`;

const Sentence = ({sentence}) => {
    return (  
        <ContainerSentence>
             <h1>{sentence.quote}</h1>
             <p>{sentence.author}</p>
        </ContainerSentence>
       
    );
}
 
export default Sentence;
