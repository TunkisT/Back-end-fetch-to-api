const { getNamesFromDb, insertNamesTodb } = require('../models/model');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getAndWriteNames(req, res) {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const input = data.results.map((result) => {
    return result.name.first;
  });
  console.log('input ===', input);

  await insertNamesTodb(input);
  const allNames = await getNamesFromDb();
  if (allNames === false) {
    res.json(' wrong in controller');
  }
  res.json(allNames);
}
module.exports = {
  getAndWriteNames,
};
