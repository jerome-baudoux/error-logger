(function (window, document, undefined) {
	'use strict';

	describe('ErrorLogger', function () {

		it('First there should be no logs', function () {
				expect(ErrorLogger.getInstance().getLogs()).toBe('');
		});

		it('ErrorLogger should be able to handle messages without stack', function () {
				ErrorLogger.getInstance().handleError('FIRST-LINE');
				expect(ErrorLogger.getInstance().getLogs()).toMatch(/.*FIRST-LINE/);
		});

		it('ErrorLogger should be able to handle messages with stack', function () {
				ErrorLogger.getInstance().handleError('SECOND-LINE', {
					stack: 'STACK'
				});
				var logs = ErrorLogger.getInstance().getLogs();
				expect(logs).toContain('SECOND-LINE');
				expect(logs).toContain('STACK');
		});

		it('ErrorLogger should be able to clean its own data', function () {
				ErrorLogger.getInstance().clearLogs();
				expect(ErrorLogger.getInstance().getLogs()).toBe('');
		});
		
		it('should be limited', function () {
				ErrorLogger.getInstance().setLinesInChunks(5);
				ErrorLogger.getInstance().setNbChunks(5);
				for(var i=1; i<=30; i++) {
					ErrorLogger.getInstance().handleError('LINE'+i);
				}
				var logs = ErrorLogger.getInstance().getLogs();
				expect(logs).not.toContain('LINE1\n');
				expect(logs).toContain('LINE6');
				expect(logs).toContain('LINE30');
		});
	
	});
	
}(window, document));
