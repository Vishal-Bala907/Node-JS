# Writing to a File:

- This method will overwrite the file if the file already exists. The fs.writeFile() method is used to asynchronously write the specified data to a file. By default, the file would be replaced if it exists. The ‘options’ parameter can be used to modify the functionality of the method.

## Syntax:

## fs.writeFile(path, data, options, callback)

Parameters:

## path:

- It is a string, Buffer, URL, or file description integer that denotes the path of the file where it has to be written. Using a file descriptor will make it behave similarly to fs.write() method.

## data:

- It is a string, Buffer, TypedArray, or DataView that will be written to the file.

## options:

- It is a string or object that can be used to specify optional parameters that will affect the

## output.

It has three optional parameters:

- encoding: It is a string value that specifies the encoding of the file. The default value is ‘utf8’.
- mode: It is an integer value that specifies the file mode. The default value is 0o666.
- flag: It is a string value that specifies the flag used while writing to the file. The default value is ‘w’.

- callback: It is the function that would be called when the method is executed.
- err: It is an error that would be thrown if the operation fails.
