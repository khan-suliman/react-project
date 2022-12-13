import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/login/Login";
function App() {
  return (
    <div className="App">
      createBrowserRouter(
      createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
        </Route>
        )
        );
    </div>
  );
}

export default App;
