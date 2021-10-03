import fetch from 'isomorphic-unfetch';

const tickerRegex = /\$[a-zA-Z\d]+/;

export default () => async (expression: string): Promise<string> => {
	if (expression.includes('$')) {
		const regexMatch = tickerRegex.exec(expression);

		if (regexMatch !== null) {
			const apiResponseRaw = await fetch(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${regexMatch[0].replace('$', '')}?modules=price`);
			const apiResponse = await apiResponseRaw.json();

			if (apiResponse.quoteSummary.result !== null && apiResponse.quoteSummary.result.length > 0) {
				return apiResponse.quoteSummary.result[0].price.regularMarketPrice.fmt;
			}
		}
	}

	return expression;
};
