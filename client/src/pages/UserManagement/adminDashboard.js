import React from "react";
import AdminAccountSideBar from "../../components/UserManagement/adminAccountSideBar";

const Home = () => {
    return (
        <div className="home">
            <AdminAccountSideBar />
            <div className="home-content">
                <h1>Welcome to Admin Dashboard</h1>

            </div>
        </div>
    );
}
 
export default Home;
