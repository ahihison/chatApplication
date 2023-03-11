import ReactHtmlParser from "react-html-parser";
resolve: {
  fallback: {
    buffer: require.resolve("buffer/");
  }
}
const MyMessage = ({ message }) => {
  console.log(message);
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {ReactHtmlParser(message.text)}
    </div>
  );
};

export default MyMessage;
