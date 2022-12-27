function Tabs() {

    const openDisplay = (event) => {
        event.target.parentNode.className = "tabs-container"
    }

    return (
        <div className="tabs-container onload" onClick={openDisplay}>
            <a href="#display-data" className="tab1">
                Now
            </a>
            <a href="#display-details" className="tab2">
                Details
            </a>
            <a href="#display-forecast" className="tab3">
                Forecast
            </a>
        </div>
    );
}

export { Tabs };
