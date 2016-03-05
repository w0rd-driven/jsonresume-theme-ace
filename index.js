var fileSystem = require("fs");
var handlebars = require("handlebars");
var layouts = require("handlebars-layouts");
var momentHandler = require("handlebars.moment");
var moment = require("moment");
var humanizeDuration = require("humanize-duration");

function render(resume) {
  // Register helpers
  momentHandler.registerHelpers(handlebars);
  handlebars.registerHelper("dateRange", function(startDate, endDate, format) {
    var result = "";
    if (startDate) {
      var momentStartDate =  moment.utc(startDate);
      if (momentStartDate.isValid()) {
        result += momentStartDate.format(format) + " - ";
      }
      if (endDate) {
        var momentEndDate =  moment.utc(endDate);
        if (momentEndDate.isValid()) {
          result += momentEndDate.format(format);
        }
      } else {
        result += "Present";
      }
    } else {
      if (endDate) {
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
  handlebars.registerHelper("dateDuration", function(startDate, endDate, options) {
    var result = "";
    if (startDate) {
      var start =  moment.utc(startDate);
      var end =  moment.utc();
      if (endDate)
        end = moment.utc(endDate);
      if (options) {
        optionsObject = (JSON.parse(options));
        //console.log(optionsObject);
      }
      result = humanizeDuration(moment.duration(end.diff(start)), optionsObject);
    }
    return result;
  });
  handlebars.registerHelper("toLower", function(input) {
    return input.toLowerCase();
  });
  handlebars.registerHelper(layouts(handlebars));
  // Register partials
  handlebars.registerPartial("layout", fileSystem.readFileSync(__dirname + "/layout.hbs", "utf8"));
  // Use internal stylesheet
  resume.css = fileSystem.readFileSync(__dirname + "/style.css", "utf-8");
  // Compile template
  var template = fileSystem.readFileSync(__dirname + "/resume.hbs", "utf-8");
  return handlebars.compile(template)(resume);
}

module.exports = {
  render: render
};
