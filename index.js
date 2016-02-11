var fileSystem = require("fs");
var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');

function render(resume) {
  // Register helpers
  handlebars.registerHelper(layouts(handlebars));
  // Register partials
  handlebars.registerPartial('layout', fileSystem.readFileSync(__dirname + '/layout.hbs', 'utf8'));
  // Compile template
  var template = fileSystem.readFileSync(__dirname + "/resume.hbs", "utf-8");
  return handlebars.compile(template)({
    resume: resume
  });
}

module.exports = {
  render: render
};
