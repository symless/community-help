#ifndef NETWORKING_HPP
#define NETWORKING_HPP
/*
 * Intervew Service
 * Copyright (C) 2019 Symless Ltd.
 *
 */

/**
 * @file networking.hpp
 * @author Jamie Newbon
 * @date 23/09/2019
 * @brief Contains common networking functions
 * 
 */


#include <list>

#include "boost/asio/ip/address.hpp"

class networking
{
public:

    /**
     * \brief Start the api listener
     * \param address The the address to listen on
     * \param port The the port to listen on
     * \return True if the server is listening
     */
    static bool startServerApi(const std::string& address = "0.0.0.0", int port = 24825);

    /**
     * \brief Add a new command to the API
     * \param command The name/uri of the command
     * \param function The function to execute when the command is called
     * \return True if the command was successfully added
     */
    static bool registerAPICommand(const std::string& command, std::function<std::string(const std::string&)> function);
    
    /**
    * \brief Removes a command from the list to be executed
    * \param command The command to be removed
    * \return True if the command was successfully removed
    */
    static bool deregisterAPICommand(const std::string& command);
};


#endif
