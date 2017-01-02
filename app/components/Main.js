const React = require('react');
const ReactDOM = require('react-dom');

const Main = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));