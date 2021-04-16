import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planetsA = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const planetsB = planetsA.map((planet, i) => (
	<li key={i} class="list-group-item">
		{planet}
	</li>
));

const content = <ul className="list-group m-5">{planetsB}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
