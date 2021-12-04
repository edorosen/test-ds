import { Helmet } from "react-helmet";
import { Wrapper, H1 } from "./pagesStyles";

const LoremIpsum = () => {

    return (
        <div>
            <Helmet>
                <title>Lorem Ipsum</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Helmet>
            <Wrapper>
                <H1>lorem ipsum</H1>
            </Wrapper>
        </div>
    )
};

export default LoremIpsum;