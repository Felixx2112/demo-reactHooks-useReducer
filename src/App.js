import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;

    case "GIAM":
      return state - 1;

    case "XOA_TAT_CA":
      return 0;

    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "GAN_GIA_TRI":
      return action.data;

    default:
      return state;
  }
};

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        ...{
          loading: true,
        },
      };

    case "GET_USER_SUCCESS":
      return {
        ...state,
        ...{
          loading: false,
          data: action.data,
        },
      };

    case "GET_USER_ERROR":
      return {
        ...state,
        ...{
          data: [],
          error: action.data,
        },
      };

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, userDispatch] = useReducer(userReducer, initialState);

  const getUsers = () => {
    userDispatch({
      type: "GET_USER_REQUEST",
    });

    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res,
          });
        })
        .catch((err) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err,
          });
        });
    }, 3000);
  };
  return (
    <>
      <button onClick={getUsers}>Get user</button>

      {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
      <hr />
      <p>COunt : {count}</p>
      <button onClick={() => dispatch("TANG")}>Tang</button>
      <button onClick={() => dispatch("GIAM")}>Giam</button>
      <button onClick={() => dispatch("XOA_TAT_CA")}>Xoa het du lieu</button>
      <hr />

      <p>Count2 {count2}</p>
      <button
        onClick={() =>
          dispatch2({
            type: "GAN_GIA_TRI",
            data: 10,
          })
        }
      >
        Gan gia tri
      </button>
    </>
  );
}

export default App;
