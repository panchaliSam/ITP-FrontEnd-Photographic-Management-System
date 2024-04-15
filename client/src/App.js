// import React from 'react';
// import{BrowserRouter, Routes, Route} from 'react-router-dom'

// //pages and compoenets
// // import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
// // import UserSelectPhotos from './pages/UserSelectPhotos'
// import Footer from './components/Footer'
// import HomeGallery from './components/homePageGallery'
// import HomePageCard from './components/homePageCard'
// import UserLoginPage from './components/UserManagement/userLogin'

// //Import pages - Event Management
// import EventPhotos from './pages/EventManagement/selectPhotosAlbum'
// import Album from './pages/EventManagement/photoAlbum'
// import CustomeEvent from './pages/EventManagement/userEventDetails'
// import AllAlbums from './pages/EventManagement/allAlbums'

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar/>
//           <Routes>
//             <Route
//               path='/'
//               element={<>
//                 <HomeGallery />
//                 <br></br>
//                 <HomePageCard />
//               </>}
//             />
//             <Route
//               path='/signin'
//               element={<UserLoginPage/>}
//             />
//             <Route
//               path='/selectPhotos'
//               element={<>
//                 <Sidebar />
//                 <EventPhotos/>
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/viewVideos'
//               element={<>
//                 <Sidebar />
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/viewAlbum'
//               element={<>
//                 <Sidebar />
//                 <Album/>
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/paymentHistory'
//               element={<>
//                 <Sidebar />
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/cusEventInfo'
//               element={<>
//                 <CustomeEvent />
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/manageAlbums'
//               element={<>
//                 <AllAlbums />
//                 <br></br>
//               </>}
//             />
//           </Routes>
//           <br></br>
//         <Footer/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeGallery from './components/homePageGallery';
import HomePageCard from './components/homePageCard';

//User Management - Import Pages
import UserLoginPage from './components/UserManagement/userLogin';

//Event Management - Import Pages
import EventPhotos from './pages/EventManagement/selectPhotosAlbum';
import Album from './pages/EventManagement/photoAlbum';
import CustomeEvent from './pages/EventManagement/userEventDetails';
import AllAlbums from './pages/EventManagement/allAlbums';

//Event Management - Import Components
import CustomerDetails from './components/EventManagement/userEventDetails'; 

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
            path='/selectPhotos'
            element={<>
              <EventPhotos />
              <br />
            </>}
          />
          <Route
            path='/viewVideos'
            element={<>
              <br />
            </>}
          />
          <Route
            path='/viewAlbum'
            element={<>
              <Album />
              <br />
            </>}
          />
          <Route
            path='/paymentHistory'
            element={<>
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
          <Route
            path='/manageAlbums'
            element={<>
              <AllAlbums />
              <br />
            </>}
          />
          <Route path='/customerDetails/:eventId' element={<CustomerDetails />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

