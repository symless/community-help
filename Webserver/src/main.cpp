#include <iostream>
#include "nlohmann/json.hpp"

#include "configuration/configuration.h"
#include "platforms/common/networking.hpp"



int main()
{
    std::cout << "Starting Service...";


    //Initilkize everything
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

    networking::startServerApi();

    std::cout << "Stopping Service...";
    //Cleanup everything
    std::cout << " Done." << std::endl;
    //Exit
    return 0;

}
