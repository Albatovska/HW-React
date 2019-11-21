import React, { Component } from 'react';
import "./app.css";
import GalleryService from "../../service";
import RandomPhoto from '../random-photo/random-photo';

const service = new GalleryService();

class App extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        service.getPhotos()
            .then((list) => {
                this.setState({ list })
            })
    }

    render() {
        const { list } = this.state;

        return ( <div className = "app" >
            <RandomPhoto / >
            <div className={"gallery-section"}>
                <div className="gallery-container">
             {
                list.map((el) => {
                    return ( 
                        <div className={"image-item"}>
                            <img 
                                key = { el.id }
                                src = { el.urls.small }
                                alt = "" / >
                        </div>
                    )
                })
            }
            </div>
            </div>
             </div>
        );
    }
}

export default App;