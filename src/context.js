import React, { useState, useContext, useReducer, useEffect } from "react";
import data from "./data";
import reducer from "./reducer";

// const [openModal, setOpenModal] = useState(false)

const AppContext = React.createContext();

const initialState = {
  data: data,
  total: 0,
  amount: 0,
  handleError: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openModal, setOpenModal] = useState(false);
  const [imageNum, setImageNum] = useState(0);
  const [slideOn, setSlideOn] = useState(false);

  const modalOpening = () => {
    setOpenModal(true);
  };
  const modalClosing = () => {
    setOpenModal(false);
  };

  const hideNotification = () => {
    setTimeout(() => {
      dispatch({ type: "HIDE_NOTIFICATION" });
    }, 3000);
  };

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "HIDE_NOTIFICATION" });
      }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  const next = () => {
    if (imageNum < 3) {
      setImageNum(imageNum + 1);
    } else {
      setImageNum(0);
    }
  };
  const prev = () => {
    if (imageNum === 0) {
      setImageNum(3);
    } else {
      setImageNum(imageNum - 1);
    }
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        openModal,
        modalClosing,
        modalOpening,
        hideNotification,
        imageNum,
        setImageNum,
        clearCart,
        next,
        prev,
        slideOn,
        setSlideOn
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
