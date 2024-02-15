import ThemeContextProvider from "./ThemeContext"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"

function App() {
  return (
    <>
    <h2>tha</h2>
      <ThemeContextProvider>
        <Section1 />
        <Section2 />
      </ThemeContextProvider>
    </>
  );
}

export default App;
