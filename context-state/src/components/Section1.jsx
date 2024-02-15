
import { useTheme } from "../ThemeContext";
import Section3 from "./Section3";

function Section1() {
  const { toggleClick } = useTheme();
  return (
    <div>
      <button onClick={() => toggleClick} >Toggle mode</button>
      <h2>Section 1</h2>
      <Section3 />
    </div>
  );
}

export default Section1;