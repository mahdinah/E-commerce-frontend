import "./App.css";
import ContactUs from "./components/contact copy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<div className="App">
				<ContactUs />
			</div>
		</div>
	);
}

export default App;
