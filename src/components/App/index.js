import React, { Suspense, Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {
    Home,
    Contacts,
    About,
    OurServices,
    LoremIpsum
} from '../pages/pages';

import Loader from './loader';
import Header from '../Header';
import Footer from '../Footer';

import { Wrapper, GlobalStyle } from './styles';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    render() {


        return (
            <Suspense fallback={<Loader/>}>
                <Router>
                    <Wrapper>
                        <GlobalStyle />
                        <Header />

                        <Routes>
                            <Route exact path='/' element={<Home/>} />
    
                            <Route path='/Contacts' element={<Contacts/>} />
                                
                            <Route path='/About' element={<About/>} />
                               
                            <Route path='/OurServices' element={<OurServices/>} />
                                
                            <Route path='/loremIpsum' element={<LoremIpsum/>} />
                                
                        </Routes>

                        <Footer />
                    </Wrapper>
                </Router>
            </Suspense>
        )
    }

}

export default App;
