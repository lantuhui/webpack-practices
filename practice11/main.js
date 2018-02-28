
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class UserGist extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			lastGistUrl: ''
		};
	}

	componentDidMount(){
		$.get(this.props.source,function(result){
			var lastGist = result[0];
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl: lastGist.html_url
			});
		}.bind(this));
	}

	componentWillUnmount(){

	}

	render(){
		return(
			<div>
				{this.state.username}'s last gist is
				<a href={this.state.lastGistUrl}>here</a>
			</div>
		)
	}
}

ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists" />,
	document.getElementById('example')
)