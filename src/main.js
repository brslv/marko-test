const cmp = require('./components/MarkoTest');
const templ = require('./templates/MarkoTest.marko');

templ.Component = cmp;
console.log(templ);
// templ._w = cmp;
// console.log(templ.render());
console.log(templ.renderSync({name: 'test'}).getNode().firstChild.outerHTML);