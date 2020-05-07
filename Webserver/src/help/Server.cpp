//
// Created by jamie on 06/05/2020.
//

#include "Server.h"
#include "Person.h"

nlohmann::json Server::getListHelpRequests() {
    nlohmann::json json;
    return nlohmann::json();
}

nlohmann::json Server::getListAssistanceProvided() {
    return nlohmann::json();
}

nlohmann::json Server::postNewHelpRequest(const nlohmann::json &request) {
    return nlohmann::json();
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
