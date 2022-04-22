import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.componenet';
export const CardList = props => (
    //  console.log(props)
    // return <div className='card-list'>{props.children}</div>
    <div className='card-list'>
    {
        props.monsters.map(monster=>(
          //<h1 key={monster.id}>{monster.name}</h1>
          <Card key={monster.id} monster={monster}/>
          ))
    }
    </div>
);