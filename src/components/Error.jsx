import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();

    return (
        <>
        <h1>Oops!!</h1>
        <h3>Something went wrong.</h3>
        <h2>{err.status}:{err.statusText}</h2>
        </>
    )
}

export default Error;
