import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import { Homepage } from './Pages';
import { Borromeo, Lima, Manin, Yape } from './cases';

import Logos from './components/logos';
import { __RouterContext } from 'react-router';
import Info from './Pages/info';
export function useRouter() {
	return useContext(__RouterContext);
}

function ScrollToTop({ children }) {
	const {
		location: { pathname },
	} = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return children || null;
}

function PageContent() {
	return (
		<Switch>
			<Route path='/' exact component={Homepage} />
			<Route path='/info' exact component={Info} />

			<Route path='/logos' exact component={Logos} />
			<Route path='/manin' component={Manin} />
			<Route path='/yape' component={Yape} />
			<Route path='/lima' component={Lima} />
			<Route path='/borromeo5' component={Borromeo} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<ScrollToTop>
				<Navbar />
				<div style={{ overflow: 'hidden' }}>
					<PageContent />
				</div>
			</ScrollToTop>
		</Router>
	);
}
