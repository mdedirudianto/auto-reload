let express = require('express');
let app = express();
let reload = require('reload');

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', { title: 'Hello', message: 'Hello dari server!' })
})

reload(app);

app.listen(4000, () => console.log('App listening on \'http://localhost:4000\''));
