import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { Blog } from "../Blog";

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "Title 1",
//     b: "Title 1 Content",
//     userId: 2,
//     createdAt: new Date(),
//   },
//   {
//     id: 2,
//     title: "Title 2",
//     content: "Title 2 Content",
//     userId: 2,
//     createdAt: new Date(),
//   },
//   {
//     id: 3,
//     title: "Title 3",
//     content: "Title 3 Content",
//     userId: 3,
//     createdAt: new Date(),
//   },
// ];

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const blogs: Blog[] = [];
const initialState = {
  blogs,
  error: "",
  loading: "pending",
};

export const fetchAllBlogs = createAsyncThunk<Blog[]>(
  "blogs/fetchAllBlogs",
  // if you type your function argument here
  async () => {
    const response = await fetch(API_URL);
    return (await response.json()) as Blog[];
  }
);

export const fetchBlogById = createAsyncThunk<Blog, string>(
  "blogs/fetchBlogById",
  // if you type your function argument here
  async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    return (await response.json()) as Blog;
  }
);

export const addBlog = createAsyncThunk<Blog, Blog>(
  "blogs/addBlog",
  async (blog: Blog) => {
    const resp = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    return resp.json() as Blog;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogs.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchAllBlogs.fulfilled,
        (state, action: PayloadAction<Blog[]>) => {
          state.loading = "idle";
          state.blogs = action.payload;
        }
      )
      .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.loading = "idle";
        if (action.payload) {
          state.error = action.payload.toString();
        } else {
          state.error = action.error.message
            ? action.error.message.toString()
            : "";
        }
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchBlogById.fulfilled,
        (state, action: PayloadAction<Blog>) => {
          state.loading = "idle";
          state.blogs.map((blog) =>
            blog.id === action.payload.id ? { ...action.payload } : blog
          );
        }
      )
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = "idle";
        if (action.payload) {
          state.error = action.payload.toString();
        } else {
          state.error = action.error.message
            ? action.error.message.toString()
            : "";
        }
      })
      .addCase(addBlog.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.loading = "idle";
        state.blogs.push(action.payload);
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = "idle";
        if (action.payload) {
          state.error = action.payload.toString();
        } else {
          state.error = action.error.message
            ? action.error.message.toString()
            : "";
        }
      });
  },
});

export default blogsSlice.reducer;
