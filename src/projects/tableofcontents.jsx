
import { Breadcrumb, Anchor } from 'antd';
import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect, useRef } from 'react';

const useHeadingsData = () => {
	const [nestedHeadings, setNestedHeadings] = useState([]);

	useEffect(() => {
		const headingElements = Array.from(
			document.querySelectorAll("h1, h2, h3")
		);

		// Created a list of headings, with H3s nested
		const newNestedHeadings = getNestedHeadings(headingElements);

		setNestedHeadings(newNestedHeadings);
	}, []);

	return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
	var headingAttention = headingElements.filter(e => {
		let l = e.nodeName;
		return e.id !== "title" && (l === "H1" || l === "H2" || l === "H3");
	})

	let ki = -1;
	var headingLst = headingAttention.map(e => {
		ki++;
		return ({ key: `contents_${ki}`, href: `#${e.id}`, title: e.innerHTML, level: parseInt(e.nodeName.slice(-1)) })
	})
	var result = [],
		indices = [],
		levels = [result]

	headingLst.forEach(o => {
		var index = indices.findIndex(level => level >= o.level);
		if (index === -1) {
			index = indices.push(o.level) - 1;
		} else {
			indices.length = index + 1;
		}
		levels[index].push(Object.assign({}, o, { children: levels[index + 1] = [] }));
	});


	return result;
};

const useNavHeight = () => {
	const [navHeight, setNavHeight] = useState(0);

	useEffect(() => {
		const navbar = document.getElementById("main-navbar");
		console.log(navbar)

		setNavHeight(navbar.offsetHeight);
	}, []);

	return { navHeight };
}

const TableOfContents = ({ title }) => {
	const { nestedHeadings } = useHeadingsData();
	const { navHeight } = useNavHeight();

	return (
		<>
			<Breadcrumb style={{paddingBottom: "14px"}}
				items={[
					{
						title: <a href="#home">Portfolio</a>,
					},
					{
						title: <a href="#projects">Projects</a>,
					},
					{
						title: `${title}`
					}
				]}
			/>
			<Anchor
				targetOffset={navHeight}
				onClick={(e, l) => {
					// I have no idea why this works in hash router link... but sure
					e.preventDefault();
				}}
				items={nestedHeadings}
			/>
		</>
	);
};

export default TableOfContents