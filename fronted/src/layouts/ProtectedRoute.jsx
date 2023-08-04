import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Wrapper from "../components/Wrapper/Wrapper"

import { useState } from "react"
const ProtectedRoute = () => {

    const { auth, loading } = useAuth()

    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }

    if (loading) return 'Cargando...'
    return (
        <>
            {auth._id ?
                (
                    <div >
                        <Wrapper
                            menuIconClick={menuIconClick}
                            menuCollapse={menuCollapse}
                        >
                        </Wrapper>

                        <Sidebar 
                            menuCollapse={menuCollapse}
                        />
                    </div>

                ) : <Navigate to="/" />}
        </>
    )
}

export default ProtectedRoute
