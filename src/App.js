import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Sentence from './components/Sentence'


const Container = styled.div`
display:flex;
align-items:center;
padding-top:3rem;
flex-direction:column;
`;

const Button = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size:300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-top:3rem;
padding:1rem 3rem;
font-size:2rem;
border:2px solid black;
transition: background-size .8s ease;

:hover{
  cursor: pointer;
  background-size:400px;
}
`;


function App() {

  //State de frases
  const [sentence, setSentence] = useState({});


  const getApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const sentence = await api.json();
    setSentence(sentence[0])
   
  }

  //Cargar una frase al iniciar la app
  useEffect(()=>{
    getApi();
  },[])

  return (
    <Container>
      <Sentence
      sentence={sentence}
      />
      <Button
      onClick={getApi}
      >Obtener Frase</Button>
    </Container>
  );
}

export default App;
