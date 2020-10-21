import React from 'react';

export default function CharacterCard(props){
    return (
        <div>
            <h1>{props.chars.name}</h1>
            <img src={props.chars.image} alt="rick morty dimension"/>
            <h1>Location: {props.chars.location.name}</h1>
            <h1>Origin: {props.chars.origin.name} </h1>
            <h1>Episode: {props.chars.episode.length}</h1>
            <h2>Species: {props.chars.species}</h2>
            <h2>Gender: {props.chars.gender}</h2>
        </div>  
    );
}