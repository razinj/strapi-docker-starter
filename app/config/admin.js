module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bc76facd83b6fc8de0eca52c38bafd01'),
  },
});
