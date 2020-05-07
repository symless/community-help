#include <iostream>
#include "nlohmann/json.hpp"

#include "configuration/configuration.h"
#include "platforms/common/networking.hpp"
#include "help/Server.h"


int main()
{
    std::cout << "Starting Service...";


    //Initilize everything

    Server* m_helpServer = new Server;

    std::cout << " Done." << std::endl;
    //Main loop

    std::cout << "Starting web interface..." << std::endl;

    networking::registerAPICommand("/echo", [](const std::string& string)->std::string
    {
        return string;
    });

    networking::registerAPICommand("/hello", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    /**
     * @brief Return the  list of (open) helps registered in the system
     * //TODO: Code the behavior
     */
    networking::registerAPICommand("/help_requests", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello help_requests");
        return json.dump(4);
    });

    /**
     * @brief Return the list of (open) assistances registered in the system
     * //TODO: Code the behavior
     */
    networking::registerAPICommand("/assistance_provided", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    /**
     * @brief Registers a help entry in the system
     * //TODO: Implement the behavior
     */
    networking::registerAPICommand("/help", [](const std::string& string)->std::string
    {
        nlohmann::json json = nlohmann::json::parse(string);
        return m_helpServer->postNewHelpRequest(json).dump(4);
    });

    /**
     * @brief Registers an assistance entry in the system
     * 
     */
    networking::registerAPICommand("/assist", [m_helpServer](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    /**
     * @brief Logins
     * //TODO: Implement the behavior
     */
    networking::registerAPICommand("/login", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    /**
     * @brief 
     * //TODO: Implement the behavior
     */
    networking::registerAPICommand("/logout", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    /**
     * @brief 
     * //TODO: Implement the behavior
     */
    networking::registerAPICommand("/signup", [m_helpServer](const std::string& string)->std::string
    {
        nlohmann::json json = nlohmann::json::parse(string);
        return m_helpServer->signup(json).dump(4);
    });

    /**
     * @brief 
     * 
     */
    networking::registerAPICommand("/accept_help", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    networking::registerAPICommand("/select_assistance", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });


    networking::startServerApi();

    std::cout << "Stopping Service...";
    //Cleanup everything
    std::cout << " Done." << std::endl;
    //Exit
    return 0;

}
