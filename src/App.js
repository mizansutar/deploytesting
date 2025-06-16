import { Container } from 'react-bootstrap';
import './_App.scss';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import HomeScreen from './screen/homeScreen';
import LoginScreen from './screen/login/loginScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app__container border border-info">
        <SideBar />
        <Container className="app__main border border-danger">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>


        <Route path="/" element={
          <Layout>
            <HomeScreen />
          </Layout>
        } />


        <Route path="/login" element={<LoginScreen />} />


        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
