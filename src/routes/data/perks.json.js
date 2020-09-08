import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function get(req, res, next) {
  const directory = `data/perk`;
  let files = fs.readdirSync(directory);

  let data = [];
  for (let file of files) {
    if (['yml', 'yaml'].indexOf(file.split('.').pop()) !== -1) {
      data.push(yaml.safeLoad(fs.readFileSync(path.join(directory, file))));
    }
  }

  data.sort((a, b) => a.name.localeCompare(b.name));

  res.end(JSON.stringify(data));
}
