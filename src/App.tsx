import React from "react";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<MainContent />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/country/:countryName"
              element={<MainContent />}
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
