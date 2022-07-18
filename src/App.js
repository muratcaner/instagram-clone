import './App.css';

function App() {
  return (
    <>
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <img src="img/logo.png" className="brand-img" alt='' />
        <input type="text" className="search-box" placeholder='search' />
        <div className="nav-items">
          <img src='img/home.PNG' className='icon' alt='' />
          <img src='img/messenger.PNG' className='icon' alt='' />
          <img src='img/add.PNG' className='icon' alt='' />
          <img src='img/explore.PNG' className='icon' alt='' />
          <img src='img/like.PNG' className='icon' alt='' />
          <div className="icon user-profile"></div>
        </div>
      </div>
    </nav>
    
    <section className='main'>
        <div className="wrapper">
          <div className="left-col">
            <div className="status-wrapper">
              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-1.png' alt=""/></div>
                <p className='username'>user_name_1</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-2.png' alt=""/></div>
                <p className='username'>user_name_2</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-3.png' alt=""/></div>
                <p className='username'>user_name_3</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-4.png' alt=""/></div>
                <p className='username'>user_name_4</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-5.png' alt=""/></div>
                <p className='username'>user_name_5</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-6.png' alt=""/></div>
                <p className='username'>user_name_6</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-7.png' alt=""/></div>
                <p className='username'>user_name_7</p>
              </div>

              <div className="status-card">
                <div className="profile-pic"><img src='img/cover-8.png' alt=""/></div>
                <p className='username'>user_name_8</p>
              </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-1.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-1.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-2.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-2.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-3.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-3.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-4.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-4.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-5.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-5.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-6.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-6.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-7.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-7.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic"><img src='img/cover-8.png' alt=""/></div>
                <p className='username'>murat.caner</p>
              </div>
              <img src='img/option.png' className='options' alt=""/>
            </div>
            <img src="img/cover-8.png" className='post-image' alt=""/>
            <div className="post-content">
              <div className="reaction-wrapper">
                <img src='img/like.png' className='icon' alt=""/>
                <img src='img/comment.png' className='icon' alt=""/>
                <img src='img/send.png' className='icon' alt=""/>
                <img src='img/save.png' className='save icon' alt=""/>
              </div>
              <p className='likes'>1,000 likes</p>
              <p className='description'><span>murat.caner</span>lorem ipsum</p>
              <p className='post-time'>2 minutes ago</p>
              <div className="comment-wrapper">
                <img src='img/smile.png' className='icon' alt=""/>
                <input type="text" className='comment-box' placeholder='Add a comment'/>
                <button className='comment-btn'>post</button>
              </div>
            </div>

          </div>

          <div className="right-col">
            <div className="profile-card">
              <div className="profile-pic">
                <img src='img/profile-pic.png' alt=""/>
              </div>

              <div>
                <p className='username'>murat.caner</p>
                <p className='sub-text'>followed by user</p>
              </div>

              <button className='action-btn'>switch</button>

            </div>

            <p class="suggestion-text">Suggestions for you</p>

            <div className="profile-card">
              <div className="profile-pic">
                <img src='img/profile-pic.png' alt=""/>
              </div>

              <div>
                <p className='username'>murat.caner</p>
                <p className='sub-text'>followed by user</p>
              </div>

              <button className='action-btn'>switch</button>

            </div>

          </div>


          </div>
        </div>
      </section>
      </>
  );
}

export default App;
