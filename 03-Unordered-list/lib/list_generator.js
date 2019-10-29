listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
 return `<li class="list-group-item">${content}</li>`
};

unorderedList = (items) => {
  let line1 = `<ul class="list-group">`
    items.forEach((content) => {
      line1 = line1 + listItem(content)
    });
    line1 = line1 + `</ul>`
    return line1;
}

const map1=unorderedList.map(content);
