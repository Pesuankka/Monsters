import react from "react";
import './card-list.css';
import {Card} from '../card/card';

export const CardList = (props) => {
   return (
    <div className="card-list">
        {props.monsters.map(monsters =>
        <Card key={monsters.id} monster={monsters}/>
     )}</div>
   ) 
} 