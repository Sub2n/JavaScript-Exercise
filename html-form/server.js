// import 문 같은 것
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// middleware => public folder를 root folder로 삼는다.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// server에 get 요청이 오면 할 일에 대한 event handler
app.get('/', (req, res) => {
  // res.send('Hello World');
  res.json({
    id: 1
  });
});

app.post('/signup', (req, res) => {
  res.json(req.body);
});

app.listen(7000, () => console.log('http://localhost:7000'));
