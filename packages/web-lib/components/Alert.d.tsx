import	{ReactElement}	from	'react';

export type	TAlertLevels = 'none' | 'info' | 'warning' | 'error' | 'critical';

export type	TAlertBanner = {
	title: string,
	level?: TAlertLevels,
	children: ReactElement | ReactElement[],
	canClose?: boolean,
	isVisible?: boolean,
	onClose?: () => void,
	maxHeight?: string
}

export type TAlertBox = {
	alerts: string[],
	level: TAlertLevels
}