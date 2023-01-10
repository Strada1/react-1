function NavBar({ setActiveTab, activeTab }) {
    return (
        <nav className="tabs-items">
            <a
                href="#tab-01"
                className={`tabs-item tabs-item-1 ${activeTab}`}
                onClick={() => setActiveTab('tab-01')}
            >
                Now
            </a>
            <a
                href="#tab-02"
                className={`tabs-item tabs-item-2 ${activeTab}`}
                onClick={() => setActiveTab('tab-02')}
            >
                Details
            </a>
            <a
                href="#tab-03"
                className={`tabs-item tabs-item-3 ${activeTab}`}
                onClick={() => setActiveTab('tab-03')}
            >
                Forecast
            </a>
        </nav>
    )
}

export { NavBar }
