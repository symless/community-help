#include "networking.hpp"
#include <boost/asio.hpp>
#include "server/apiServer.h"

bool networking::startServerApi(const std::string& address, int port) {
    std::cout << "listening on " << address << ":" << port << std::endl;
    return apiServer::startApi(address, port) == 0;
}

bool networking::registerAPICommand(const std::string& command, std::function<std::string(const std::string&)> function)
{
    const auto result = apiServer::registerCommand(command, function);
    std::cout << "Registering: '" << command << "' " << (result ? "Success" : "Failed") << std::endl;

    return result;
}

bool networking::deregisterAPICommand(const std::string& command)
{
    const auto result = apiServer::deregisterCommand(command);
    std::cout << "Unregistering: '" << command << "' " << (result ? "Success" : "Failed") << std::endl;

    return result;
}
