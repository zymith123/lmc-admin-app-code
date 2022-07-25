import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import * as CgIcons from 'react-icons/cg'
import * as MdIcons from 'react-icons/md'
import * as TbIcons from 'react-icons/tb'
import { useState } from 'react'

export default function UserSidebar() {
	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)

	return (
		<div>
			<div className="navbar-toggle">
				<Link to="#" className="menu-bars">
					<AiIcons.AiOutlineClose />
				</Link>
			</div>
			<div className="navbar_logo">
				<img src="./images/LMCLogo.svg" alt="" />
			</div>
			<div className="navbar_user">
				<img src="./images/user-default.svg" className="navbar_user-logo" />
				<span>User A <br/> Admin</span> 
			</div>
			<nav className="nav-menu">
				<ul className="nav-menu-items">
					
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<img src="./images/dashboard-white.svg" className="nav_list-logo" />
							<span className="nav-text">Dashboard</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<img src="./images/career-white.svg" className="nav_list-logo" />
							<span className="nav-text">Career Path</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<img src="./images/learning_course.png" alt="" className="learning_course-icon" />
							<span className="nav-text">Learning Course</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<img src="./images/assessment_icon.png" alt="" className="assessment_icon"/>
							<span className="nav-text">Assessments</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<img src="./images/module_library.png" alt="" className="module_library"/>
							<span className="nav-text">Module Library</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<RiIcons.RiTeamLine className="teams_icon"/>
							<span className="nav-text">Teams</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<FiIcons.FiUser className="users_icon" />
							<span className="nav-text">Users</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<BsIcons.BsBarChart className="reports_icon"/>
							<span className="nav-text">Reports</span>
						</li>
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<CgIcons.CgProfile className="profile_icon"/>
							<span className="nav-text">Profile</span>
						</li>	
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<MdIcons.MdOutlineLiveHelp className="help_feedback-icon" />
							<span className="nav-text">Help and Feedback</span>
						</li>	
					</Link>
					<Link to="/user" style={{ textDecoration: 'none' }}>
						<li className="nav-list">
							<TbIcons.TbSpeakerphone className="whats_new-icon" />
							<span className="nav-text">What's New</span>
						</li>	
					</Link>
				</ul>
			</nav>
		</div>
	)
}