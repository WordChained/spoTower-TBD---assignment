import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./views/Homepage/Homepage";
import { lazy } from "react";
import { QuoteContextProvider } from "./store/contexts/quoteContext";
const NotFound404 = lazy(() => import("./views/404/NotFound404"));
const QuotesPage = lazy(() => import("./views/Quotes/QuotesPage"));
function App() {
  return (
    <QuoteContextProvider>
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QuoteContextProvider>
  );
}

export default App;
