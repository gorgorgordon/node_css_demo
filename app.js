const express = require("express");
const app = express();
app.use(express.static("public"));

const path = require('path');


app.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('index.html', options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
