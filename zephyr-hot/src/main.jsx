import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const lower = str => str.split('').map(item => item.toLowerCase()).join('');

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name :
      <span style={{color: '#f57d7d'}}>{product.name}</span>;
    
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (lower(product.name).indexOf(lower(filterText)) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleTextChange(e) {
    this.props.handleTextChange(e.target.value);
  }

  handleCheckboxChange(e) {
    this.props.handleCheckboxChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <form action="#">
        <input style={{ width: '90%', padding: '.2em .5em', fontWeight: '600' }}
              type="text" placeholder='Search...' value={filterText}
              onChange={e => this.handleTextChange(e)} />
        <p>
          <input type="checkbox" checked={inStockOnly}
                  onChange={e => this.handleCheckboxChange(e)} />
          {' '} Only show products in stock
        </p>
      </form>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleCheckboxChange(bool) {
    this.setState({ inStockOnly: bool });
  }

  handleTextChange(text) {
    this.setState({ filterText: text });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleCheckboxChange={this.handleCheckboxChange}
          handleTextChange={this.handleTextChange} />
        <ProductTable filterText={this.state.filterText}
                      inStockOnly={this.state.inStockOnly}
                      products={PRODUCTS} />
      </div>
    )
  }
}

root.render(<Main products={PRODUCTS} />);