import HomePage from "./pages/HomePage";
import "./App.css";
import BaseLayout from "./components/BaseLayout";

export default function App() {
  return (
    <>
      <BaseLayout>
        <HomePage />
      </BaseLayout>
    </>
  );
}
