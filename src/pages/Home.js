import { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

export default function Home(){
	const {value, setValue} = useContext(UserContext)

	const [loginData, setLoginData] = useState({	
		email: "",
		password: ""
	})

	const handleChange = (event) => {
		const {name, value} = event.target
		setLoginData(prevLoginData => {
			return {
				...prevLoginData,
				[name]: value
			}
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setValue({
			email: loginData.email,
			password: loginData.password
		})
		window.location.replace('./#/user')
	}

	const handleGoogleLogin = () => {
		window.location.replace('./#/user')
	}


	return (
		<main id="home">

			<div id="home_img-container">
				<img src="./images/login-pic-left.png" alt="" id="home_background"/>
			</div>

			<div id="login">
				<div id="login_container">

					<img src="./images/LMClogo.svg" alt="" id="login_logo"/>
					<h4 className="login_content-title">Welcome to LMC Admin App</h4>
					<button id="gmail_login-button" onClick={handleGoogleLogin}>
						<img src="./images/google.svg" alt="" id="gmail_login-logo"/>
						Sign in with Google
					</button>

					<div id="login_divider">
						<div className="divider_line"></div>
						<div id="divider_text">or Sign in with Email</div>
						<div className="divider_line"></div>
					</div>

					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="login_email" className="login_detail-label">
								Email
							</label>
							<input 
								type="email" 
								name="email" 
								id="login_email" 
								className="login_details" 
								onChange={handleChange} 
								value={loginData.email}
							/>
							<label htmlFor="login_password" className="login_detail-label">
								Password
							</label>
							<input 
								type="password" 
								name="password" 
								id="login_password" 
								className="login_details"
								onChange={handleChange} 
								value={loginData.password}
							/>
							<a href="" id="forgot_password">
								Forgot Password?
							</a>
						</div>
						<button id="login_button">
							Login
						</button>
					</form>

				</div>
			</div>
		</main>
	)
}
