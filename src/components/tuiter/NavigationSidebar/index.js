import React from "react";
import '../../../vendors/bootstrap/css/bootstrap.min.css';
import '../../../vendors/bootstrap/bootstrap.min.css';
import '../../../vendors/fontawesome/css/all.min.css';

const NavigationSidebar = (    {
      active = 'explore'
    }
) => {
  return(
<>
            <div className="list-group">
               <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>


            <a href="#" className="list-group-item" >
          <div className="d-xl-block d-none">
          <i className=" fa-solid fa-house-chimney"></i> Home
          </div>
          <div className="d-xl-none">
            <i className=" fa-solid fa-house-chimney"></i>
          </div>
        </a>

        <a href="#" className="list-group-item active" >
          <div className="d-xl-block d-none">
            <i className="fa-solid fa-hashtag"></i> Explore
          </div>
          <div className="d-xl-none">
            <i className=" fa-solid fa-hashtag"></i>
          </div>
        </a>

        <a href="#" className="list-group-item" >

          <div className="d-xl-block d-none">
            <i className="fa-solid fa-bell"></i> Notifications
          </div>
          <div className="d-xl-none">
            <i className="fa-solid fa-bell"></i>
          </div>
        </a>

        <a href="#" className="list-group-item" >


          <div className="d-xl-block d-none">
            <i className="fa-solid fa-envelope"></i> Messages
          </div>
          <div className="d-xl-none">
            <i className="fa-solid fa-envelope"></i>
          </div>
        </a>

        <a href="#" className="list-group-item" >

          <div className="d-xl-block d-none">
            <i className="fa-solid fa-bookmark"></i> Bookmarks
          </div>
          <div className="d-xl-none">
            <i className="fa-solid fa-bookmark"></i>
          </div>
        </a>

        <a href="#" className="list-group-item" >

          <div className="d-xl-block d-none">
            <i className="fa-solid fa-list"></i> Lists
          </div>
          <div className="d-xl-none">
            <i className="fa-solid fa-list"></i>
          </div>
        </a>

        <a href="#" className="list-group-item" >


          <div className="d-xl-block d-none">
            <i className="fa-solid fa-user"></i> Profile
          </div>
          <div className="d-xl-none">
            <i className="fa-solid fa-user"></i>
          </div>
        </a>

        <a href="#" className="list-group-item" >


          <div className="d-xl-block d-none ">
            <i className="fas fa-ellipsis-h wd-circle-black"></i> More
          </div>
          <div className="d-xl-none">
            <i className="fas fa-ellipsis-h wd-circle-black"></i>
          </div>
        </a>

            </div>

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
  </>
    );
}
export default NavigationSidebar;
