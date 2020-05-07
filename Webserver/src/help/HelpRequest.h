//
// Created by jamie on 07/05/2020.
//

#ifndef INTERVIEW_WEBSERVER_HELPREQUEST_H
#define INTERVIEW_WEBSERVER_HELPREQUEST_H

#include <string>


struct HelpRequest {
    int id;
    std::string description;
    std::string requester;
    int status; // TODO: Work an enum for Open=0, In Progress=1, Closed=2, Cancelled=3
    int assistID; // ID for the assistance when Closed.
};


#endif //INTERVIEW_WEBSERVER_HELPREQUEST_H
