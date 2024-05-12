/* GET Homepage */
const index = (req, res) => {
    ReadableByteStreamController.render('index', { title: "Travlr Getaways"});
};

module.exports = {
    index
}