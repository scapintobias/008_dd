import React from 'react';

import { CaseStudies } from '../components/studies';
import { Collection } from '../components/collection';
import { ContactLink } from '../components/contactlink';

export function Work() {
	return (
		<>
			<Collection />
			<CaseStudies />
			<ContactLink className='sm:px-4 xl:px-0' />
		</>
	);
}
