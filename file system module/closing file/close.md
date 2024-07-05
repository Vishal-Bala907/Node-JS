# Closing the File:

- The fs.close() method is used to asynchronously close the given file descriptor thereby clearing the file that is associated with it. This will allow the file descriptor to be reused for other files. Calling fs.close() on a file descriptor while some other operation is being performed on it may lead to undefined behavior.

## Syntax: fs.close(fd, callback)

Parameters:

## fd: It is an integer that denotes the file descriptor of the file for which to be closed.

## callback: It is a function that would be called when the method is executed.

## err: It is an error that would be thrown if the method fails.
