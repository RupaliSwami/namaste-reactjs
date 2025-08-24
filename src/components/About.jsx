import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
        console.log(" Parent Mounting calls .")
    }

    render(){
        console.log('Parent render calling .')
        return (
        <div>
            <h1>About Page is loading here.</h1>
            {/* <User name={"Ram"} location={"Pune"} /> */}
            <UserClass name={"first"} location={"Bomby"} />
            <UserClass name={"second"} location={"Bomby"} />
        </div>
    )
    }
}

export default About;
