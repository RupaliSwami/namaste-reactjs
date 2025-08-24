import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name , "child Constructr is called.")
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log(this.props.name, "Child compoenent mount here.")
    }

    comsponentWillUpdate () {
        console.log("Cleaning the component.");
    }
    
    render(){
        console.log(this.props.name, 'Child component render.');

        const { name, location } = this.props;
        return(
            <div className="user-card">
                <p>Count:{this.state.count}</p>
                <button onClick={() => {
                   this.setState({
                    count: this.state.count + 1
                   });
                }}>+</button>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : xyz@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;
