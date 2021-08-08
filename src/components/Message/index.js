import PropTypes from "prop-types";
import reactDom from "react-dom";
import Button from "../../templates/Button";
import "./Message.scss";

const Message = ({ message, buttons }) => {
  return (
    <div className="message-container">
      <p className="message">{message}</p>
      <div className="buttons-container">
        {buttons.map((button, index) => {
          return (
            <Button
              key={`button_${index}`}
              label={button.label}
              clickHandler={button.clickHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

const MessagePortal = ({ message, buttons }) => {
  return reactDom.createPortal(
    <Message message={message} buttons={buttons} />,
    document.getElementsByClassName("board-play-area")[0]
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  buttons: PropTypes.instanceOf(Array).isRequired,
};

export default MessagePortal;
