function Wrapper(props) {
	const {children} = props
    return (
        <div className="wrapper">
            <div className="container">
                <div className="out-border">{children}</div>
            </div>
        </div>
    );
}

export { Wrapper };
