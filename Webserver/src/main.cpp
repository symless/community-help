#include <iostream>
#include "nlohmann/json.hpp"

#include "configuration/configuration.h"
#include "platforms/common/networking.hpp"



int main()
{
    std::cout << "Starting Service...";


    //Initilize everything
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

    networking::registerAPICommand("/help_requests", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello help_requests");
        return json.dump(4);
    });

    networking::registerAPICommand("/assistance_provided", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    networking::registerAPICommand("/help", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    networking::registerAPICommand("/assist", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    networking::registerAPICommand("/login", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    networking::registerAPICommand("/logout", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

    networking::registerAPICommand("/signup", [](const std::string& string)->std::string
    {
        nlohmann::json json = {};
        json.push_back("hello World");
        return json.dump(4);
    });

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
