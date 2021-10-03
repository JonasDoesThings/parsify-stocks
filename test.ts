import test from 'ava';
import Parsify from '@parsify/core';
import parsifyStocksPlugin from './src';

test('general', async t => {
	const parsify = new Parsify([
		parsifyStocksPlugin()
	]);

	t.not(await parsify.parse('$TSLA'), '$TSLA');
	t.is(await parsify.parse('$ TSLA'), '$ TSLA');
	t.is(await parsify.parse('TSLA'), 'TSLA');
	t.is(await parsify.parse('$'), '$');
	t.is(await parsify.parse('$NOTEXISTING'), '$NOTEXISTING');
});
