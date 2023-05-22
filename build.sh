#!/bin/bash

# Set variables
PROJECT_NAME="StaticReactApp"
SOURCE_DIR="src"
BUILD_DIR="build"

# Create build directory if it doesn't exist
if [ ! -d "$BUILD_DIR" ]; then
    mkdir "$BUILD_DIR"
fi

# Compile source code
gcc -o "$BUILD_DIR/$StaticReactApp" "$SOURCE_DIR/*.c"

# Check if compilation was successful
if [ $? -eq 0 ]; then
    echo "Compilation successful"
else
    echo "Compilation failed"
fi

# Run unit tests
"$BUILD_DIR/$StaticReactApp" --test

# Check if tests passed
if [ $? -eq 0 ]; then
    echo "All tests passed"
else
    echo "Some tests failed"
fi

# Copy binary to bin directory
cp "$BUILD_DIR/$StaticReactApp" bin/

# Clean up
rm -rf "$BUILD_DIR"