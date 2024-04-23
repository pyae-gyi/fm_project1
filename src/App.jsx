import { Route, Routes } from "react-router-dom";
import SubscribePage from "./assets/pages/SubscribePage";
import Layout from "./Layout";
import SuccessPage from "./assets/pages/SuccessPage";
function App() {
  return (
    // bg-black h-screen

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SubscribePage />} />
        <Route path="success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}

export default App;
