import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { NavComponent } from "./component";
import Drawer from "./component/Drawer";
import useFetch from "./hook/useFetch";
import {
  AdminPage,
  DetailBookPage,
  HomePage,
  InboxPage,
  InventoryPage,
  MemberPage,
  NewUserPage,
  RecordsPage,
  SettingPage,
} from "./page";
import DashboardPage from "./page/Dashboard/Dashboard.page";
import { getBookData } from "./service/book.service";


const App = () => {
  const { data, loading, error } = useFetch(getBookData, "books");

  return (
    <div className=" min-h-screen">
      <NavComponent />
      <Drawer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage/>}/> */}
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<InventoryPage />} />
          <Route path="records" element={<RecordsPage />} />
          <Route path="members" element={<MemberPage />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/register" element={<NewUserPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
