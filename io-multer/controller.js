fs = require('fs');

const textToFileController = (req, res) => {
  const { text } = req.body;

  console.log(text);

  try {
    fs.writeFile('userText.txt', text, function (err) {
      if (err) {
        return console.log(err);
      }
    });
    res.status(200).json({ message: 'file created' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'internal error' });
  }
};

const readFileController = (req, res) => {
  const { file } = req.params;
  try {
    fs.readFile(`${file}.txt`, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
      res.status(200).json({text: data});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'internal error' });
  }
};

module.exports = {
  textToFileController,
  readFileController,
};
