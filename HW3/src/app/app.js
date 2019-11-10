import React, { Component } from 'react';
import CommentsList from "../CommentsList/commentList";
import CreateComment from "../CreateComment/CreateComment";
import './app.css';

const data = [
    {autor: "Dmitry", comment: " This movie is awesome"},
    {autor: "Robert", comment: " Don't like this film at al"},
    {autor: "Olga", comment: " I'm going to watch this movie soon..."},
]

class App extends Component {
    state = {
         list: data
    }


    add = (autor, comment) => {
      if(autor === "" || comment === "") return;
        this.setState({
            list: [
                ...this.state.list,
                {autor: autor, comment: comment }
            ]
        })
       }
       
    render() {
 
        const {list} = this.state

        return (
            <div className={"wrap"}>
                <div className={"main-container"}>
                    <CommentsList data={list} />
                    <CreateComment add = {this.add}/>
                </div>
            </div>
        )
    }

}

export default App;