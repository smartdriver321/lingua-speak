import React from 'react'

export default function IconButton({ Icon, onClick }) {
	return (
		<span
			className='cursor-pointer flex items-center space-x-2'
			onClick={onClick}
		>
			<Icon size={22} />
		</span>
	)
}
