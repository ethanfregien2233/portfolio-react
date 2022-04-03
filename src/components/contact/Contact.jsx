import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                <h1 className="c-title">Let's Collaborate!</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img
                            src={Phone}
                            alt= ""
                            className="c-icon"
                        />
                        +1 715 584 2410
                    </div>
                    <div className="c-info-item">
                        <img
                            src={Email}
                            alt= ""
                            className="c-icon"
                        />
                        ethanfregien@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img
                            src={Address}
                            alt= ""
                            className="c-icon"
                        />
                        1242 Sweeney Drive, Middleton, WI
                    </div>
                </div>
            </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Ready to have your own dream design?</b> Get in Touch. I am ready to make your masterpiece!
                        </p>
                        <form>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea rows="5" placeholder="Message" name = "message"/>
                            <button>Submit</button>
                        </form>
                    </div>
        </div>
        </div>
    )
}

export default Contact
