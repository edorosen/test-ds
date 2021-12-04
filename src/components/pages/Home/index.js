import { Helmet } from "react-helmet";
import { BeforeAfter, TopArrow, Content, H1, H2, IMG, MiddleDiv, ButtonDiv, ModalButton, DownArrow, FormWrapper } from "./styles";
import Decor from "../../../assets/Decor.svg";
import ArrowTop from "../../../assets/arrow-top.svg";
import ArrowDown from "../../../assets/arrow-down.svg";
import ContactForm from "../../Form";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Helmet>
            <BeforeAfter>
                <TopArrow src={ArrowTop} alt="arrow-top" />
                <Content>
                    <H1>Lorem ipsum set <br/> ammet test-test</H1>
                    <H2>LET US HELP YOU GET IT ALL BACK!</H2>
                    <IMG src={Decor} alt="decor" />
                    <MiddleDiv>
                        <p>We currently take cases that are $10,000 US and up</p>
                        <ButtonDiv>
                            <ModalButton>Get a free consultation</ModalButton>
                        </ButtonDiv>
                    </MiddleDiv>
                </Content>
                <DownArrow src={ArrowDown} alt="arrow-down" />
            </BeforeAfter>
            <FormWrapper>
                <h2>Contact <span>Us</span></h2>
                <ContactForm />
            </FormWrapper>
        </div>
    )
};

export default Home;