import { Subject } from '../types';

export const MOCK_SUBJECTS: Subject[] = [
	{
		id: 1,
		code: 'CS101',
		name: 'Introduction to Computer Science',
		department: 'Computer Science',
		description:
			'Foundational course covering programming basics, algorithms, and computational thinking for first-year students.',
		createdAt: new Date().toISOString(),
	},
	{
		id: 2,
		code: 'MATH201',
		name: 'Calculus II',
		department: 'Mathematics',
		description:
			'Advanced calculus course focusing on integration techniques, series, and applications of calculus in engineering.',
		createdAt: new Date().toISOString(),
	},
	{
		id: 3,
		code: 'ENG150',
		name: 'Literature and Critical Analysis',
		department: 'English',
		description:
			'Explores major literary works and develops critical reading and analytical writing skills across various genres.',
		createdAt: new Date().toISOString(),
	},
];
