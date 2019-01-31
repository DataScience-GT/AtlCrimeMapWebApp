import React, {
    Component
} from 'react';
import './App.css';

import MapContainer from "./containers/MapContainer";
import NavBar from "./components/NavBar";
import OtherPage from "./containers/OtherPage";

class App extends Component {

    state = {
        currentPage: "map"
    }

    navBarOnButtonPress = (pageName) => () => {
        console.log(pageName)
        this.setState({
            currentPage: pageName
        });
    }

    renderCurrentPage = () => {
        if (this.state.currentPage === "map") {
            return <MapContainer />
        }
        if (this.state.currentPage === "other") {
            return <OtherPage />
        }
    }

    render() {
        return ( 
            <div className = "App">
                <NavBar onPress={this.navBarOnButtonPress} />
                {this.renderCurrentPage()}
            </div>
        );
    }
};

export default App;