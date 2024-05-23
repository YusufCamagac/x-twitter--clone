import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "btc_yusuf",
    fullname: "./btc_yusuf",
    avatar:
      "//pbs.twimg.com/profile_images/1658733245851217924/CC3Bu6dO_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "btc_yusuf",
      fullname: "./btc_yusuf",
      avatar:
        "//pbs.twimg.com/profile_images/1658733245851217924/CC3Bu6dO_400x400.jpg",
    },
    {
      id: 2,
      username: "btc_yuasdasd",
      fullname: "./btc_yususdasd",
      avatar:
        "//pbs.twimg.com/profile_images/1658733245851217924/CC3Bu6dO_400x400.jpg",
    },
  ],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    removerAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this.currentAccount(false);
      }
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { addAccount, removerAccount, setCurrentAccount } =
  authSlice.actions;

export default authSlice.reducer;
