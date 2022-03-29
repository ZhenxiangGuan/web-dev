import React from "react";
import {
  useLocation
} from "react-router-dom";
import '../../../vendors/bootstrap/css/bootstrap.min.css';
import '../../../vendors/bootstrap/bootstrap.min.css';
import '../../../vendors/fontawesome/css/all.min.css';
import {Link} from "react-router-dom";


const NavigationSidebar = (
) => {
  const location = useLocation().pathname.split("/")
  const newLocation = location.filter(element => element != "")
  const active = newLocation[newLocation.length-1];
  return(
<>
            <div className="list-group">

              <Link className= "list-group-item"
         to="/a6/">
                <i className="fab fa-twitter"></i></Link>


              <Link className= {`list-group-item
        ${active === 'tuiter' ? 'active' : ''}`} to="/tuiter">
                <div className="d-xl-block d-none">
                  <i className="fas fa-home"></i> Home
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-home"></i>
                </div></Link>

              <Link className= {`list-group-item
        ${active === 'explore' ? 'active' : ''}`} to="/tuiter/explore">
                <div className="d-xl-block d-none">
                  <i className="fas fa-hashtag"></i> Explore
                </div>
                <div className="d-xl-none">
                  <i className=" fas fa-hashtag"></i>
                </div></Link>


              <Link className= {`list-group-item
        ${active === 'notifications' ? 'active' : ''}`} to="/tuiter/notifications">
                <div className="d-xl-block d-none">
                  <i className="fas fa-bell"></i> Notifications
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-bell"></i>
                </div></Link>


              <Link className= {`list-group-item
        ${active === 'messages' ? 'active' : ''}`} to="/messages">
                <div className="d-xl-block d-none">
                  <i className="fas fa-envelope"></i> Messages
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-envelope"></i>
                </div></Link>


              <Link className= {`list-group-item
        ${active === 'bookmarks' ? 'active' : ''}`} to="/bookmarks">
                <div className="d-xl-block d-none">
                  <i className="fas fa-bookmark"></i> Bookmarks
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-bookmark"></i>
                </div></Link>


              <Link className= {`list-group-item
        ${active === 'lists' ? 'active' : ''}`} to="/lists">
                <div className="d-xl-block d-none">
                  <i className="fas fa-list"></i> Lists
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-list"></i>
                </div></Link>


              <Link className= {`list-group-item
        ${active === 'profile' ? 'active' : ''}`} to="/profile">
                <div className="d-xl-block d-none">
                  <i className="fas fa-user"></i> Profile
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-user"></i>
                </div></Link>


              <Link className= {`list-group-item
        ${active === 'more' ? 'active' : ''}`} to="/more">
                <div className="d-xl-block d-none ">
                  <i className="fas fa-ellipsis-h wd-circle-black"></i> More
                </div>
                <div className="d-xl-none">
                  <i className="fas fa-ellipsis-h wd-circle-black"></i>
                </div></Link>


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
