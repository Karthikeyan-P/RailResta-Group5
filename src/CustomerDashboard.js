import React from 'react'
import OrderMechanisms from './OrderMechanims';
import Restaurants from './Restaurants';
import Dashboard from './Dashboard'
import Registration from './Registration'
class CustomerDashboard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                {/* <Registration/> */}
                {/* <Dashboard /> */}
                 <OrderMechanisms />
                <Restaurants /> 
            </div>
        )
    }
}

export default CustomerDashboard