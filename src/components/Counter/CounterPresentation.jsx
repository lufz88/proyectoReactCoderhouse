function CounterPresentation({ counter, sumar, restar }) {
	return (
		<div>
			<h1>Este es el contador</h1>
			<h3>{counter}</h3>
			<button onClick={sumar}>Sumar</button>
			<button onClick={restar}>Restar</button>
		</div>
	);
}

export default CounterPresentation;
