# strapi-docker-starter

A Strapi 4 template project using PostgreSQL with Docker and Docker Compose support

This repository is associated with a blog post, for more details please head to the post from [here](https://razinj.dev/how-to-run-strapi-4-in-a-docker-container-using-docker-compose/).

## Development deployment

1. Install `npm` dependencies (run command in `app` directory)

    ```bash
    npm i
    ```

2. Launch development database

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d db
    ```

3. Run Strapi in development mode

    ```bash
    npm run develop
    ```

4. Shutdown development database (optional)

    ```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
    ```

## Production deployment

1. Build Strapi admin panel (run command in `app` directory)

    ```bash
    npm run build
    ```

2. Run with Docker Compose (run in repository root directory)

    ```bash
    docker-compose up -d --build
    ```

---

Consider buying us a coffee ❤️
<div style="text-align: center">
  <a href="https://www.buymeacoffee.com/razinj.dev" target="_blank">
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      alt="Buy Us A Coffee"
      style="height: 60px !important; width: 217px !important"
    />
  </a>
</div>
