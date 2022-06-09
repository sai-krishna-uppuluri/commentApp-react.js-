import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundClassNameOfComment = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      backgroundClassName: initialBackgroundClassNameOfComment,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  renderCommentList = () => {
    const {commentList} = this.state

    return commentList.map(eachComment => (
      <CommentItem key={eachComment.id} eachComment={eachComment} />
    ))
  }

  render() {
    const {nameInput, commentInput} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="main-heading"> Comments </h1>
          <div className="comments-input-container">
            <form className="comments-form" onSubmit={this.onClickSubmit}>
              <p className="main-description">
                say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="input-comment-box"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeInput}
              />
              <textarea
                row="6"
                className="text-area-box"
                placeholder="Your comments"
                value={commentInput}
                onChange={this.onChangeCommentInput}
              />
              <button type="submit" className="comment-button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="line" />
          <p className="comments-description">Comments </p>
          <ul className="comment-list">{this.renderCommentList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
