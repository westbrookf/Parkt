import React from 'react';
import MainMap from '../googlemap/MainMap';
import Header from '../header/Header';

import '../home/HomeStyles.scss';


class Home extends React.Component {

    state={
        user:{}
    }
    componentDidMount(){
        const loggedInUser = 
        JSON.parse(localStorage.getItem('loggedInUser'));
        this.setState(
            {
                user:loggedInUser
            }
        )
    }

   render(){
       return(
           <div className="main-container">
            <div style={{width: '100vw', height: '100vh'}}>
            
                <Header {...this.props} /> 
     
              <MainMap /> 
            </div>
           </div>
       )
   }
}
export default Home;