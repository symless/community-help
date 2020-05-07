//
// Created by jamie on 06/05/2020.
//

#include "Server.h"
#include "Person.h"
#include "HelpRequest.h"

nlohmann::json Server::getListHelpRequests() {
    nlohmann::json json;
    return nlohmann::json();
}

nlohmann::json Server::getListAssistanceProvided() {
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
        response["status"] = "Success";
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
        m_AllUsers.insert(std::make_pair(m_person->email, m_person));
        response["status"] = "Success";
    }
    else
    {
        response["status"] = "FAILED";
        response["msg"] = "That user already exists";
    }
    return response;

}
