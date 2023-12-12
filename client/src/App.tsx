import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryContainer } from "./containers/Country/Country.container";
import { UserLoginContainer } from "./containers/UserLogin/UserLogin.container";
import SecureRoute from "./components/SecureRoute/SecureRoute";

const router = createBrowserRouter([
  { path: "/", element: <UserLoginContainer /> },
  { path: "/country", element: <SecureRoute component={CountryContainer} />  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
