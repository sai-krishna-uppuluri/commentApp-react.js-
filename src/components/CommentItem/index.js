import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment} = props
  const {id, name, comment, isLiked, backgroundClassName, date} = eachComment

  const initial = name ? name[0].toUpperCase() : ''

  const postedTime = formatDistanceToNow(date)

  const likeTextClass = isLiked ? 'active-button' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeButton = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onClickDeleteButton = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-list-item">
      <div className="comment-container">
        <div className={backgroundClassName}>
          <p className="initial"> {initial}</p>
        </div>
        <div>
          <div className="user-details-container">
            <div className="user-name-details">
              <p className="user-name"> {name}</p>
              <p className="time"> {postedTime} </p>
            </div>
            <p className="user-comment"> {comment}</p>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClass}
            type="button"
            onClick={onClickLikeButton}
          >
            like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onClickDeleteButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
