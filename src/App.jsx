import Home from './pages/home/Home'
import ItemDetail from './pages/itemDetail/ItemDetail'
import {Route} from 'wouter'
import Search from './pages/search/Search'
import {SearchResultContextProvider} from './context/searchResultContext'
import Category from './pages/category/Category'


function App() {

  return (
    <>
      <SearchResultContextProvider>
        <Route path='/' component={Home}/>
        <Route path='/search/:keyword' component={Search}/>
        <Route path='/itemdetail/:id' component={ItemDetail}/>
        <Route path='/category/:category' component={Category}/>
      </SearchResultContextProvider>
    </>
  )
}

export default App
