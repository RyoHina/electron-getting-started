# electron-getting-started

### getting-started
The code copied from https://electronjs.org.

RUN: 
	```npm start```
  
BUILD PACKAGE:
	```electron-packager . --electron-version 5.0.4 --platfrom win32 --arch ia32```
  
BUILD INSTALLER
	```electron-builder --platform=win32  --arch=ia32```
	
### process communication(render process -> main process)
