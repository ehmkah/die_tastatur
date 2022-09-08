#!/bin/zsh
# Export all known keyboard layouts
# To make this script work, the application needs to be started before
curl http://localhost:3000/keyboard-layouts/macosx_webstorm/file >webstorm_macosx.mwf
curl http://localhost:3000/keyboard-layouts/macosx_webstorm/html >webstorm_macosx.html
# empty board for working offline ideas
curl http://localhost:3000/keyboard-layouts/empty_keyboardlayout/file >empty_keyboardlayout.mwf
curl http://localhost:3000/keyboard-layouts/empty_keyboardlayout/html >empty_keyboardlayout.html