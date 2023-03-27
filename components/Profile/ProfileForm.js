import { useRef } from "react";
import classes from "./ProfileForm.module.css";

function ProfileForm() {
  const oldPwdRef = useRef();
  const newPwdRef = useRef();

  async function changePasswordHandler(event) {
    event.preventDefault();

    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify({
        oldPassword: oldPwdRef.current.value,
        newPassword: newPwdRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();

    console.log(data);
  }
  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPwdRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPwdRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
