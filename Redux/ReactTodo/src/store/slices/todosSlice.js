import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  todos: [
    { id: 1, title: "HTML", completed: true },
    { id: 2, title: "JS", completed: false },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id == action.payload);
      todo.completed = !todo.completed;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

// First, create the thunk
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (useId, thunkAPI) => {
    thunkAPI.dispatch(todosSlice.actions.setLoading(true));
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  }
);

export const { setLoading, toggleTodo, decrement, incrementByAmount } =
  todosSlice.actions;
export default todosSlice;
