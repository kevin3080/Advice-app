import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const useFetchApi = () => {

  

    const api = 'https://api.adviceslip.com/advice'


    

    const [frase, setFrase] = useState({
      advice: null,
      id: null,
    })
    
    const random = () => {
      getAdvice()
      
    }

    useEffect(() => {
      getAdvice()
    }, [])
    
    

    function getAdvice(){
      fetch(api)
      .then(res => res.json())
      .then(response => {
        const {slip = []} = response
        
        setFrase(slip)
      })



    }


    

  return{
    id: frase.id,
    advice: frase.advice,
    random,
  }
   
  
}