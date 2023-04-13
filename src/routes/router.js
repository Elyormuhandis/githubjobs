import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../pages/layout/layout.component";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Layout />}></Route>)
);
