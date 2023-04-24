# Node as a server

## Steps

-   `cd` into project root
-   `pnpm i` (`npm` or `yarn` is fine)

### Development

-   `pnpm dev` - Runs the server on watch with nodemon
-   Server will be live at `http://localhost:8000`

### Development build

-   `pnpm build` - Builds the TS from `./src` to `./build`
-   `pnpm start` - Starts the server, will be live at `http://localhost:8000`

### Full production view

-   `pnpm build` - Builds the TS from `./src` to `./build`
-   `pnpm process:start` - Starts the server managed with pm2
-   `Caddy run` - Starts a reverse proxy, useful to see as a none local env will require one
-   Server will be live at `https://api.localhost:8001`
-   Notice the `https`, useful for testing that requires `ssl`

### Managing the server

-   `pnpm process:start` starts up the server
-   `pnpm process:stop` stops the server, but the process is still active
-   `pnpm process:restart` restarts the server, active or not
-   `pnpm process:delete` stops the server and remove the process, i.e kills it

#### ENV Variables

-   Required `env` variables are parsed on server start, if they are not availble, the server will not start. This ensures the required vars are available.
