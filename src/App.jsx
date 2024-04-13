import Auth from "./components/Auth";
import Nav from "./components/Nav";
import axios from "axios"
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  axios.defaults.baseURL = 'http://localhost:8080'

  return (
    <div>
      <Auth />
      {/* <Nav /> */}
      <ToastContainer autoClose={2000} />
    </div>
  )
}