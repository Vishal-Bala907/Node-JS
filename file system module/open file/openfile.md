# Open a File:

### The fs.open() method is used to create, read, or write a file. The fs.readFile() method is only for reading the file and fs.writeFile() method is only for writing to the file, whereas _fs.open()_ method does several operations on a file. First, we need to load the fs class which is a module to access the physical file system. Syntax:

## fs.open(path, flags, mode, callback)

Parameters:

## path:

- It holds the name of the file to read or the entire path if stored at other locations.

# flags:

- Flags indicate the behavior of the file to be opened.
- All possible values are
  - r,
  - r+,
  - rs,
  - rs+,
  - w,
  - wx,
  - w+,
  - wx+,
  - a,
  - ax,
  - a+,
  - ax+
    mode: Sets the mode of file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.

### err: If any error occurs.

### data: Contents of the file. It is called after the open operation is executed.
