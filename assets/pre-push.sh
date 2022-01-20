#!/bin/sh

# An example hook script to verify what is about to be pushed.  
# Called by "git push" after it has checked the remote status, but before anything has been pushed


echo "Something is wrong with the tests, not pushing!"
exit 1