// <<<<<----Use Effect and Fetchig data----->>>>
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [nextLock, setNextLock] = useState(false);
  const [prevLock, setPrevLock] = useState(false);
  const [content, changeContent] = useState("I am react");

  const [users, setUsers] = useState([]);

  const [person, setPerson] = useState({});

  useEffect(() => {
    if (count === 10) {
      setNextLock(true);
    } else {
      setNextLock(false);
    }
    if (count === 1) {
      setPrevLock(true);
    } else {
      setPrevLock(false);
    }
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers([...data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handlePrevCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleNextCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => response.json())
      .then((data) => {
        setPerson({ ...data });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [count]);

  return (
    <>
      <div>
        <h1>{content}</h1>
        <div>
          <button
            onClick={(e) => {
              changeContent("Hello Jahid");
            }}
          >
            Change
          </button>
        </div>
      </div>

      <div>
        <h1>Fetch Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Random Users</h1>
        <div>
          <h3>User {count}</h3>
          <p>Name: {person.name}</p>
          <p>Email: {person.email}</p>
          <p>Website: {person.website}</p>
        </div>
        <button onClick={handlePrevCount} disabled={prevLock}>
          Prev
        </button>{" "}
        <button onClick={handleNextCount} disabled={nextLock}>
          Next
        </button>
      </div>
    </>
  );
};

export default UseEffect;
