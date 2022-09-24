import { AuthProvider } from "./Auth/Context/AuthProvider";
import Header from "./components/Header/Header";
import PagesRoute from "./components/Routes/PagesRoute";

function App() {
  return (
    <>
    <AuthProvider>
      <Header />
      <PagesRoute />
    </AuthProvider>
    </>
  );
}

export default App;
