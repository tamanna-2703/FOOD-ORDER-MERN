import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");  // ✅ Initial empty
  const[food_list, setFood_list]=useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }


  if(token){
    await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
  }
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => String(product._id) === String(item));  // ✅ id not _id
        totalAmount += (itemInfo?.price || 0) * cartItems[item];  // ✅ Safe access
      }
    }
    return totalAmount;
  };


  const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list");
    setFood_list(response.data.data)
  }

  // ✅ FIXED: Load token + sync localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // ✅ NEW: Save token to localStorage when it changes
  useEffect(() => {
  
    async function loadData() {
      await fetchFoodList()
      if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
      
    }
    loadData();
  }, [token]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
export { StoreContext };
