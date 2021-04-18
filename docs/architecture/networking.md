# Networking

JamJar uses the [jamjar-relay-server](https://github.com/jamjarlabs/jamjar-relay-server) protocol to handle networking,
allowing use of a central relay server to allow client hosted games. This protocol defines a number of messages and
actions that can be done (e.g. connecting, listing clients, migrating hosts) while also providing a mechanism to
relay messages to other clients. This allows for client-hosted servers, with one client acting as a host and
deciding how the game logic is processed.

The networking that JamJar supports is `v1` of the relay server protocol, there is a [WebSocketNetworkSystem] that
is provided with JamJar which implements the protocol, converting messages and actions from the protocol into JamJar
messages, while also providing the ability to relay JamJar messages to other clients. The [WebSocketNetworkSystem] uses
a tick rate for outbound messages, meaning that outbound messages are stored in a queue and then published together
on every tick. The inbound messages are also stored in a list, but are propogated to the rest of the game engine on
every game update.
