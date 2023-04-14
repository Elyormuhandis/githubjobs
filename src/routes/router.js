import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../pages/layout/layout.page";
import { JobInfo, jobLoader } from "../pages/jobinfo/jobinfo.page";
import { Main } from "../components/main/main.component";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Main />} />
      <Route path={"/:id"} element={<JobInfo />} loader={jobLoader} />
    </Route>
  )
);
