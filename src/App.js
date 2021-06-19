import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import { Homepage, Work, About } from './Pages';
import { Borromeo, Lima, Manin, Yape } from './cases';

import Logos from './components/logos';
import { __RouterContext } from 'react-router';
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
			<Route path='/about' exact component={About} />
			<Route path='/work' exact component={Work} />
			<Route path='/work/logos' exact component={Logos} />
			<Route path='/work/study/manin' component={Manin} />
			<Route path='/work/study/yape' component={Yape} />
			<Route path='/work/study/lima' component={Lima} />
			<Route path='/work/study/borromeo5' component={Borromeo} />
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
