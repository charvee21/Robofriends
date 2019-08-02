import React,{Component} from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import {searchField} from '../reducer';
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps= state => {
    return{
        searchField : state.searchRobots.searchField,
        isPending : state.requestRobots.isPending,
        robots : state.requestRobots.robots,
        error : state.requestRobots.error
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}

class App extends Component{
    

    componentDidMount(){
        this.props.onRequestRobots();
    }
      // console.log(3);
    
    /*onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})   
    }*/

    render(){
        const {searchField,onSearchChange,robots,isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
     //   console.log(2);
     // ternary operator
        return (isPending)? <h1>Loading</h1> : 
        (
                <div>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange= {onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                    <Cardlist robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
            }
    }
export default connect(mapStateToProps, mapDispatchToProps)(App);