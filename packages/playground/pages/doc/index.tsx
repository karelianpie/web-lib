import	React	from	'react';
import	{useBalances}	from	'@yearn-finance/web-lib/hooks/useBalances';

import type {ReactElement} from 'react';

function	Index(): ReactElement {
	const	{data} = useBalances({
		tokens: [
			{token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'},
			{token: '0xD533a949740bb3306d119CC777fa900bA034cd52'},
			{token: '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a'},
			{token: '0xc5bDdf9843308380375a611c18B50Fb9341f502A', for: '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a'},
			{token: '0x6c3f90f043a72fa612cbac8115ee7e52bde6e490', for: '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a'}
		]
	});
	
	console.log(data);
	return (
		<section aria-label={'some default section'}>
			{'Nothing to see here. Yet.'}
		</section>
	);
}

export default Index;
