import React from 'react'
import reactDom from 'react-dom'
import './Message.scss'

const Message = ({ message, onClickOk, onClickTry, labelOk, labelTry }) => {
  return (
    <div className="message-container">
      <p className="message">{message}</p>
      <div className="buttons-container">
        <div className="button" onClick={onClickOk}>{labelOk}</div>
        <div className="button" onClick={onClickTry}>{labelTry}</div>
      </div>
    </div>
  )
}

const MessagePortal = ({ message, onClickOk, onClickTry, labelOk, labelTry }) => {
  return reactDom.createPortal(
  <Message
    message={message}
    onClickOk={onClickOk}
    onClickTry={onClickTry}
    labelOk={labelOk}
    labelTry={labelTry} />, document.getElementsByClassName('board-play-area')[0])
}

export default MessagePortal
