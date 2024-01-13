export const ENV = {
  port: +process.env.PORT ?? 1000,
  apiKeys: JSON.parse(process.env.API_KEYS ?? '[]') as string[],
  https: process.env.HTTPS === 'false' ? false : true,
};
