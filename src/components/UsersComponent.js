import { useState} from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
import { Dropdown } from 'semantic-ui-react'
import * as TiIcons from 'react-icons/ti'

export default function UsersComponent() {

	const [targetName, setTargetName] = useState('')
	const [targetFullName, setTargetFullName] = useState('')

	return (
		<div>
			<nav className="users_component-nav">
				<a href="/lmc-admin-app/#/">Switch to Trainee</a>
        <a href="/lmc-admin-app/#/">Logout</a>
			</nav>
			<div className="user_table-container">
				<span>Users</span>
				<Button variant="success" className="invite_user-button" size="sm">
					<TiIcons.TiPlusOutline className="invite_user-icon"/>
          Invite User
				</Button>
				<div className="users_table-divider"></div>
  				<div className="select_name">
  					<Form.Control as="select" value={targetFullName} onChange={(e)=>setTargetFullName(e.target.value)}>
            			<option>name</option>
            			<option value="Expense">Evelyn</option>
            			<option value="Income">Jax</option>
            			<option value="All">Tristana</option>
          			</Form.Control>
  				</div>
  				<div className="search">
  					<Form>
  						<Form.Group>
  							<Form.Control type="text" placeholder="Search..." value={targetName} onChange={e => setTargetName(e.target.value)} />
  						</Form.Group>
  					</Form>
  				</div>
  				<div>
  					<Table striped bordered hover striped="columns" className="mt-4">
        				<thead>
          					<tr className="table-head">
            					<th>Email</th>
            					<th className='text-center'>Name</th>
            					<th className='text-center'>Status</th>
            					<th className='text-center'>Role</th>
            					<th className='text-center'>View</th>
            					<th className='text-center'>Update</th>
            					<th className='text-center'>Delete</th>
          					</tr>
       		 			</thead>
        				<tbody>
          					<tr>
            					<td className="align-middle">
                        <img src="./images/user-default.svg" className="table_user-prof-photo" />
                        cristopher@meditab.com
                      </td>
            					<td className='text-center align-middle'>Chris Owl</td>
            					<td className='text-center align-middle'>Active</td>
            					<td className='text-center align-middle'>Trainer</td>
            					<td className='text-center align-middle'>
                        <a href="">
                          <img src="./images/view.svg" alt="" className="view_icon"/>
                        </a>
                      </td>
            					<td className='text-center'>
                        <a href="">
                          <img src="./images/edit.svg" alt="" className="update_icon"/>
                        </a>  
                      </td>
            					<td className='text-center'>
                        <a href="">
                          <img src="./images/trash.svg" alt="" className="delete_icon"/>
                        </a>
                      </td>
          					</tr>
                    <tr>
                      <td className="align-middle">
                        <img src="./images/user-default.svg" className="table_user-prof-photo" />
                        tristana@meditab.com
                      </td>
                      <td className='text-center align-middle'>Tristana Yordle</td>
                      <td className='text-center align-middle'>Active</td>
                      <td className='text-center align-middle'>Admin</td>
                      <td className='text-center align-middle'>
                        <a href="">
                          <img src="./images/view.svg" alt="" className="view_icon"/>
                        </a>
                      </td>
                      <td className='text-center align-middle'>
                        <a href="">
                          <img src="./images/edit.svg" alt="" className="update_icon"/>
                        </a>  
                      </td>
                      <td className='text-center align-middle'>
                        <a href="">
                          <img src="./images/trash.svg" alt="" className="delete_icon"/>
                        </a>  
                      </td>
                    </tr>
        				</tbody>
      				</Table>
  				</div>
			</div>		
		</div>
	)
}