file(GLOB headers "*.h")
file(GLOB sources "*.cpp")

list(APPEND sources ${headers})
add_library(help_server STATIC ${sources} )