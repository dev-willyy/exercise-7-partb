const Notification = ({ message }) => {
    if (message.length === 0) {
        return null;
    }

    // If login is !successful
    if (message[0] === "error") {
        console.log(message);
        return <div className="error">{`Error! ${message[1]}`}</div>;
    }

    // If addBlog is successful
    if (message[0] === "success") {
        console.log(message);
        return <div className="success">{`Success! ${message[1]}`}</div>;
    }
};

export default Notification;
