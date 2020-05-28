interface Options {
	upperCase?: boolean;
}

/*
	This is the main function you want to export.
	You can add options for customization (in this case `upperCase`).
	It receives the expression, which you need to validate and either do something with it or return the original expression.
*/
export default ({upperCase = false}: Options = {}) => async (expression: string): Promise<string> => {
	/*
		Users can't set individual arguments for each plugin in Parsify Desktop.
		Instead, they can use the global configuration in settings, which uses environmental variables.
		You may want to remove the following block if you are not going to use this plugin in Parsify Desktop.
	*/
	if (process.env.UPPER_CASE) {
		// Since enviromental variables are just strings, we need to parse them.
		upperCase = process.env.UPPER_CASE === 'true' && true;
	}

	// Validate the expression to see if it should be processed by your plugin
	if (expression === 'hello') {
		if (upperCase) {
			return 'HELLO WORLD!';
		}

		return 'hello world!';
	}

	// If the expression validation fails, just return the expression
	return expression;
};
