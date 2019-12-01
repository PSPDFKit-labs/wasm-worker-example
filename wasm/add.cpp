#include <iostream>

// extern "C" makes sure that the compiler does not mangle the name
extern "C" {
    int add(int a, int b) {
        return a + b;
    }
}