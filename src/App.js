import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingHeader from "./components/BookingHeader";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DisplayShowDetails from "./pages/DisplayShowDetails";

// const clientId = env.GOOGLE_OAUTH_CLIENT_ID;
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     const initClient = () => {
  //         gapi.client.init({
  //             clientId,
  //             scope: "",
  //         });
  //     };
  //     gapi.load("client:auth2", initClient);
  // }, []);

  // const onSuccess = (response) => {
  //     if (response && response.profileObj) {
  //         const { name, email, imageUrl } = response.profileObj;
  //         dispatch(
  //             UserSlice.actions.updateUserDetails({
  //                 name,
  //                 email,
  //                 imageUrl,
  //             })
  //         );
  //     }
  // };

  return (
    // <Router>
    <Fragment>
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/show-details" element={<DisplayShowDetails />} />
          <Route exact path="/book" element={<BookingHeader />} />
          <Route exact path="/cart" element={<BookingHeader />} />
          <Route exact path="/payment" element={<BookingHeader />} />
          <Route exact path="/success" element={<BookingHeader />} />
        </Routes>
        <div style={{ display: "none" }}>
          <Login />
        </div>
      </section>
    </Fragment>
    // </Router>
  );
};

export default App;
