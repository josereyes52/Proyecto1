import React, {	Component } from 'react';
import CategoriesItem from './CategoriesItem';
import axios from 'axios';

export class Categories extends Component{
	state = {
		categories:[],
		isLoaded:false
	}

	componentDidMount(){
				
		axios.get("http://localhost/wp-json/wp/v2/categories")
		.then(res => this.setState({
			categories:res.data,
			isLoaded:true
		}))
		.catch(err=>console.log(err));
	}

	render(){
		const {categories, isLoaded } = this.state;
		if (isLoaded) {
			return (
				<ul className="list-group">
					{
						categories.map(category => (
							<CategoriesItem key={category.id} category={category} />
						)
					)
					}
				</ul>
			);
		}
		return <h3>Loading....</h3>
	}
}

export default Categories