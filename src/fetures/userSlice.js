import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for login
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("Sending credentials:", credentials);
      const response = await fetch(
        "https://robo-dine-python-project.onrender.com/login",
        {
          // Replace with your login API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from server
        return rejectWithValue(errorData); // Reject with error details
      }

      const data = await response.json();
      return data; // Return user data
    } catch (error) {
      return rejectWithValue(error.message); // Reject with error message
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Clear user from local storage
    },
    setUser: (state, action) => {
      // To set user from local storage on app load
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Store user in local storage
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload; // Store the error details
    });
  },
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;
