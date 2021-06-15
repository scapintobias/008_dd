import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useRouter } from './Hooks/hooks';

import Navbar from './Components/navbar';
import { Homepage, Project, Work, About } from './Pages';
import { Borromeo, Lima, Yape, YapeSrl } from './Projects/content';
import { Redesign } from './Projects/redesign';

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
			<Route path='/redesign' exact component={Redesign} />
			<Route path='/work' exact component={Work} />
			<Route path='/work/:type' exact component={Work} />
			<Route path='/work/:type/:year/:slug' component={Project} />
			<Route path='/work/study/yape' component={Yape} />
			<Route path='/work/study/yape-srl' component={YapeSrl} />
			<Route path='/work/study/lima' component={Lima} />
			<Route path='/work/study/borromeo5' component={Borromeo} />
			{/* <Route path='/resources' exact component={Resources} /> */}
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
