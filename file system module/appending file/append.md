# Appending to a File:

- The fs.appendFile() method is used to synchronously append the data to the file.

## Syntax:

- fs.appendFile(filepath, data, options, callback);

  - or

- fs.appendFileSync(filepath, data, options);

## Parameters:

- filepath: It is a String that specifies the file path.
- data: It is mandatory and it contains the data that you append to the file.
- options: It is an optional parameter that specifies the encoding/mode/flag.
- Callback: Function is mandatory and is called when appending data to file is completed.
