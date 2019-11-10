import React, {Component} from "react";

class CreateComment extends Component {
  state = {
   autor: "",
   comment: ""
}

   changeAutor = (e) =>{
      const {value} = e.target
      this.setState({autor: value});
    }

    changeComment = (e) => {
      const {value} = e.target
      this.setState({comment: value});
    }

 
 
  onSubmit = (e) => {
    e.preventDefault();
    const {autor, comment} =this.state;
    this.props.add(autor, comment);
     this.setState({
      autor: "",
      comment: ""      
    })
    
  }

  render () {
  
   const {autor, comment} = this.state;

    return (
     
      <div className={"coment"}>
        <form action="" className="form" onSubmit = {(e) => this.onSubmit(e)}>
          <input 
          value = {autor}
          onChange = {(e) => this.changeAutor(e, autor)}
          type="text" 
          className={"input"}
          placeholder={"Your name here..."}/>
          <p>
          <textarea 
          value = {comment}
          onChange = {(e) => this.changeComment(e, comment)}
          className={"textarea"} 
          placeholder={"Your comment here..."} 
          cols="30" 
          rows="auto">
          </textarea>
          </p>
          <button type="submit" className={"button"}>Add commet</button>
        </form>
      </div>
    )
  }
}

export default CreateComment;