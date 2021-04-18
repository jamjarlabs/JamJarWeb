# Multiplayer

This example shows how a game can use JamJar's networking protocols to provide multiplayer. This example uses the
[jamjar-relay-server](https://github.com/jamjarlabs/jamjar-relay-server) and the protocols it defines to request a
game server to relay messages. The relay server only handles basics on joining/leaving/host migration and allows
clients that are connected to send eachother messages - no game logic is handled on the relay server. Instead one of
the clients is assigned to be the 'host', and handles reconciling game logic locally and keeping everyone else in
sync by broadcasting messages.

This sample game is very simple, when you open the game it will provision a new room from the relay (if the user
is not using a link that targets a specific room) - once you make a new room you will be designated as the room host.
The game will then update the link in the URL to include the room details, this link can be copied and sent to another
user, who if they visit the link will join the same room as the you. If you leave the room (close the tab to
disconnect) then the relay server will migrate to a new host.

The game logic itself just allows any connected user to place a square, each client syncs and keeps track of the
squares, just incase the host disconnects to allow them to take over. When a new user joins or a host is migrated the
host will send a sync command to all of the other clients which defines the positions of the squares.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

You need to run the [jamjar-relay-server](https://github.com/jamjarlabs/jamjar-relay-server) to handle
provisioning rooms and relaying messages - the game is hardcoded to look for this relay server on `localhost:5000`.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
