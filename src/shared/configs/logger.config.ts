export const loggerConfig = {
  type: process.env.LOGGER_TYPE,
  isOpen: process.env.NODE_ENV === 'production' ? false : true,
};
