import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

//used to break out of the chatbot flow and navigate to another page
function Navigator(props: any) {

    const navigate = useNavigate();
    const location = useLocation();
    useEffect( () => {
        if(location.pathname === props.route) {
            window.location.reload();
        } else {
            navigate(props.route);
        }
    }, [])

    return(<div/>);
}

export default Navigator;