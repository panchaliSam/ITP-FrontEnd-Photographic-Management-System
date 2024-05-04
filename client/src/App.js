import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeGallery from './components/homePageGallery';
import HomePageCard from './components/homePageCard';
import SideBar from './components/Sidebar'

//User Management - Import Pages
import UserAccountSideBar from './pages/UserManagement/userSideBar'
import UserAccountPage from './pages/UserManagement/userAccount'
import UserAccountCreate from './pages/UserManagement/userSignup'
import AdminLogin from './pages/UserManagement/adminLogin'
import AdminDashboard from './pages/UserManagement/adminDashboard'
import UserAccountUpdate from './pages/UserManagement/userAccountUpdate'
import ManageUsers from './pages/UserManagement/manageUsers'
import AddStaff from './pages/UserManagement/addStaff'
import AdminViewStaff from './pages/UserManagement/adminViewStaff'
import AdminViewUser from './pages/UserManagement/adminViewUser'

//Event Management - Import Pages
import EventPhotos from './pages/EventManagement/selectPhotosAlbum';
// import Album from './pages/EventManagement/photoAlbum';
import CustomeEvent from './pages/EventManagement/userEventDetails';
import AllAlbums from './pages/EventManagement/allAlbums';
import MyEvents from './pages/EventManagement/myEvents'
import ViewAlbm from './pages/EventManagement/viewAlbums'
import AddAlbum from './pages/EventManagement/addAlbum'
import SamplePhotos from './pages/EventManagement/samplePhotos'
import UserEventCount from './pages/EventManagement/adminNotification'
import StaffViewAlbums from './pages/EventManagement/staffMyWork'
import VideoAlbumPage from './pages/EventManagement/videoAlbum'
import UserEventStat  from './pages/EventManagement/userEventCountPage'

//Staff Management - Import Pages
import Task from './pages/StaffManagement/getTasks';

// Event Reservation Management - Import pages
// import Reservation from './pages/EventReservationManagement/reservationDetailsPage'
import ReservationForm from './pages/EventReservationManagement/reservationForm';
// import AllReservations from './pages/EventReservationManagement/allReservations';
// import ReservationDetails from './pages/EventReservationManagement/reservationDetailsPage';
// import EditReservation from './pages/EventReservationManagement/EditReservationPage';

//Feedback Management System - Import Pages
import Rankings from './pages/FeddbackReviewManagement/rankingPage'
import Ratings from './pages/FeddbackReviewManagement/ratings'
import Progress from './pages/FeddbackReviewManagement/progressPage'

//User Management - Import Components
import UserLoginPage from './components/UserManagement/userLogin';
import AdminAccountSideBar from './components/UserManagement/adminAccountSideBar';
import ManageButtons from './components/UserManagement/adminMangeButtons'

//Event Management - Import Components
import CustomerDetails from './components/EventManagement/userEventDetails'; 
import EditPhotoAlbum from './components/EventManagement/editPhotoAlbum'; 

//Staff Mnagemnet - Import Components
import AddTask from './components/StaffManagement/addTask';
import UpdateTaskInfo from './components/StaffManagement/updateTasks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<>
              <HomeGallery />
              <br />
              <HomePageCard />
            </>}
          />
          <Route
            path='/signin'
            element={<UserLoginPage />}
          />
          <Route
            path='/signup'
            element={<UserAccountCreate />}
          />          
          <Route
            path='/feedback&comments'
            element={<Rankings />}
          />
          <Route
            path='/userAccount/:userId'
            element={<>
              <UserAccountSideBar/>
              <UserAccountPage />
              <br />
            </>}
          /> 
          <Route
            path='/userAccount/:userId/userAccountUpdate'
            element={<>
              <UserAccountSideBar/>
              <UserAccountUpdate />
              <br />
            </>}
          />            
          <Route
            path='/userAccount/:userId/myEvents'
            element={<>
              <UserAccountSideBar/>
              <MyEvents />
              <br />
            </>}
          />          
          <Route
            path='/selectPhotos'
            element={<>
              <SideBar/>
              <EventPhotos />
              <br />
            </>}
          />
          <Route
            path='/viewVideos'
            element={<>
              <SideBar/>
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/addEvents'
            element={<>              
              <ReservationForm/>
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/:eventId/viewAlbum'
            element={<>
              {/* <SideBar/> */}
              <ViewAlbm/>
              {/* <Album /> */}
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/:eventId/viewAlbum/samplePhotos'
            element={<>
              <SideBar/> 
              <SamplePhotos/>
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/:eventId/viewAlbum/ratings'
            element={<>
              <SideBar/> 
              <Ratings/>
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/:eventId/viewAlbum/viewMyRatings'
            element={<>
              <SideBar/> 
              <Progress/>
              <br />
            </>}
          />
          <Route
            path='/userAccount/:userId/myEvents/:eventId/viewAlbum/videoAlbum'
            element={<>
              <SideBar/> 
              <VideoAlbumPage/>
              <br />
            </>}
          />
          <Route
            path='/paymentHistory'
            element={<>
              <SideBar/>
              <br />
            </>}
          />
          <Route
            path='/cusEventInfo'
            element={<>
              <CustomeEvent />
              <br />
            </>}
          />

          {/* admin */}
          <Route
            path='/adminLogin'
            element={<>
              <AdminLogin />
              <br />
            </>}
          />
          <Route
            path='/adminLogin/adminDashboard'
            element={<>
              <AdminDashboard />
              <br />
            </>}
          />           
          <Route
            path='/adminLogin/adminDashboard/manageSystem'
            element={<>
              <AdminAccountSideBar />
              <ManageButtons/>
              <br />
            </>}
          />     

          {/* manageButtons */}

          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageTasks'
            element={<>
              <AdminAccountSideBar />
                <AddTask />
                <Task/>
              <br />
            </>}
          />    
          <Route
            path='/adminLogin/adminDashboard/manageSystem/updateTask/:TaskId'
            element={<>
              <UpdateTaskInfo />
              <br />
            </>}
          /> 
          {/* Event Management Manage Albums */}
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageAlbums'
            element={<>
              <AdminAccountSideBar />
              <AllAlbums />
              <br />
            </>}
          />
          {/* User Management Manage Users */}
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageUsers'
            element={<>
              <AdminAccountSideBar />
              <ManageUsers />
              <br />
            </>}
          />
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageUsers/addStaff'
            element={<>
              <AdminAccountSideBar />
              <AddStaff />
              <br />
            </>}
          /> 
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageUsers/adminViewUser/:userId'
            element={<>
              <AdminAccountSideBar />
              <AdminViewUser />
              <br />
            </>}
          />        
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageUsers/adminViewStaff/:staffId'
            element={<>
              <AdminAccountSideBar />
              <AdminViewStaff />
              <br />
            </>}
          />
          <Route
            path='/adminNotification'
            element={<>
              <AdminAccountSideBar />
              <UserEventCount />
              <br />
            </>}
          />
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageAlbums/manageAlbums/addAlbum'
            element={<>
              <AdminAccountSideBar />
              <AddAlbum />
              <br />
            </>}
          />
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageAlbums/customerDetails/:eventId'
            element={<>
              <AdminAccountSideBar />
              <CustomerDetails />
              <br />
            </>}
          />
          <Route
            path='/adminLogin/adminDashboard/manageSystem/manageAlbums/editAlbum/:photoAlbumId'
            element={<>
              <AdminAccountSideBar />
              <EditPhotoAlbum />
              <br />
            </>}
          />

          
          {/* Staff */}

          <Route
            path='/staff/myWork'
            element={<>
              <StaffViewAlbums />
              <br />
            </>}
          />          
          <Route
            path='/staff/userEventStat'
            element={<>
              <UserEventStat />
              <br />
            </>}
          />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

