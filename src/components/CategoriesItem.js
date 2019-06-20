import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class CategoriesItem extends Component {
    render() {
        const { name,description,link } = this.props.category;
        return (
                    <li className="list-group-item">
                        <a href={link}>
                            {name}
                        </a>
                            { description.length > 0 && 
                            <ul >
                                <li dangerouslySetInnerHTML={{__html: description}}></li>
                            </ul>
                        }
                    </li>
        );
    }
}

export default CategoriesItem