export default function Home() {
	let name = 'sumin';
	let link = 'http://google.com';
	return (
		<div>
			{/* <h4 className="title" style={{ color: 'red', fontSize: '30px' }}>
				로따프레시
			</h4>
			<p className="title-sub">dev {name}</p> */}
			<div className="body-content">
				<div className="header">로따프레시</div>
				<div className="main-content">
					<div className="category">1</div>
					<div className="posting-area">2</div>
				</div>
			</div>
		</div>
	);
}
