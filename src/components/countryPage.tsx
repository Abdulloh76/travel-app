import React from "react";

import { Header } from './Header'
import { Promo } from './Promo'
import { NavBar } from './NavBar'
import { Content } from './Content'
import { Footer } from './Footer'
class CountryPage extends React.Component {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div className="country-page">
                <Header />
                <h1 className="hidden"> Travel app country main page </h1>
                <Promo />
                <NavBar />
                <Content />
                <Footer />
            </div>
        );
    }
}

export { CountryPage }