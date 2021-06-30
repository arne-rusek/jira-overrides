// Use as much as possible for issue text:
// - remove useless padding
// - make issue itself 85% of width (from 60%)

// Trivial solution - just applying style to required elements often fails as
// Jira's JS removes styles from elements somehow. Seems it also removes events
// etc... So one has to set it mutliple times or wait until this Jira
// "functionality" is run.
//
// This is stupid but it works :-)

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


function setElementsStyle() {
	elem = document.getElementById("jira-issue-header");
	if (elem !== null) {
		elem.parentElement.parentElement.style.width = "85%";
		elem.parentElement.parentElement.style.paddingLeft = "0";
	}
	elem = document.getElementById("jira-issue-header-actions")
	if (elem !== null) {
		elem.parentElement.parentElement.style.width = "15%";
		elem.getElementById("jira-issue-header-actions").parentElement.parentElement.style.paddingRight = "0";
	}
}

async function jiraCSSApply() {
	console.log('Starting jiraCSSApply');
	setElementsStyle();
	for (let i = 0; i < 15; i++) {
		await sleep(300);
		setElementsStyle();
		console.log('Reapplying jiraCSSApply');
	}
}

jiraCSSApply();
