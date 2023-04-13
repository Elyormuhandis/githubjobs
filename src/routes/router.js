import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../pages/layout/layout.component";
import { JobCard } from "../components/job-card/job-card.component";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path={"jobs"} element={<JobCard />} />
    </Route>
  )
);
