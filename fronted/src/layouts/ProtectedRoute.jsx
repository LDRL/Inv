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
                        {/* className="p-10 flex-1 bg-red-100" */}


                        <main>
                            <h1>hola</h1>
                            <Outlet />
                        </main>

                        {/* <div className="bg-gray-100">
                            <Header />

                            <div className="md:flex md:min-h-screen">
                                <Sidebar />

                                <main className="p-10 flex-1 bg-red-100">
                                    <Outlet />
                                </main>
                            </div>
                        </div> */}
                    </div>

                ) : <Navigate to="/" />}
        </>
    )
}

export default ProtectedRoute
