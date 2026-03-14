const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const htmlPreview = document.getElementById('preview');

// Regex List
const linkRegex = /  \[([^\]]+)\]\(([^\)]+)\)  /;

function convertMarkdown() {
	let html = markdown.replace(linkRegex, '<a href="$2">$1</a>');
}
