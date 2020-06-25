import React, {useState} from 'react';
import fishImage from '../Assets/Images/fishImage.jpg';
import puppyImage from '../Assets/Images/puppyImage.jpg';
import skiResort from '../Assets/Images/skiResort.jpg';
import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ReactCardFlip from 'react-card-flip';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: 'FishStore Website',
                subTitle: 'Creating a fully functioning fishstore.',
                imgSrc: fishImage,
                link: 'https://github.com/nguyenv9/Django-FishStore',
                selected: false
            },    
            {
                id: 1,
                title: 'PawsAboard',
                subTitle: 'A Tinder like app but with a little twist, it is for pet adoptions!',
                imgSrc: puppyImage,
                link: 'https://github.com/nguyenv9',
                selected: false
            }, 
            {
                id: 2,
                title: 'MyResort',
                subTitle: 'Project to locate ski resorts in nearby area using Geocoding and Geohashing',
                imgSrc: skiResort,
                link: 'https://github.com/nguyenv9',
                selected: false
            } 
            ],
            isFlipped: false
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    // handleClick = (id, card) => {
    //     const [isFlipped, setIsFlipped] = useState(false);
    //     let items = [...this.state.items];
    
    //     items[id].selected = items[id].selected ? false : true;

    //     items.forEach(item => {
    //         if(item.id !== id) {
    //         item.selected = false;
    //         }
    //     });

    //     this.setIsFlipped(!isFlipped);

    //     this.setState({
    //         items
    //     });
    // };

    // makeFlip = (items) => {
    //     return items.map(items => {
    //         return <Card item={item} click={(e => this.handleClick(item.id, e))} key={item.id} />
    //     })
    // }

    // CardFlip = () => {
    //     const [isFlipped, setIsFlipped] = useState(false);
    //     return (
    //         <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
    //             <div>
    //                 This is the front of the card.
    //                 <button onClick={this.handleClick}>Click to flip</button>
    //             </div>
    
    //             <div>
    //                 This is the back of the card.
    //                 <button onClick={this.handleClick}>Click to flip</button>
    //             </div>
    //         </ReactCardFlip>
    //     )
    // }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container> 
        );
    }

}

export default Carousel;