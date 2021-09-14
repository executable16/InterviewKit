import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/DashboardComponent.css'
import CardComponent from './CardComponent'

import Array from './images/Array.png'
import Concurrency from './images/Concurrency.png'
import DP from './images/DP.png'
import Graph from './images/Graph.png'
import Greedy from './images/Greedy.png'
import Hashtable from './images/Hashtable.png'
import Heap from './images/Heap.png'
import LinkedList from './images/LinkedList.png'
import Primitive from './images/Primitive.png'
import RB from './images/R&B.png'
import Searching from './images/Searching.png'
import Sorting from './images/Sorting.png'
import SpecialTrees from './images/SpecialTrees.png'
import Stack from './images/Stack.png'
import String from './images/String.png'
import Tree from './images/Tree.png'


class DashboardComponent extends Component {
    render() {
        return (    
            <div className = "backgroundColor">
                <div className = "cards-list">
                    <Link to = "/dashboard/array"><CardComponent imageSource = {Array} category = "array"/></Link>
                    <Link to = "/dashboard/concurrency"><CardComponent imageSource = {Concurrency} category = "concurrency" /></Link>
                    <Link to = "/dashboard/dp"><CardComponent imageSource = {DP} category = "dp" /></Link>
                    <Link to = "/dashboard/graph"><CardComponent imageSource = {Graph} category = "graph" /></Link>
                </div>
                <div className = "cards-list">
                    <Link to = "/dashboard/greedy"><CardComponent imageSource = {Greedy} category = "greedy" /></Link>
                    <Link to = "/dashboard/hashtable"><CardComponent imageSource = {Hashtable} category = "hashtable"/></Link>
                    <Link to = "/dashboard/heap"><CardComponent imageSource = {Heap} category = "heap" /></Link>
                    <Link to = "/dashboard/linkedlist"><CardComponent imageSource = {LinkedList} category = "linkedlist" /></Link>
                </div>
                <div className = "cards-list">
                    <Link to = "/dashboard/primitive"><CardComponent imageSource = {Primitive} category = "primitive" /></Link>
                    <Link to = "/dashboard/rb"><CardComponent imageSource = {RB} category = "rb" /></Link>
                    <Link to = "/dashboard/searching"><CardComponent imageSource = {Searching} category = "searching" /></Link>
                    <Link to = "/dashboard/sorting"><CardComponent imageSource = {Sorting} category = "sorting"/></Link>
                </div>
                <div className = "cards-list">
                    <Link to = "/dashboard/specialtrees"><CardComponent imageSource = {SpecialTrees} category = "specialtrees"/></Link>
                    <Link to = "/dashboard/stack"><CardComponent imageSource = {Stack} category = "stack"/></Link>
                    <Link to = "/dashboard/string"><CardComponent imageSource = {String} category = "string"/></Link>
                    <Link to = "/dashboard/tree"><CardComponent imageSource = {Tree} category = "tree"/></Link>
                </div>
            </div>
                
)
    }
}

export default DashboardComponent
