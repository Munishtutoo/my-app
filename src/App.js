import React, { Fragment } from 'react';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Student from './Student';
import AddStudent from './AddStudent';

const App = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Student" component={Student} />
				<Route exact path="/add Student" component={AddStudent} />
				<Redirect to="/" />
			</Switch>
			
		</Fragment>
	);
};

export default App;
