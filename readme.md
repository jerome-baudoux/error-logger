Error-logger by Jérôme Baudoux
=======
http://www.jerome-baudoux.com

* Version 1.0
* Release date: 2014-09-20

Overview
-------
This logger allows to hold errors on the client side using webstorage.

To use it, simply call:

    ErrorLogger.getInstance().handleError('Your message');
	
You can also use it to catch an exception

    try {
	    ...
	} catch (e) {
	    ErrorLogger.getInstance().handleError('Your message', e);
	}
	
To collect all error, simply call the method:

	ErrorLogger.getInstance().getLogs();
	
And if you want to clear the content, use:

	ErrorLogger.getInstance().clearLogs();
	
By default, Error-logger will hold around 10 Chunks of 100 lines.

You can obviously change this behavior

    ErrorLogger.getInstance().setLinesInChunks(20);
    ErrorLogger.getInstance().setNbChunks(300); 

License
-------
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
 
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>