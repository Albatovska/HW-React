import React from "react";

const CommentsList = ({data}) => {
  
    return (
      <ul className={"list"}>
        {
          data.map((el, ind) => {
            return (
              <li className={"list-item"} key = {ind}>
                <div className={"item"}>
                <h4 className={"name"}>
                {el.autor} leave commet</h4>
                <p className={"text"}>- {el.comment}</p>
                </div>
              </li> 
            )
          })
        }
      </ul>
    )
}

export default CommentsList;