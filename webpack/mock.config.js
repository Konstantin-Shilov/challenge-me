const path = require('path');
const fs = require('fs');

// eslint-disable-next-line no-unused-vars
const file = (pathToFile) => {
  return (req, res) => {
    let src = pathToFile;

    Object.keys(req.params).forEach((name) => {
      src = src.replace(`%${name}`, req.params[name]);
    });

    const filename = path.resolve(__dirname, src);

    if (fs.existsSync(filename)) {
      res.json(JSON.parse(fs.readFileSync(filename, 'utf8')));

      return;
    }

    res.status(404).send();
  };
};

// eslint-disable-next-line no-unused-vars
const emulate401 = (req, res) => {
  res.status(401).send();
};

// eslint-disable-next-line no-unused-vars
const echo = (req, res) => {
  res.json(req.body);
};

const config = {
  // Priority processing.
  _proxy: {
    changeHost: true,
  },
  // 'GET /api/*': file('../mock/*.json'),
};

module.exports = config;
