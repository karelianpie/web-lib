import	{ethers}	from	'ethers';

export type TPartnersInfo = {
	id: string,
	originKey?: string,
	originURI?: string,
	walletType: string
}

/* 🔵 - Yearn Finance ******************************************************
** Get specific partner informations
**************************************************************************/
export function getPartner(partnerKey: string): TPartnersInfo {
	const isLedger = /ledger.com/.test(partnerKey);
	if (partnerKey === 'ledger-live' || isLedger) {
		return ({
			id: '0x558247e365be655f9144e1a0140D793984372Ef3',
			originKey: 'ledger-live',
			originURI: 'https://platform.apps.ledger.com',
			walletType: 'EMBED_LEDGER'
		});
	}
	return ({
		id: ethers.constants.AddressZero,
		originKey: '',
		originURI: '',
		walletType: 'NONE'
	});
}
