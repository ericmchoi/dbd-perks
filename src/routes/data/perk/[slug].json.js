import fs from 'fs';
import yaml from 'js-yaml';

export function get(req, res, next) {
  const { slug } = req.params;
  const file = `data/perk/${slug}.yml`

  let data = yaml.safeLoad(fs.readFileSync(file));

  res.end(JSON.stringify(data));
}
