import { Component } from 'react'
import './card-list.styles.css';
import Card from '../card/card.component.tsx';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return(
            <div className='card-list'>
                {monsters.map((item) =>{
                     return (
                        <Card monster={item}/>
                      )
                })}
            </div>
        )
    }
}

export default CardList
