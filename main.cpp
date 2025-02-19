#include <iostream>
#include <cstdio>
#include <unistd.h>
using namespace std;

inline bool exists(const std::string &name)
{
  return (access(name.c_str(), F_OK) != -1);
}

int main(int argc, char *argv[])
{
  int buffer_size = 100;
  char buffer[buffer_size];
  if (argc < 2)
  {
    cout << "insufficient arguments";
    return 1;
  }

  char *arg = argv[1];

  snprintf(buffer, buffer_size, "git clone git@github.com:rajatsharma/%s.git", arg);
  system(buffer);

  snprintf(buffer, buffer_size, "%s/go.mod", arg);
  if (exists(buffer))
  {
    snprintf(buffer, buffer_size, "cd %s && go mod tidy", arg);
    system(buffer);
  }

  snprintf(buffer, buffer_size, "%s/package.json", arg);
  if (exists(buffer))
  {
    snprintf(buffer, buffer_size, "cd %s && pnpm i", arg);
    system(buffer);
  }

  return 0;
}
