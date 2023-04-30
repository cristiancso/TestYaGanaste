import { createBrowserRouter } from "react-router-dom";
import BankList from "../pages/BankList";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <BankList />
  }
])