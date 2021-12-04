import { FooterWrapper, FooterDiv, SecFooterDiv } from "./styles";
import Express from "../../assets/Express.svg";
import DMCA from "../../assets/DMCA.svg";

const Footer = () => {

    return (
        <FooterWrapper>
            <FooterDiv>
                <img src={Express} alt="Express" />
                <p>All Rights Reserved to info.com</p>
                <p>© DDD – Web Marketing</p>
                <p>Privacy Policy</p>
                <img src={DMCA} alt="DMCA" />
            </FooterDiv>
            <FooterDiv>
                <h2>Contact us</h2>
                <h4>
                    <span>UK</span>
                    <p>
                        <span>+44-2020202020</span>
                        <span>+44-2020202020</span>
                    </p>
                </h4>
                <h4>
                    <span>AUT</span>
                    <p>+44-2020202020</p>
                </h4>
                <h4>
                    <span>AUS</span>
                    <p>+44-2020202020</p>
                </h4>
            </FooterDiv>
            <SecFooterDiv>
                    <p id="adress">
                        <h4>
                            <h2>ADDRESS</h2>
                            <p>Lorem ipsum set amet</p>
                        </h4>
                        <h4>
                            <h2>OUR OFFICE HOURS</h2>
                            <p>
                                <span>Mon-Fr: 8:00-18:00 GMT</span>
                                <span>Sat/Su: Closed</span>
                            </p>
                        </h4>
                    </p>
                    <h4>
                        <h2>Email US</h2>
                        <p>info@info.com</p>
                    </h4>
                </SecFooterDiv>
        </FooterWrapper>
    );

};

export default Footer;