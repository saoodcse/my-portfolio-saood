import { configureStore } from "@reduxjs/toolkit";
import projectReducer    from "./projectSlice";
import skillsReducer     from "./skillsSlice";
import experienceReducer from "./experienceSlice";
import blogsReducer      from "./blogsSlice";
import githubReducer     from "./githubSlice";
import servicesReducer   from "./servicesSlice";
import certsReducer      from "./certsSlice";
import homeReducer       from "./homeSlice";
import aboutReducer      from "./aboutSlice";


const store = configureStore({
  reducer: {
    home:       homeReducer,
    about:      aboutReducer,
    projects:   projectReducer,
    skills:     skillsReducer,
    experience: experienceReducer,
    blogs:      blogsReducer,
    github:     githubReducer,
    services:   servicesReducer,
    certs:      certsReducer,
  },
});

export default store;