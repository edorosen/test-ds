import { Helmet } from "react-helmet";
import { Wrapper, ContactsWrap, H1 } from "./pagesStyles";

const Contacts = () => {

    return (
        <>
            <Helmet>
                <title>Contacts</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Helmet>
            <Wrapper>
                <ContactsWrap>
                    <H1>Contacts</H1>
                </ContactsWrap>
            </Wrapper>
        </>
    )
};

export default Contacts;