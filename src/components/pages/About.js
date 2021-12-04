import { Helmet } from "react-helmet";
import { Wrapper, H1 } from "./pagesStyles";

const About = () => {

    return (
        <div>
            <Helmet>
                <title>About us</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Helmet>
            <Wrapper>
                <H1>About us</H1>
            </Wrapper>
        </div>
    )
};

export default About;