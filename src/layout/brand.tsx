import React, { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'

const BrandAdmin: FunctionComponent = () => {
	const [users, setUsers] = useState<any>()

	useEffect(() => {
		const getUsers = () => {
			fetch('http://localhost:3333/list')
				.then((response) => response.json())
				.then((users) => {
					setUsers(users)
				})
		}
		getUsers()
	}, [])
	const currentUser = users && users[users.length - 1]

	const username = currentUser && currentUser.username
	const name = currentUser && currentUser.name
	const password = currentUser && currentUser.password
	const points = currentUser && currentUser.points

	async function addPoints() {
		const userUrl = users && 'http://localhost:3333/list/' + currentUser.id
		return fetch(userUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				points: points + 50,
				name: name,
				username: username,
				password: password,
			}),
		}).then((data) => data.json())
	}

	async function redeemPoints() {
		const userUrl = users && 'http://localhost:3333/list/' + currentUser.id
		return fetch(userUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				points: points - 50,
				name: name,
				username: username,
				password: password,
			}),
		}).then((data) => data.json())
	}

	return (
		<>
			<div className='brand-section h-screen bg-chalet-green-600 flex justify-center items-center text-white'>
				<div className='content text-center'>
					<h1 className='pb-4'>Brand Admin</h1>
					<a
						onClick={() => addPoints()}
						className='clear no-underline text-white block mx-auto my-10 shadow-md mt-6 uppercase bg-chalet-green-200 w-full text-lg px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
						Award <strong>user</strong> 50 points
					</a>
					<a
						onClick={() => redeemPoints()}
						className='clear no-underline text-white block mx-auto my-10 shadow-md mt-6 uppercase bg-chalet-green-200 w-full text-lg px-5 py-2 rounded-lg uppercase hover:bg-chalet-green active:bg-chalet-green-100 focus:outline-none'>
						Redeem 50 points from <strong>user</strong>
					</a>
				</div>
			</div>
		</>
	)
}

export default BrandAdmin
