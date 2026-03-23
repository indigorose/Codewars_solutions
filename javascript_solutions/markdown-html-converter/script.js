const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const htmlPreview = document.getElementById('preview');

// Regex List

const h3Regex = [/^### (.*$)/gim, '<h3>$1</h3>'];
const h2Regex = [/^## (.*$)/gim, '<h2>$1</h2>'];
const h1Regex = [/^# (.*$)/gim, '<h1>$1</h1>'];
const blockquoteRegex = [/^\>\s?(.*$)/gim, '<blockquote>$1</blockquote>'];
const boldRegex = [/\*\*(.*)\*\*/gim, '<strong>$1</strong>'];
const underscoreBoldRegex = [/\_\_(.*)\_\_/gim, '<strong>$1</strong>'];
const italicsRegex = [/\*(.*)\*/gim, '<em>$1</em>'];
const underscoreItalicsRegex = [/\_(.*)\_/gim, '<em>$1</em>'];
const linkRegex = [/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'];
const imageRegex = [/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">'];
const lineBreakRegex = [/\n$/gim, '<br />'];

const markdownRegexList = [
	h3Regex,
	h2Regex,
	h1Regex,
	imageRegex,
	blockquoteRegex,
	boldRegex,
	italicsRegex,
	linkRegex,
	lineBreakRegex,
	underscoreBoldRegex,
	underscoreItalicsRegex,
];

function convertMarkdown() {
	const markdown = markdownInput.value;
	// console.log(markdown);
	// let html = (markdown.replace(h2Regex[0], h2Regex[1]));
	let htmlText = markdown;
	markdownRegexList.forEach(([pattern, replacement]) => {
		htmlText = htmlText.replace(pattern, replacement);
	});
	htmlOutput.textContent = htmlText;
	htmlPreview.innerHTML = htmlText;
	return htmlText;
}

markdownInput.addEventListener('input', convertMarkdown);
