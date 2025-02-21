export interface TooltipOptions {
	delay?: number;
	text: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
}

export function tooltip(node: HTMLElement, params: string | TooltipOptions) {
	node.classList.add('tooltip');
	node.setAttribute('tabindex', '0');
	
	let delay = 1000;
	let text = '';
	let position = 'top';

	if (typeof params !== 'string') {
		text = params.text;
		if (params.delay) delay = params.delay;
		if (params.position) position = params.position;
	} else {
		text = params;
	}

	let timeout: ReturnType<typeof setTimeout> | null = $state(null);

	function handleFocus() {
		node.addEventListener('mouseleave', handleBlur);
		node.addEventListener('blur', handleBlur);
		node.removeEventListener('mouseenter', handleFocus);
		node.removeEventListener('focus', handleFocus);

		timeout = setTimeout(() => {
			const child = document.createElement('span');
			child.textContent = text;
			child.setAttribute('id', 'tooltip');
			child.classList.add(position);
			node.appendChild(child);
		}, delay);
	}

	function handleBlur() {
		node.removeEventListener('mouseleave', handleBlur);
		node.removeEventListener('blur', handleBlur);
		node.addEventListener('mouseenter', handleFocus);
		node.addEventListener('focus', handleFocus);

		clearTimeout(timeout as ReturnType<typeof setTimeout>);
		if(node.querySelector('#tooltip')) {
			node.removeChild(node.querySelector('#tooltip') as HTMLElement);
		}
	}
	
	node.addEventListener('mouseenter', handleFocus);
	node.addEventListener('focus', handleFocus);
	
	return {
		destroy() {
		 	node.classList.remove('tooltip');
			node.removeEventListener('mouseenter', handleFocus);
			node.removeEventListener('focus', handleFocus);
		}
	}
}