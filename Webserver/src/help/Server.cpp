//
// Created by jamie on 06/05/2020.
//

#include "Server.h"
#include "Person.h"
#include "HelpRequest.h"

int Server::s_nextSessionId = 0;

nlohmann::json Server::getListHelpRequests(const nlohmann::json &request) {
    nlohmann::json json;

    //TODO Check session for auth

    for (auto i = m_AllHelpRequests.begin(); i != m_AllHelpRequests.end(); i++)
    {
        nlohmann::json item;
        item["id"] = i->second->id;
        item["description"] = i->second->description;
        item["requester"] = i->second->requester;
        item["status"] = i->second->status;

        json.push_back(item);
    }

    return json;
}

nlohmann::json Server::getListAssistanceProvided(const nlohmann::json &request) {
    return nlohmann::json();
}

nlohmann::json Server::postNewHelpRequest(const nlohmann::json &request) {
    nlohmann::json response;
    HelpRequest* m_help = new HelpRequest;

    
    // The ID is just one plus the maximum size of the vector
    // This data would be provided by the database
    m_help->id = m_AllHelpRequests.size()+1;
    m_help->description = request["description"];
    m_help->requester = request["requester"];
    m_help->status = 0;

    // Insert the help request in the help list.
    m_AllHelpRequests.insert(std::make_pair(m_help->id, m_help));
    response["status"] = "Success";

    return response;
}

nlohmann::json Server::postAssistHelpRequest(const nlohmann::json &request) {
    return nlohmann::json();
}

nlohmann::json Server::login(const nlohmann::json &request) {
    nlohmann::json response;
    auto user = m_AllUsers.find(request["email"]);

    if (user != m_AllUsers.end() &&
        user->second->password == request["password"]){
        int session = s_nextSessionId++;
        m_sessions.insert(std::make_pair(session, user->second));
        response["status"] = "Success";
        response["session_id"] = session;
    }
    else if (user != m_AllUsers.end())
    {
        response["status"] = "FAILED";
        response["msg"] = "That Password didn't match";
    }
    else
    {
        response["status"] = "FAILED";
        response["msg"] = "That user doesnt exist";
    }
    return response;
}

nlohmann::json Server::logout(const nlohmann::json &request) {
    return nlohmann::json();
}

nlohmann::json Server::signup(const nlohmann::json &request) {
    nlohmann::json response;
    auto m_person = new Person;

    m_person->name = request["name"];
    m_person->postcode = request["postcode"];
    m_person->number = request["number"];
    m_person->email = request["email"];
    //TODO Store password encrypted
    m_person->password = request["password"];


    if (m_AllUsers.find(m_person->email) == m_AllUsers.end()){
        int session = s_nextSessionId++;

        m_AllUsers.insert(std::make_pair(m_person->email, m_person));
        m_sessions.insert(std::make_pair(session, m_person));
        response["status"] = "Success";
        response["session_id"] = session;
    }
    else
    {
        response["status"] = "FAILED";
        response["msg"] = "That user already exists";
    }
    return response;

}
