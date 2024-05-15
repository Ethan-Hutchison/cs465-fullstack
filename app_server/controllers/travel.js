const tripsEndPoint = 'http://localhost:300/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

const travel = async function(req, res,next) {
    await fetch(tripsEndPoint, options)
        .then(res => res.json())
        .then(json => {

            let message = null;
            if(!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];
            } else {
                if(!json.length) {
                    message= 'No trips exist in our database!';
                }
            }
            res.render('travel', {title: 'Travlr Getaways' , trips: json});
        })
        .catch(err => res.status(500).send(e.message));
};

module.exports = {
    travel
};