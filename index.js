var fileSystem = require("fs");
var handlebars = require("handlebars");
var layouts = require("handlebars-layouts");
var intl = require('handlebars-intl');

function render(resume) {
  // Register helpers
  intl.registerWith(handlebars);
  handlebars.registerHelper("toLower", function(input) {
    return input.toLowerCase();
  });
  handlebars.registerHelper(layouts(handlebars));
  // Register partials
  handlebars.registerPartial("layout", fileSystem.readFileSync(__dirname + "/layout.hbs", "utf8"));
  // Compile template
  var template = fileSystem.readFileSync(__dirname + "/resume.hbs", "utf-8");
  return handlebars.compile(template)(resume);
}

module.exports = {
  render: render
};
