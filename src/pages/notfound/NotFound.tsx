import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FullPage, StyledH3, StyledP } from '../../GeneralStyles'
import { CardNotFound } from './NotFound.styles'

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(()=>{
       setTimeout(() => navigate('/'), 3000);
    },[])
  return (
    <FullPage>
        <CardNotFound>
            <StyledH3>Página não encontrada.</StyledH3>
            <StyledP>Você será redirecionado...</StyledP>
        </CardNotFound>
    </FullPage>
  )
}

export default NotFound