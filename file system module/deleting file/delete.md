# Delete a File

- The fs.unlink() method is used to remove a file or symbolic link from the filesystem. This function does not work on directories, therefore it is recommended to use fs.rmdir() to remove a directory.

## Syntax: fs.unlink(path, callback)

### Parameters

- path: It is a string, Buffer or URL which represents the file or symbolic link which has to be removed.
- callback: It is a function that would be called when the method is executed.
- err: It is an error that would be thrown if the method fails.
