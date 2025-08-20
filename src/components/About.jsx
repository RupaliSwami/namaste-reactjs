import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Page is loading here.</h1>
            <User name={"Ram"} location={"Pune"} />
            <UserClass name={"John"} location={"Bomby"} />
        </div>
    )
}

export default About;
