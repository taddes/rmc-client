const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const router = express.Router();
const bodyParser = require('body-parser')

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    console.log('Invalid image type')
    cb(null, false)
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

AWS.config.update({
  secretAccessKey: process.env.secretAccessKey,
  accessKeyId: process.env.accessKeyId,
  region: process.env.region
});

let s3 = new AWS.S3();


// let upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'http://s3.amazonaws.com/passport-rmc',
//     key: function (req, file, cb) {
//       console.log(file);
//       cb(null, file.originalname);
//     }
//   })
// });

console.log({upload})
console.log(upload)



const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/submit', upload.single('logo'), function (req, res, next) {
  console.log(req.file)
  const font = req.body.font;
  const navColor = req.body.navColor;
  const navFontColor = req.body.navFontColor;
  const navBtnColor = req.body.navBtnColor;
  const navBtnHoverColor = req.body.navBtnHoverColor;
  const btnColor = req.body.btnColor;
  const btnHoverColor = req.body.btnHoverColor;
  const btnFontColor = req.body.btnFontColor;
  const btnHoverFontColor = req.body.btnHoverFontColor;
  const panelColor = req.body.panelColor;
  const logo = req.body.logo;
  // console.log(req.body);

  let result  = fs.readFile('public/css/default-css.css', 'utf-8', (err, data) => {
    // console.log(data);
    if (err) {
      throw err;
    } 

    Object.entries(req.body).forEach((entry => {
      data = data.replace(entry[0], entry[1])
    }))

    console.log(data);

    fs.writeFileSync('new.css', data, 'utf-8')
  })
  res.send({
    message: 'Files created and uploaded',
    logo: req.file,
    data: req.body
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`)
});