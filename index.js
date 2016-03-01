var fileSystem = require("fs");
var handlebars = require("handlebars");
var layouts = require("handlebars-layouts");
var momentHandler = require("handlebars.moment");
var moment = require("moment");

function render(resume) {
  // Register helpers
  momentHandler.registerHelpers(handlebars);
  handlebars.registerHelper("dateRange", function(startDate, endDate, format) {
    result = "";
    if (startDate) {
      var momentStartDate =  moment.utc(startDate);
      if (momentStartDate.isValid()) {
        result += momentStartDate.format(format) + " - ";
      }
      if(endDate) {
        var momentEndDate =  moment.utc(endDate);
        if (momentEndDate.isValid()) {
          result += momentEndDate.format(format);
        }
      } else {
        result += "Present";
      }
    } else {
      if(endDate) {
        var momentEndDate =  moment.utc(endDate);
        if (momentEndDate.isValid()) {
          result += momentEndDate.format(format);
        }
      } else {
        result += "Present";
      }
    }
    return result;
  });
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
