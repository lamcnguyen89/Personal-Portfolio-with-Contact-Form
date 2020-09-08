//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================
const path = require("path");

//=============================================
// ROUTING
//=============================================

module.exports = function(app) {

    // GET `/` is the index file or the About Me page:
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
 
    // GET "/portfolio" shows the portfolio page
    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });
    
    // GET "/contact" shows the Contact Me page
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    // GET `*` - Should return the `index.html` file. I've got to remember that this * means "all other" and it has to go last in all the get and post requests. Otherwise nothing else will work
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};