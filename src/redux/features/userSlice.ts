import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  number: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    { id: '1', firstName: "kuldeep", lastName: "prajapat", age: 30, email: "iamkuldeep356@gmail.com", number: "8949898257" },
    { id: '2', firstName: "Rahul", lastName: "jha", age: 25, email: "rahul@gmail.com", number: "9876543210" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
