export default function User({handleMenu}) {
    return (
      <div className="user-container">
        <h2>User Profile</h2>
        <p>Name: Venkatesh Mogili</p>
        <p>Email: mogilivenkatesh3@gmail.com</p>
  
        <button onClick={()=>handleMenu('')}>Close</button>
      </div>
    )
  }
  