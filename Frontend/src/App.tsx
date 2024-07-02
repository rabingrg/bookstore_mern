import { Toaster } from "react-hot-toast";
import AppRouter from "./app/AppRouter";
const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <AppRouter />
      <Toaster />
    </div>
  );
};

export default App;
