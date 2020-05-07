//
// Created by jamie on 06/05/2020.
//

#include "Server.h"
#include "Person.h"
#include "HelpRequest.h"
#include "AssistanceProviding.h"

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



nlohmann::json Server::postNewAssistanceProviding(const nlohmann::json &request) {
    nlohmann::json response;
    AssistanceProviding* m_assist = new AssistanceProviding;

    // The ID is just one plus the maximum size of the vector
    // This data would be provided by the database
    m_assist->id = m_AllAssistanceProviding.size()+1;
    m_assist->title = request["title"];
    m_assist->description = request["description"];
    m_assist->provider = request["provider"];
    m_assist->status = 0;

    // Insert the help request in the help list.
    m_AllAssistanceProviding.insert(std::make_pair(m_assist->id, m_help));
    response["status"] = "Success";

    return response;
}

    
nlohmann::json postAcceptToHelp(const nlohmann::json& request) {
    nlohmann::json response;
    AssistanceProviding* m_assist = new AssistanceProviding;

    std::string title ("Quick Assistance Provided to ");

    int helpID = std::stoi(request["id"]);

    //Retrieve the help object from the m_AllHelpRequests
    HelpRequest* m_help = m_AllHelpRequests[id];

    // Create a new assistance to instant match the help
    m_assist->id = m_AllAssistanceProviding.size()+1;

    // Relate the assistance to the help request
    m_help->assistID = m_assist->id;
    m_help->status  = 1; // In progress
    // Composes the Title to let the help requester and assistance provider to know they are helping each other
    m_assist->title = title + m_help->requester;

    m_assist->description = request["description"];
    m_assist->provider = request["provider"];
    m_assist->status = 1;

    // Insert the help request in the help list.
    m_AllAssistanceProviding.insert(std::make_pair(m_assist->id, m_assist));

    response["status"] = "Success";

    return response;
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
