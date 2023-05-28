import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom"

const MainLayout = ({ methods }) => {
	return (
		<div>
			<NavBar methods={methods} />
			<Outlet />
		</div>
	)
}

export default MainLayout;
