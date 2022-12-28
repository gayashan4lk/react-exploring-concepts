export default function Layout({ children }) {
	return (
		<>
			<div className='container-main'>
				<div className='navbar'>
					<a href='/'>Home</a> | <a href='/'>Articles</a>
				</div>
				<div className='content'>{children}</div>
				<div className='footer'>
					<h5>Lion Queen | Copyright @ 2023</h5>
				</div>
			</div>
		</>
	);
}
