import marked from "marked";

function createStrongs(match, text, offset, string) {
  return `<strong class="text_uncommon">${text}</strong>`;
}

function createValues(match, values, offset, string) {
  let html = '<span class="desc-values">';
  html += values.split("/").join('<span class="text_white"> / </span>');
  html += "</span>";
  return html;
}

function createTooltip(match, lookup, text, offset, string) {
  return `<span class="tooltipped" dbd-tooltip="${lookup}">${text}</span>`;
}

function getHTML(markdown, preprocess = false) {
  if (preprocess) {
    markdown = markdown.replace(/\*\*([^\*]+)\*\*/g, createStrongs);
    markdown = markdown.replace(/\[\[([^\]]+)\]\]/g, createValues);
    markdown = markdown.replace(/{{([^}]+)\|([^}]+)}}/g, createTooltip);
  }

  return marked(markdown);
}

export default getHTML;