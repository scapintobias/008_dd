import slug from 'slugify';

export function slugify(...strings) {
	return slug(strings.join(' '), {
		lower: true,
		remove: /[*+~.()'"!:@]/g,
	});
}
