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
    std::int status; // TODO: Work an enum for Open=0, Canceled=1, Closed=2
};


#endif //INTERVIEW_WEBSERVER_HELPREQUEST_H
