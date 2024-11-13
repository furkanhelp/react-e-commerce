import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  acid: "acid",
  synthwave: "synthwave",
};

const getThemeFromLocalStorages = () => {
  const theme = localStorage.getItem("theme") || themes.acid;
   document.documentElement.setAttribute("data-theme", theme);
   return theme;
};

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromLocalStorages()
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    loginUser: (state) => {
      console.log("login");
    },
    toggleTheme: (state) => {
      const {synthwave, acid} = themes;
      state.theme = state.theme === synthwave? acid :synthwave
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem('theme', state.theme)
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer

