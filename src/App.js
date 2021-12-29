import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import AppRouter from "./Router/Router";
function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
