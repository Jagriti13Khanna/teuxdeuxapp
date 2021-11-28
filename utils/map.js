const fs = require('fs');

const createMaps = (key) => {
    const initMap = "mapping";
    return `<!-- ${initMap}::${key} -->`; 
}

const mappingHtmlChildrens = (staticFolderPath, childrens) => {
    const content = fs.readFileSync(`${staticFolderPath}/index.html`, 'utf-8');
    const mappedTemplate = content.replace(createMaps('children'), childrens);
    return mappedTemplate;
}

module.exports = mappingHtmlChildrens;