import UserSidebar from "../components/UserSidebar.js"
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Routes} from 'react-router-dom'
import UsersComponent from "../components/UsersComponent"
import { UserContext } from '../UserContext'
import { useContext } from 'react'

export default function Users(){
	const {value, setValue} = useContext(UserContext)
	console.log(value)

	return (
		<div style={{display: "flex"}}>
			<UserSidebar />
			<UsersComponent />	
		</div>			
	)
}
