const NavigationSidebar = () => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <a href="#" class="list-group-item" >
          <div class="d-xl-block d-none">
          <i class=" fa-solid fa-house-chimney"></i> Home
          </div>
          <div class="d-xl-none">
            <i class=" fa-solid fa-house-chimney"></i>
          </div>
        </a>

        <a href="#" class="list-group-item active" >
          <div class="d-xl-block d-none">
            <i class="fa-solid fa-hashtag"></i> Explore
          </div>
          <div class="d-xl-none">
            <i class=" fa-solid fa-hashtag"></i>
          </div>
        </a>

        <a href="#" class="list-group-item" >

          <div class="d-xl-block d-none">
            <i class="fa-solid fa-bell"></i> Notifications
          </div>
          <div class="d-xl-none">
            <i class="fa-solid fa-bell"></i>
          </div>
        </a>

        <a href="#" class="list-group-item" >


          <div class="d-xl-block d-none">
            <i class="fa-solid fa-envelope"></i> Messages
          </div>
          <div class="d-xl-none">
            <i class="fa-solid fa-envelope"></i>
          </div>
        </a>

        <a href="#" class="list-group-item" >

          <div class="d-xl-block d-none">
            <i class="fa-solid fa-bookmark"></i> Bookmarks
          </div>
          <div class="d-xl-none">
            <i class="fa-solid fa-bookmark"></i>
          </div>
        </a>

        <a href="#" class="list-group-item" >

          <div class="d-xl-block d-none">
            <i class="fa-solid fa-list"></i> Lists
          </div>
          <div class="d-xl-none">
            <i class="fa-solid fa-list"></i>
          </div>
        </a>

        <a href="#" class="list-group-item" >


          <div class="d-xl-block d-none">
            <i class="fa-solid fa-user"></i> Profile
          </div>
          <div class="d-xl-none">
            <i class="fa-solid fa-user"></i>
          </div>
        </a>

        <a href="#" class="list-group-item" >


          <div class="d-xl-block d-none ">
            <i class="fas fa-ellipsis-h wd-circle-black"></i> More
          </div>
          <div class="d-xl-none">
            <i class="fas fa-ellipsis-h wd-circle-black"></i>
          </div>
        </a>

      </ul>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
