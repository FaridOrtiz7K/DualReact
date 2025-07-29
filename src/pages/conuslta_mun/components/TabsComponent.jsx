
const TabsComponent = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              style={{ fontSize: '20px' }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabsComponent;