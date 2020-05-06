//
// Created by jamie on 06/05/2020.
//

#ifndef INTERVIEW_WEBSERVER_SERVER_H
#define INTERVIEW_WEBSERVER_SERVER_H

#include <nlohmann/json.hpp>


class server {

public:

    nlohmann::json getListHelpRequests();
    nlohmann::json getListAssistanceProvided();

    nlohmann::json postNewHelpRequest(const nlohmann::json& request);
    nlohmann::json postAssistHelpRequest(const nlohmann::json& request);


    nlohmann::json login(const nlohmann::json& request);
    nlohmann::json logout(const nlohmann::json& request);
    nlohmann::json signup(const nlohmann::json& request);


protected:


private:



};


#endif //INTERVIEW_WEBSERVER_SERVER_H
