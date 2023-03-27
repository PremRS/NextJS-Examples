import { useRef } from "react";

import Button from "../Button/Button";
import classes from "./Search.module.css";

function EventsSearch(props) {
  const primaryRef = useRef();
  const secondaryRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedPrimary = primaryRef.current.value;
    const selectedSecondary = secondaryRef.current.value;

    props.onSearch(selectedPrimary, selectedSecondary);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          {props.isUserSearch ? (
            <>
              <label htmlFor="user-items">User Items</label>
              <select id="user-items" ref={primaryRef}>
                <option value="posts">Posts</option>
                <option value="todos">To-Dos</option>
                <option value="comments">Comments</option>
              </select>
            </>
          ) : (
            <>
              <label htmlFor="year">Year</label>
              <select id="year" ref={primaryRef}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </>
          )}
        </div>
        <div className={classes.control}>
          {props.isUserSearch ? (
            <>
              <label htmlFor="user-id">Users</label>
              <select id="user-id" ref={secondaryRef}>
                <option value="1">User #1</option>
                <option value="2">User #2</option>
                <option value="3">User #3</option>
                <option value="4">User #4</option>
                <option value="5">User #5</option>
                <option value="6">User #6</option>
                <option value="7">User #7</option>
                <option value="8">User #8</option>
                <option value="9">User #9</option>
                <option value="10">User #10</option>
              </select>
            </>
          ) : (
            <>
              <label htmlFor="month">Month</label>
              <select id="month" ref={secondaryRef}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">Septemer</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </>
          )}
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
