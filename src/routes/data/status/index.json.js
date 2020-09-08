import fs from 'fs';
import path from 'path';

export function get(req, res, next) {
  const directory = `data/status`;
  const files = fs.readdirSync(directory);

  let data = [];
  for (const file of files) {
    const parsed = path.parse(file);
    if (['.yml', '.yaml'].indexOf(parsed.ext) !== -1) {
      data.push(parsed.name);
    }
  }

  res.end(JSON.stringify(data));
}
