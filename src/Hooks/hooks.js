import { useState, useEffect, useContext } from 'react';
import { __RouterContext } from 'react-router';

export const useExpanded = (toggleSelector) => {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		const listener = (e) =>
			e.target !== document.querySelector(toggleSelector) && setExpanded(false);
		document.body.addEventListener('click', listener);
		return () => document.body.removeEventListener('click', listener);
	});

	return [expanded, () => setExpanded(!expanded)];
};

export function useRouter() {
	return useContext(__RouterContext);
}
