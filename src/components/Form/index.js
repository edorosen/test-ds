import Flags from "./Flags";
import { Form, FirstDiv, Label, ButtonDiv, ModalButton } from "./styles";

const ContactForm = () => {

    return (
        <Form>
            <FirstDiv>
                <label for="name" id="name">
                    <input type="text" placeholder="Name" />
                    <span>First Name</span>
                </label>
                <label for="lastName" id="lastName">
                    <input type="text" placeholder="lastName" />
                    <span>Last Name</span>
                </label>
            </FirstDiv>
            <FirstDiv>
            <Label for="phone" id="phone">
                <Flags />
            </Label>
            <label for="email" id="email">
                <input type="email" placeholder="Email" />
                <span>Email</span>
            </label>
            </FirstDiv>

            <label for="comments" id="comments">
                <textarea name="comments"></textarea>
                <span>Tell Us What Happened</span>
            </label>
            <ButtonDiv id="button">
                <ModalButton>Send</ModalButton>
            </ButtonDiv>
        </Form>
    )
};

export default ContactForm;