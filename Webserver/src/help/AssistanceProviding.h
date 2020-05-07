#ifndef INTERVIEW_WEBSERVER_ASSISTANCEPROVIDING
#define INTERVIEW_WEBSERVER_ASSISTANCEPROVIDING

struct {
    int id;
    std::string title;
    std::string description;
    std::string provider;
    int status; // TODO: Work on enum code for Open=0, In Progress=1, Closed=2, Cancelled=3 (More? Few?)
}

#endif //INTERVIEW_WEBSERVER_ASSISTANCEPROVIDING