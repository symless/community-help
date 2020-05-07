//
// Created by jamie on 06/05/2020.
//

#ifndef INTERVIEW_WEBSERVER_SERVER_H
#define INTERVIEW_WEBSERVER_SERVER_H

#include <nlohmann/json.hpp>


class HelpRequest;
struct Person;

class Server {

public:

    nlohmann::json getListHelpRequests(const nlohmann::json &request);
    nlohmann::json getListAssistanceProvided(const nlohmann::json &request);

    nlohmann::json postNewHelpRequest(const nlohmann::json& request);
    nlohmann::json postAssistHelpRequest(const nlohmann::json& request);

    nlohmann::json login(const nlohmann::json& request);
    nlohmann::json logout(const nlohmann::json& request);
    nlohmann::json signup(const nlohmann::json& request);


protected:


private:

    /// @brief Contains all the help requests in that have bee submitted
    std::map<int, HelpRequest*> m_AllHelpRequests;
    std::map<std::string, Person*> m_AllUsers;

    std::map<int, Person*> m_sessions;

    //TODO Make session id a random ascii string that cant be guessed
    static int s_nextSessionId;
};


#endif //INTERVIEW_WEBSERVER_SERVER_H
