// modules => alias: __dirname + '/node_modules' | Definido em webpack.config.js
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <div className="container">
        <Todo />
        < About />
    </div>
)