
import './App.css';
//import TabNavigation from './TabNavigation';
//import TabPagination from './TabPagination';
//import TabPaginationNavigation from './TabPaginationNavigation';
import TabPaginationGridNavigation from './TabPaginationGridNavigation';
function App() {
  return (
    <div className="App">
      <p>MUI Tabs and Pagination with one sample API</p>
      {/*<TabNavigation />*/}

      {/*<TabPaginationNavigation />*/}
      <TabPaginationGridNavigation />
      {/*<TabPagination />*/}
    </div>
  );
}

export default App;
