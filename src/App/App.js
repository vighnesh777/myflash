import './App.css';
import Nav from "../Navbar/Nav"
import React from 'react';
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from '../ChallengeSection/ChallengeSection';
class App extends React.Component {
  render() {
    return (
      < div className="App">
        {/*NavBar*/}
        < Nav />

        {/*Landing*/}
        <Landing />

        {/*Challenge Section*/}
        <ChallengeSection />

        {/*Footer*/}
        <Footer />

      </div >


    )
  }
}

export default App;
