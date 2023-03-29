import React from 'react';
import Button from './Button';
import "./styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote}) => {
    console.log(quote)
    return (
        <section className='containerInfo'>
            <h1 className='containerInfo__title'>InfoGalax</h1>

            <Button handleNewQuote={handleNewQuote} />



            <article className='containerInfo__phrase'>
                <p>{quote.phrase}</p>
            </article>

            <article className='containerInfo__author'>
                <h4>Fuente: {quote.author}</h4>
            </article>
        </section>
    );
};

export default ContainerInfo


