import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
	const hardcodePosts = [ 
		{
			id: 1,
			user: {
				name: 'knyaz'
			},
			title: 'title',
			description: 'description aaaaaaaaaaaaa',
			reputation: 100,
			dateCreated: new Date('December 17, 1995 03:24:00')
		},
		{
			id: 2,
			user: {
				name: 'vityaz'
			},
			title: 'eltit',
			description: 'aaaaa desc aaaaaaaaaaaaa',
			reputation: 100,
			dateCreated: new Date('December 23, 1996 03:14:00')
		}
	]
	const [posts, setPosts] = React.useState([]);

	const fetchData = () => {
		axios.get("localhost:8080/api/post")
			.then(res => setPosts(res.data));
	}
	useEffect(() => {
		fetchData();
		console.log(posts);
	})

	return (
		<div className="App">
			<PostList posts={posts}/>
		</div>
	);
}

export default App;
