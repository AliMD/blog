const env = {
  // ...process.env,
  siteUrl: process.env.siteUrl ?? '',
  noIndex: process.env.noIndex === '1',
};

console.log(JSON.stringify(env));

module.exports = env;
