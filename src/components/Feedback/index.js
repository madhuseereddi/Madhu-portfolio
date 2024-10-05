import React, { Component } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./index.css";

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            message: "",
            success: false,
            error: null,
            feedbackList: [],
            isLoading: false,  // Loading state
        };

        this.colors = [
            "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFB533",
            "#33FFF6", "#C733FF", "#FFC300", "#FF5733", "#9B59B6",
        ];
    }

    componentDidMount() {
        this.fetchFeedback();
    }

    fetchFeedback = async () => {
        this.setState({ isLoading: true });
        try {
            const response = await fetch("https://rust-maddening-cacao.glitch.me/feedback");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            this.setState({ feedbackList: data, isLoading: false });
        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ error: null, success: false });

        const { email, message } = this.state;
        const payload = { email, message };

        try {
            const response = await fetch("https://rust-maddening-cacao.glitch.me/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.text();
            let newFeedback;
            try {
                newFeedback = JSON.parse(responseData);
            } catch (err) {
                newFeedback = { email, message: responseData };
            }

            this.setState((prevState) => ({
                feedbackList: [...prevState.feedbackList, newFeedback],
                success: true,
                email: "",
                message: "",
            }));
        } catch (error) {
            this.setState({ error: error.message });
        }
    };

    getColor = () => {
        const randomIndex = Math.floor(Math.random() * this.colors.length);
        return this.colors[randomIndex];
    };

    render() {
        const { email, message, success, error, feedbackList, isLoading } = this.state;

        return (
            <div className="feedback1">
                <div className="f-o">
                    <div className="ff-f">
                        <form onSubmit={this.handleSubmit} className={this.props.darkMode ? "feedback11" : "feedback22"}>
                            <h1>Feedback</h1>
                            <div className="email-set">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="input1"
                                    id="email"
                                    value={email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="email-set">
                                <label htmlFor="text">Message</label>
                                <input
                                    type="text"
                                    className="input1"
                                    id="text"
                                    value={message}
                                    onChange={(e) => this.setState({ message: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="btns">
                                <button type="submit" className="btn-send">Send</button>
                            </div>
                            {success && <p className="success-message">Feedback submitted successfully!</p>}
                            {error && <p className="error-message">Error: {error}</p>}
                        </form>
                    </div>

                    <div className={this.props.darkMode ? "feedback-list1" : "feedback-list2"}>
                        <div className="dd">
                            <h2>Existing Feedback</h2>
                            <Popup
                                trigger={<button className="btn-show">Contact Info</button>}
                                modal
                                className="custom-popup"
                            >
                                <div className="bg-hh">
                                    <h1 className="head111">Contact</h1>
                                    <p>Mobile : 7995875236</p>
                                    <p>Email : seereddym@gmail.com</p>
                                    <div className="social-media">
                                        {/* Social media icons */}
                                    </div>
                                </div>
                            </Popup>
                        </div>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : feedbackList.length > 0 ? (
                            <div>
                                {feedbackList.map((feedback, index) => (
                                    <div key={index} className={this.props.darkMode ? "feed1" : "feed2"}>
                                        <div className="dd1">
                                            <p style={{
                                                backgroundColor: this.getColor(),
                                                padding: "10px",
                                                borderRadius: "5px",
                                                marginBottom: "10px",
                                                width: '10px',
                                                height: "10px"
                                            }} className="dot"></p>
                                            <p><b>Email:</b> {feedback.email}</p>
                                        </div>
                                        <p><b>Message:</b> {feedback.message}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No feedback available.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;
