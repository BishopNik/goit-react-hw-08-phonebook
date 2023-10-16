/** @format */

// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';

export function toastWindow(mes) {
	toast.error(mes, {
		icon: '❌',
	});
}
