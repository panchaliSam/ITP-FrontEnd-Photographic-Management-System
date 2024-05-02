import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeGallery from './components/homePageGallery';
import HomePageCard from './components/homePageCard';
import SideBar from './components/Sidebar'

//User Management - Import Pages
import UserAccountPage from './pages/UserManagement/userAccount'
import UserAccountCreate from './pages/UserManagement/userSignup'
import AdminDashboard from './pages/UserManagement/adminDashboard'

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

//Staff Management - Import Pages
import Task from './pages/StaffManagement/getTasks';

// Event Reservation Management - Import pages
// import Reservation from './pages/EventReservationManagement/reservationDetailsPage'
import ReservationForm from './pages/EventReservationManagement/reservationForm';
// import AllReservations from './pages/EventReservationManagement/allReservations';
// import ReservationDetails from './pages/EventReservationManagement/reservationDetailsPage';
// import EditReservation from './pages/EventReservationManagement/EditReservationPage';

//User Management - Import Components
import UserLoginPage from './components/UserManagement/userLogin';

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
            path='/userAccount/:userId'
            element={<UserAccountPage />}
          />
          <Route
            path='/userAccount/:userId/myEvents'
            element={<>
              <UserAccountPage/>
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
              {/* <Album /> */}
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

          {/* Admin View */}
          
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
          <Route
            path='/manageAlbums'
            element={<>
              <AllAlbums />
              <br />
            </>}
          />
          <Route
            path='/adminNotification'
            element={<>
              <UserEventCount />
              <br />
            </>}
          />
          <Route
            path='/manageAlbums/addAlbum'
            element={<>
              <AddAlbum />
              <br />
            </>}
          />
          <Route path='/customerDetails/:eventId' element={<CustomerDetails />} />
          <Route path='/editAlbum/:photoAlbumId' element={<EditPhotoAlbum />} />

          <Route
            path='/staff/myWork'
            element={<>
              <StaffViewAlbums />
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

