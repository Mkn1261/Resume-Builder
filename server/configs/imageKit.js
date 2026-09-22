import ImageKit from '@imagekit/nodejs';

const getImageKit = () => {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error('IMAGEKIT_PRIVATE_KEY is not configured');
  }

  return new ImageKit({ privateKey });
};

export default getImageKit;