import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchTodos",
  async (userId, thunkAPI) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  todos: [
    { id: 1, completed: true, title: "HTML" },
    { id: 2, completed: false, title: "JS" },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    addTodo(state, action) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { updateTodo, decrement, incrementByAmount } = todosSlice.actions;
export default todosSlice;
