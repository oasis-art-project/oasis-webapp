export const isProd = process.env.NODE_ENV !== 'development';

export const IMGS_URL = isProd ? 'https://oasis-storage.s3.amazonaws.com' : '/imgs'
