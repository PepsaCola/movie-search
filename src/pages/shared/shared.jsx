import {Outlet} from "react-router-dom";
import { NavigateLink} from "../../styled";

export const Shared=()=> {

    return (
        <>
            <header>
                <nav>
                    <NavigateLink to='/' end>Home</NavigateLink>
                    <NavigateLink to='/movies'>Movies</NavigateLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}