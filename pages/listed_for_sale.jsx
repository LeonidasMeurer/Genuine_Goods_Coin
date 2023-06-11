import React from 'react';

import Header from './components/Header'
import ListedForSale from './components/ListedForSale'

const App = () => {

    {
        return (
            <div>
                <Header appearance="inverse" />
                <div style={{ paddingLeft: 30, paddingTop: 30 }} >
                    <h3>Market</h3>
                    <ListedForSale/>
                </div>
            </div>
        );
    }

}



export default App;

