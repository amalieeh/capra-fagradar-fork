import React, { createElement } from 'react';
import { Radar } from '../radar';

// Dynamically import all mdx files in current dir
const modules = import.meta.glob('./**/*.mdx', { eager: true }) as any;
let items = [];

for (const modulePath in modules) {
  const frontmatter =  modules[modulePath]?.frontmatter;

  items.push({
    ...frontmatter,
		//element: createElement(modules[modulePath]?.default),
  });
};

export const TechnicalRadar = () => {
	const quadrants = [
		{
			name: "backend",
			orientation: "top-left",
			blipColor: "rgb(71, 161, 173)",
			blips: [
        ...(items.filter(item => item.quadrant === 'backend')),
			],
		},
		{
			name: "frontend",
			orientation: "top-right",
			blipColor: "rgb(107, 158, 120)",
			blips: [
        ...(items.filter(item => item.quadrant === 'frontend')),
			],
		},
		{
			name: "software engineering",
			orientation: "bottom-left",
			blipColor: "rgb(204, 133, 10)",
			blips: [
        ...(items.filter(item => item.quadrant === 'software_engineering')),
			],
		},
		{
			name: "plattform",
			orientation: "bottom-right",
			blipColor: "rgb(225, 106, 124)",
			blips: [
        ...(items.filter(item => item.quadrant === 'plattform')),
			],
		},
	];

	return (
		<div>
			<h1> Teknisk radar </h1>
			<Radar quadrants={quadrants} />
		</div>
	);
};
