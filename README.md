# XUL Skeleton #

The XUL Skeleton is an empty [XUL application](https://developer.mozilla.org/en/docs/XUL) and build script for Windows, Mac and Linux.

The application provides an empty window and an OS-sensitive menu bar. From here you can develop a pure XUL application or develop a cross-platform HTML5-based desktop app (possibly using [the XUL iframe element](https://developer.mozilla.org/en-US/docs/XUL/iframe)).

The application XUL source code is in the `src` directory. The default start file is `src/chrome/content/main.xul`.

See the XUL documentation on Mozilla Developer Network for help building a XUL-based applicatoin. And have fun!

## Building ##

The build script uses [Apache Ant](http://ant.apache.org/). Make sure you have Ant installed then navigate to the XUL Skeleton directory from the command line and type:

    ant

This will build your project for Windows, Mac and two flavours of Linux (32-bit and 64-bit). When the build script is done, look in the `bin` directory to find your application.

To build for just one platform, type:

    ant win
    ant mac
    ant linux32
    ant linux64

Should you wish to clean your project in the `bin` directory, type:

    ant clean

## Configuration ##

The name for your application can be set in the `build.properties` file. In this file, you can also modify the copyright information, application ID and package identifier used by the Mac platform.

The icons to be used by your applications are located in the `src` directory and can be updated directly. You can change the paths or filenames of these icons in `build.properties` but they should always reside in the `src` directory.

## XULRunner verion ##

[XULRunner](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/XULRunner) is the runtime package used by XUL applications. XULRunner needs to be bundled with your application so that user don't need to install it seperately.

The first time you build your application for a platform, the build script will download XULRunner from the Mozilla website. Thereafter, it will only be downloaded if the build script detects it has been removed.

The version of XULRunner used in this version of the XUL Skeleton is version 27.0.

# License #

The XUL Skeleton is licensed under the [MIT license](http://opensource.org/licenses/MIT), with the exception of the rocket icon, which is copyright of the Oxygen Team and is licensed under the [LGPL](https://www.gnu.org/licenses/lgpl.html).
