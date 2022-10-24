// My Components
import Todo from "./components/Todo";
import Headline from "./components/Headline";
import Home from "./components/Home";

// My Contexts
import { TodoAppContextProvider } from "./providers/TodoAppContext";

// External Components
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Main Component
function App() {
  return (
    <TodoAppContextProvider>
      <AppContainer>
        <BrowserRouter>
          <Link to="/" style={{  textDecoration: "none" }}>
            <Headline />
          </Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo/:id" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </TodoAppContextProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
