import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
function Home() {
  const location = useLocation(); // Added useLocation hook
  console.log('Home location:', location);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

// About.js
function About() {
  const location = useLocation(); // Added useLocation hook
  console.log('About location:', location);
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

//This code fixes the warning and ensures the component correctly receives location changes.