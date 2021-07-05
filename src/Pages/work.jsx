import React from 'react';

import { CaseStudies } from '../components/studies';
import { Collection } from '../components/collection';
import { ContactLink } from '../components/contactlink';

export function Work() {
	return (
		<main>
			<Collection />
			<CaseStudies />
			<ContactLink />
		</main>
	);
}
