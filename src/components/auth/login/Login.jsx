import styles from "./Login.module.css";
// import selyts from "./SignedOut.module.css";
// import userPic from "../../../images/user.png";
import React, { useState, useContext } from "react";
import UserContext from "../../../utils/UserContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = { email, password };
    const loginRes = await Axios.post(
      "http://localhost:5000/user/login",
      loginUser
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <div>
      <div className="main">
        {userData.token ? (
          <div className={styles.loggedIn}>
            Welcome, {userData.user.displayname}
          </div>
        ) : (
          <>
            <div className={styles.wrapper}>
              <div className={styles.container}>
                <h2 className={styles.logIn}>Log In</h2>
                <form className={styles.form} onSubmit={submit}>
                  <label htmlFor="login-email">Email</label>
                  <input
                    id="login-email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="login-email">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogIn;

// const Profile = () => {
//   const UserContext = createContext();

//   function useUser() {
//     return useContext(UserContext);
//   }

//   const [user, setUser] = useState({
//     logged: false,
//     userdata: {
//       favorite: [],
//       registered: [],
//       completedVideo: [],
//       passedQuiz: [],
//       _id: "",
//       firstname: "",
//       lastname: "",
//       email: "",
//       password: "",
//       role: "",
//       userCreated: "",
//     },
//   });

//   const onSubmitLogin = (e) => {
//     e.preventDefault();
//     axios
//       .get(
//         `https://salty-fortress-9010-virt-b.herokuapp.com/user/get/verify/${user.userdata.email}/${user.userdata.password}`
//       )
//       .then((res) => {
//         const results = res.data.data;
//         console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
//         setUser({ logged: true, userdata: results });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onSubmitUpdate = (e) => {
//     e.preventDefault();
//     axios
//       .patch(
//         `https://salty-fortress-9010-virt-b.herokuapp.com/user/update/${user.userdata._id}`,
//         user.userdata
//       )
//       .then((res) => {
//         axios
//           .get(
//             `https://salty-fortress-9010-virt-b.herokuapp.com/user/get/id/${user.userdata._id}`
//           )
//           .then((res) => {
//             const results = res.data.data;
//             console.log(`Results of Axios Call: ${JSON.stringify(results)}`);
//             setUser({ logged: true, userdata: results });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onSubmitDelete = (e) => {
//     e.preventDefault();
//     axios
//       .delete(
//         `https://salty-fortress-9010-virt-b.herokuapp.com/user/delete/${user.userdata._id}`,
//         user.userdata
//       )
//       .then((res) => {
//         console.log(`User Deleted!`);
//         setUser({
//           logged: false,
//           userdata: {
//             favorite: [],
//             registered: [],
//             completedVideo: [],
//             passedQuiz: [],
//             _id: "",
//             firstname: "",
//             lastname: "",
//             email: "",
//             password: "",
//             role: "",
//             userCreated: "",
//           },
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleInputChange = (event) => {
//     const {
//       target: { name, value },
//     } = event;
//     setUser({
//       logged: user.logged,
//       userdata: { ...user.userdata, [name]: value },
//     });
//   };

//   if (!user.logged) {
//     return (
//       <div className={selyts.main}>
//         <div className={selyts.profileWrapper}>
//           <h1 className={selyts.profileHeader}>Welcome!</h1>
//           <div className={selyts.profileSection}>
//             <div className={selyts.profileKey}>
//               <input
//                 name="email"
//                 className={selyts.inputField}
//                 placeholder=" Email"
//                 autoComplete="off"
//                 value={user.userdata.email}
//                 onChange={(event) => {
//                   handleInputChange(event);
//                 }}
//               />
//             </div>
//             <div className={selyts.profileValue}>
//               <input
//                 name="password"
//                 type="password"
//                 className={selyts.inputField}
//                 placeholder=" Password"
//                 autoComplete="off"
//                 value={user.userdata.password}
//                 onChange={(event) => {
//                   handleInputChange(event);
//                 }}
//               />
//             </div>
//             <div className={selyts.profileButton}>
//               <button
//                 className={selyts.myBud}
//                 onClick={(e) => onSubmitLogin(e)}
//               >
//                 Log In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (user.logged) {
//     return (
//       <div className={styles.main}>
//         <div className={styles.profileContainer}>
//           <div className={styles.profileWrapper}>
//             <h1 className={styles.profileHeader}>My Profile</h1>
//             <div className={styles.userImage}>
//               <img
//                 src={userPic}
//                 className={styles.userPic}
//                 alt="User Profile"
//               />
//             </div>
//             <div className={styles.userCard}>
//               <div className={styles.profileSection}>
//                 <div className={styles.loggedKey}>
//                   <strong>Name:</strong>
//                 </div>
//                 <div className={styles.loggedValue}>
//                   {user.userdata.firstname} {user.userdata.lastname}
//                 </div>
//               </div>
//               <div className={styles.profileSection}>
//                 <div className={styles.loggedKey}>
//                   <strong>Email:</strong>
//                 </div>
//                 <div className={styles.loggedValue}>
//                   <input
//                     name="email"
//                     type="email"
//                     className={styles.inputField}
//                     placeholder="Edit Your Email Address"
//                     autoComplete="off"
//                     value={user.userdata.email}
//                     onChange={(event) => {
//                       handleInputChange(event);
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className={styles.profileSection}>
//                 <div className={styles.loggedKey}>
//                   <strong>Password:</strong>
//                 </div>
//                 <div className={styles.loggedValue}>
//                   <input
//                     name="password"
//                     type="password"
//                     className={styles.inputField}
//                     placeholder="Edit Your Password"
//                     autoComplete="off"
//                     value={user.userdata.password}
//                     onChange={(event) => {
//                       handleInputChange(event);
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className={styles.profileSection}>
//                 <div className={styles.loggedKey}>
//                   <strong>Role:</strong>
//                 </div>
//                 <div className={styles.loggedValue}>{user.userdata.role}</div>
//               </div>
//               <div className={styles.myBuds}>
//                 <button
//                   className={styles.myBud}
//                   onClick={(e) => onSubmitUpdate(e)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className={styles.myBud}
//                   onClick={(e) => onSubmitDelete(e)}
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default Profile;
